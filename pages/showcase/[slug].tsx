import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/util/container";
import Layout from "../../components/layout/layout";
import PostTitle from "../../components/blog/post/post-title";
import Head from "next/head";
import type PostType from "../../interfaces/post";
import { SHOWCASE_PATH } from "../../lib/constants";
import Post from "../../components/blog/post/post";
import { StaticPageParams, getStaticPathsForPage, getStaticPropsForPage } from "../../lib/pageUtils";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Content({ post, morePosts, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title}</title>
                {post.ogImage?.url ?? (<meta property="og:image" content={post.ogImage.url} />)}
              </Head>
              <Post post={post} morePosts={morePosts} path="showcase"/>
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

const path = SHOWCASE_PATH;

export async function getStaticProps({ params }: StaticPageParams) {
  return getStaticPropsForPage(path, {params})
}

export async function getStaticPaths() {
  return getStaticPathsForPage(path);
}
