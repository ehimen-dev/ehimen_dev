import { Head } from "next/document";
import PostType from "../../../interfaces/post";
import Layout from "../../layout/layout";
import Container from "../../util/container";
import PostBody from "./post-body";
import PostHeader from "./post-header";

export type PostProps = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const Post = ({ post, morePosts, preview }: PostProps) => {
  return (
    <>
      <PostHeader
        title={post.title}
        coverImage={post.coverImage}
        date={post.date}
        author={post.author}
      />
      <PostBody content={post.content} />
    </>
  );
};

export default Post;
