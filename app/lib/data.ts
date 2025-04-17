
export type Post = {
    slug: string
    title: string
  }
  
  export const posts: Post[] = [
    { slug: 'first-post', title: 'First Blog Post' },
    { slug: 'second-post', title: 'Second Blog Post' },
  ]
  
  export async function getPosts(): Promise<Post[]> {
    return posts
  }
  