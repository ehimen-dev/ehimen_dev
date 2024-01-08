import { getPostBySlug, getAllPosts } from "./api";
import { POSTS_PATH } from "./constants";
import markdownToHtml from "./markdownToHtml";

export type StaticPageParams = {
    params: {
      slug: string;
    };
  };
  
export async function getStaticPropsForPage(path: string, { params }: StaticPageParams) {
    const post = getPostBySlug(path, params.slug, [
      "title",
      "date",
      "slug",
      "author",
      "content",
      "ogImage",
      "coverImage",
    ]);
  
    const morePosts = getAllPosts(POSTS_PATH, [
      'title',
      'date',
      'slug',
      'author',
      'coverImage',
      'excerpt',
    ]).slice(0, 4); // Only want at most 4 posts
    const content = await markdownToHtml(post.content || "");
  
    return {
      props: {
        post: {
          ...post,
          content,
        },
        morePosts: morePosts.filter((p) => p.slug !== post.slug)
      },
    };
}
  
export async function getStaticPathsForPage(path: string) {
    const posts = getAllPosts(path, ["slug"]);
  
    return {
      paths: posts.map((post) => {
        return {
          params: {
            slug: post.slug,
          },
        };
      }),
      fallback: false,
    };
}
  