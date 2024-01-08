import PostType from "../../../interfaces/post";
import PostList from "../post-list";
import PostBody from "./post-body";
import PostHeader from "./post-header";
import PostTitle from "./post-title";

export type PostProps = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
  path?: string;
};

const Post = ({ post, morePosts, preview, path="posts" }: PostProps) => {
  return (
    <>
      <PostHeader
        title={post.title}
        coverImage={post.coverImage}
        date={post.date}
        author={post.author}
      />
      <PostBody content={post.content} />
      <div className="divider my-20">Next up...</div>
      <PostList posts={morePosts} path={path}/>
    </>
  );
};

export default Post;
