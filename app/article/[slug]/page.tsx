import { notFound } from 'next/navigation'
import Link from 'next/link'
import 'katex/dist/katex.min.css'
import { parseMarkdown, getAllPosts } from '@/lib/markdown'

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params
  const post = await parseMarkdown(slug)
  if (!post) return notFound()

  return (
    <article className="prose prose-invert max-w-prose mx-auto px-4 py-10">
      <Link href="/article" className="text-sm text-neutral-400 hover:text-neutral-200 no-underline mb-6 inline-block">
        記事一覧
      </Link>
      <h1 className="mb-4">{post.title}</h1>
      <p className="text-sm text-neutral-500 mb-10">
        {new Date(post.date).toISOString().slice(0, 10)}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  )
}
