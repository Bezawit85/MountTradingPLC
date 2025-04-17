import Link from 'next/link'
import { getPosts } from '../../lib/data' 

export default async function Post() {
  const posts = await getPosts()

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/about/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}
