import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { SUPPORT_PLANS } from '@/lib/constants'

// Rate limiting: max 10 checkout attempts per IP per hour
const attempts = new Map<string, { count: number; resetAt: number }>()

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for') ?? 'unknown'
  const now = Date.now()
  const entry = attempts.get(ip)

  if (entry && now < entry.resetAt) {
    if (entry.count >= 10) {
      return NextResponse.json({ error: 'Zu viele Anfragen' }, { status: 429 })
    }
    entry.count++
  } else {
    attempts.set(ip, { count: 1, resetAt: now + 3_600_000 })
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

  let body: { planId?: string; ref?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Ungültige Anfrage' }, { status: 400 })
  }

  const plan = SUPPORT_PLANS.find((p) => p.id === body.planId)
  if (!plan) {
    return NextResponse.json({ error: 'Unbekanntes Paket' }, { status: 400 })
  }

  const isSubscription  = plan.billingType === 'subscription'
  const isBestandskunde = body.ref === 'bestandskunde'
  const couponId        = isBestandskunde ? process.env.STRIPE_BESTANDSKUNDE_COUPON : undefined

  const session = await stripe.checkout.sessions.create({
    mode: isSubscription ? 'subscription' : 'payment',
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: `DevOS Web — ${plan.name}`,
            description: `${plan.features.slice(0, 3).join(' · ')}`,
          },
          unit_amount: plan.totalPrice * 100,
          ...(isSubscription && { recurring: { interval: 'month' } }),
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?type=support&plan=${plan.id}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/leistungen#support`,
    locale: 'de',
    billing_address_collection: 'required',
    custom_text: {
      submit: {
        message: isSubscription
          ? 'Ihr Abonnement startet sofort. Monatlich kündbar. Keine MwSt. gem. §19 UStG.'
          : `Laufzeit: ${plan.duration}. Keine MwSt. gem. §19 UStG.`,
      },
    },
    metadata: { planId: plan.id, ref: body.ref ?? '' },
    ...(couponId && { discounts: [{ coupon: couponId }] }),
  })

  return NextResponse.json({ url: session.url })
}
