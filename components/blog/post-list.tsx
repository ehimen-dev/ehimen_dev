import PostPreview from './post/post-preview'
import type Post from '../../interfaces/post'

type Props = {
  posts: Post[]
  title?: string
  path?: string
  containsShowcase?: boolean
}

const PostList = ({ posts, title, path = "posts", containsShowcase=false }: Props) => {
  return (
    <section>
      {title && (
        <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-10 mb-20">
        {posts.map((post, index) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            path={index === 0 && containsShowcase ? "showcase" : path}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default PostList
