import { getPosts } from '@/app/lib/data'

type Props = {
  params: {
    slug: string
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = params
  const posts = await getPosts()
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    return <div>Post not found.</div>
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>This is {slug}.</p>
    </div>
  )
}
