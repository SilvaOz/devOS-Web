'use client'

import { useRef, useState, useCallback } from 'react'
import type React from 'react'
import { Webhook, Database, Settings, Mail, Zap, Plus, ArrowRight } from 'lucide-react'

// ─── Types ─────────────────────────────────────────────────────────────────────

interface WorkflowNode {
  id: string
  type: 'trigger' | 'action' | 'condition'
  title: string
  description: string
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  color: string
  position: { x: number; y: number }
}

interface WorkflowConnection {
  from: string
  to: string
}

// ─── Constants ─────────────────────────────────────────────────────────────────

const NODE_WIDTH  = 200
const NODE_HEIGHT = 100

const nodeTemplates: Omit<WorkflowNode, 'id' | 'position'>[] = [
  { type: 'trigger',   title: 'Webhook',        description: 'Empfängt Daten von externen Diensten', icon: Webhook,  color: 'emerald' },
  { type: 'action',    title: 'Datenbankabfrage', description: 'Ruft Benutzerdaten ab',              icon: Database, color: 'blue'    },
  { type: 'condition', title: 'Bedingung',        description: 'Überprüft Benutzerstatus',           icon: Settings, color: 'amber'   },
  { type: 'action',    title: 'E-Mail senden',    description: 'Benachrichtigt den Benutzer',        icon: Mail,     color: 'purple'  },
  { type: 'action',    title: 'Ereignis loggen',  description: 'Zeichnet Aktivität auf',             icon: Zap,      color: 'indigo'  },
]

const initialNodes: WorkflowNode[] = [
  { id: 'node-1', type: 'trigger',   title: 'Webhook',         description: 'Empfängt Daten von externen Diensten', icon: Webhook,  color: 'emerald', position: { x: 50,  y: 80 } },
  { id: 'node-2', type: 'action',    title: 'Datenbankabfrage', description: 'Ruft Benutzerdaten ab',              icon: Database, color: 'blue',    position: { x: 300, y: 80 } },
  { id: 'node-3', type: 'condition', title: 'Bedingung',        description: 'Überprüft Benutzerstatus',           icon: Settings, color: 'amber',   position: { x: 550, y: 80 } },
]

const initialConnections: WorkflowConnection[] = [
  { from: 'node-1', to: 'node-2' },
  { from: 'node-2', to: 'node-3' },
]

const nodeColors: Record<string, { border: string; bg: string; text: string }> = {
  emerald: { border: 'rgba(52,211,153,0.35)',  bg: 'rgba(52,211,153,0.07)',  text: '#34d399' },
  blue:    { border: 'rgba(96,165,250,0.35)',   bg: 'rgba(96,165,250,0.07)',  text: '#60a5fa' },
  amber:   { border: 'rgba(251,191,36,0.35)',   bg: 'rgba(251,191,36,0.07)', text: '#fbbf24' },
  purple:  { border: 'rgba(167,139,250,0.35)',  bg: 'rgba(167,139,250,0.07)', text: '#a78bfa' },
  indigo:  { border: 'rgba(129,140,248,0.35)',  bg: 'rgba(129,140,248,0.07)', text: '#818cf8' },
}

// ─── Connection SVG line ────────────────────────────────────────────────────────

function ConnectionLine({ from, to, nodes }: { from: string; to: string; nodes: WorkflowNode[] }) {
  const fromNode = nodes.find(n => n.id === from)
  const toNode   = nodes.find(n => n.id === to)
  if (!fromNode || !toNode) return null

  const startX = fromNode.position.x + NODE_WIDTH
  const startY = fromNode.position.y + NODE_HEIGHT / 2
  const endX   = toNode.position.x
  const endY   = toNode.position.y + NODE_HEIGHT / 2
  const cp1X   = startX + (endX - startX) * 0.5
  const cp2X   = endX   - (endX - startX) * 0.5

  return (
    <path
      d={`M${startX},${startY} C${cp1X},${startY} ${cp2X},${endY} ${endX},${endY}`}
      fill="none"
      stroke="var(--border)"
      strokeWidth={2}
      strokeDasharray="8,5"
      strokeLinecap="round"
      opacity={0.7}
    />
  )
}

// ─── Main component ─────────────────────────────────────────────────────────────

