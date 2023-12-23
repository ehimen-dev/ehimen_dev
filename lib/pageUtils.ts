import { getPostBySlug, getAllPosts } from "./api";
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
    const content = await markdownToHtml(post.content || "");
  
    return {
      props: {
        post: {
          ...post,
          content,
        },
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
  