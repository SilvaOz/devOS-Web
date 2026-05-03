import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export type PostMeta = {
  slug: string
  title: string
  description: string
  date: string
  category: string
  readTime: number
  affiliate?: boolean
}

export type Post = PostMeta & {
  contentHtml: string
}

function slugToMeta(slug: string): PostMeta {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`)
  const source = fs.readFileSync(fullPath, 'utf8')
  const { data } = matter(source)
  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    category: data.category,
    readTime: data.readTime ?? 5,
    affiliate: data.affiliate ?? false,
  }
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'))
  return files
    .map((f) => slugToMeta(f.replace(/\.md$/, '')))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPost(slug: string): Promise<Post> {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`)
  const source = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(source)

  const processed = await remark().use(remarkHtml, { sanitize: false }).process(content)

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    category: data.category,
    readTime: data.readTime ?? 5,
    affiliate: data.affiliate ?? false,
    contentHtml: processed.toString(),
  }
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}