export function WorkflowDemo() {
  const [nodes, setNodes]           = useState<WorkflowNode[]>(initialNodes)
  const [connections, setConnections] = useState<WorkflowConnection[]>(initialConnections)
  const [draggingId, setDraggingId] = useState<string | null>(null)
  const canvasRef  = useRef<HTMLDivElement>(null)
  const nodesRef   = useRef(nodes)
  nodesRef.current = nodes

  const dragStateRef = useRef<{
    nodeId: string
    startClientX: number
    startClientY: number
    startNodeX: number
    startNodeY: number
  } | null>(null)

  const handlePointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>, nodeId: string) => {
    e.preventDefault()
    e.currentTarget.setPointerCapture(e.pointerId)
    const node = nodesRef.current.find(n => n.id === nodeId)
    if (!node) return
    dragStateRef.current = {
      nodeId,
      startClientX: e.clientX,
      startClientY: e.clientY,
      startNodeX: node.position.x,
      startNodeY: node.position.y,
    }
    setDraggingId(nodeId)
  }, [])

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>, nodeId: string) => {
    const ds = dragStateRef.current
    if (!ds || ds.nodeId !== nodeId) return
    const newX = Math.max(0, ds.startNodeX + (e.clientX - ds.startClientX))
    const newY = Math.max(0, ds.startNodeY + (e.clientY - ds.startClientY))
    setNodes(prev => prev.map(n => n.id === nodeId ? { ...n, position: { x: newX, y: newY } } : n))
  }, [])

  const handlePointerUp = useCallback(() => {
    dragStateRef.current = null
    setDraggingId(null)
  }, [])

  const addNode = () => {
    const template  = nodeTemplates[Math.floor(Math.random() * nodeTemplates.length)]
    const lastNode  = nodes[nodes.length - 1]
    const newPos    = lastNode
      ? { x: lastNode.position.x + 250, y: lastNode.position.y }
      : { x: 50, y: 80 }
    const newNode: WorkflowNode = { id: `node-${Date.now()}`, ...template, position: newPos }
    setNodes(prev => [...prev, newNode])
    if (lastNode) setConnections(prev => [...prev, { from: lastNode.id, to: newNode.id }])
    if (canvasRef.current) {
      canvasRef.current.scrollTo({
        left: newPos.x + NODE_WIDTH - canvasRef.current.clientWidth + 100,
        behavior: 'smooth',
      })
    }
  }

  const svgW = Math.max(...nodes.map(n => n.position.x + NODE_WIDTH + 60),  760)
  const svgH = Math.max(...nodes.map(n => n.position.y + NODE_HEIGHT + 60), 280)

  return (
    <div
      className="rounded-2xl border overflow-hidden"
      style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-3 border-b"
        style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)' }}
      >
        <div className="flex items-center gap-3">
          <span
            className="flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full"
            style={{
              background: 'rgba(52,211,153,0.1)',
              color: '#34d399',
              border: '1px solid rgba(52,211,153,0.3)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#34d399' }} />
            Aktiv
          </span>
          <span
            className="text-xs font-mono uppercase tracking-widest"
            style={{ color: 'var(--muted)' }}
          >
            Workflow Builder
          </span>
        </div>

        <button
          onClick={addNode}
          className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors duration-150 hover:opacity-80"
          style={{
            color: 'var(--fg)',
            borderColor: 'var(--border)',
            background: 'var(--bg)',
          }}
        >
          <Plus className="w-3.5 h-3.5" />
          Node
        </button>
      </div>

      {/* Canvas */}
      <div
        ref={canvasRef}
        className="relative overflow-auto"
        style={{ height: '360px', background: 'var(--bg)' }}
        role="region"
        aria-label="Workflow-Canvas"
      >
        <div style={{ minWidth: svgW, minHeight: svgH, position: 'relative' }}>

          {/* SVG connections */}
          <svg
            aria-hidden="true"
            style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', overflow: 'visible' }}
            width={svgW}
            height={svgH}
          >
            {connections.map(c => (
              <ConnectionLine key={`${c.from}-${c.to}`} from={c.from} to={c.to} nodes={nodes} />
            ))}
          </svg>

          {/* Nodes */}
          {nodes.map(node => {
            const Icon    = node.icon
            const colors  = nodeColors[node.color]
            const isDragging = draggingId === node.id

            return (
              <div
                key={node.id}
                style={{
                  position: 'absolute',
                  left: node.position.x,
                  top: node.position.y,
                  width: NODE_WIDTH,
                  cursor: isDragging ? 'grabbing' : 'grab',
                  touchAction: 'none',
                  zIndex: isDragging ? 50 : 1,
                  userSelect: 'none',
                }}
                onPointerDown={e => handlePointerDown(e, node.id)}
                onPointerMove={e => handlePointerMove(e, node.id)}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                role="article"
                aria-label={`${node.type}: ${node.title}`}
              >
                <div
                  className="rounded-xl p-3 border"
                  style={{
                    background: colors.bg,
                    borderColor: colors.border,
                    boxShadow: isDragging
                      ? '0 12px 32px rgba(0,0,0,0.18)'
                      : '0 2px 8px rgba(0,0,0,0.06)',
                    transition: isDragging ? 'none' : 'box-shadow 0.15s',
                  }}
                >
                  {/* Icon + title */}
                  <div className="flex items-start gap-2 mb-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: colors.text }} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span
                        className="text-[9px] font-mono uppercase tracking-widest block mb-0.5"
                        style={{ color: colors.text, opacity: 0.85 }}
                      >
                        {node.type}
                      </span>
                      <p
                        className="text-xs font-bold truncate"
                        style={{ color: 'var(--fg)' }}
                      >
                        {node.title}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className="text-[10px] leading-relaxed line-clamp-2 mb-2"
                    style={{ color: 'var(--muted)' }}
                  >
                    {node.description}
                  </p>

                  {/* Connected indicator */}
                  <div
                    className="flex items-center gap-1"
                    style={{ color: 'var(--muted)' }}
                  >
                    <ArrowRight className="w-2.5 h-2.5" />
                    <span className="text-[9px] font-mono uppercase tracking-wide">Verbunden</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between px-5 py-2.5 border-t text-xs font-mono"
        style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)', color: 'var(--muted)' }}
        role="status"
        aria-live="polite"
      >
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#34d399' }} />
            {nodes.length} Nodes
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: 'var(--accent)' }} />
            {connections.length} Verbindungen
          </span>
        </div>
        <span className="text-[10px] uppercase tracking-widest hidden sm:block">
          Nodes verschieben
        </span>
      </div>
    </div>
  )
}
