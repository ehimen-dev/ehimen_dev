import Container from '../components/util/container'
import PostList from '../components/blog/post-list'
import HeroPost from '../components/blog/hero-post'
import Layout from '../components/layout/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import Status from '../components/layout/status'
import { POSTS_PATH, SHOWCASE_PATH, SITE_TITLE } from '../lib/constants'

type Props = {
  heroPost: Post;
  morePosts: Post[]
}

export default function Index({ heroPost, morePosts }: Props) {
  return (
    <>
    <Status />
      <Layout>
        <Head>
          <title>{SITE_TITLE}</title>
        </Head>
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              path='showcase'
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <PostList posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const heroPost = getAllPosts(SHOWCASE_PATH, [
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])[0]; // Latest post

  const morePosts = getAllPosts(POSTS_PATH, [
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { heroPost, morePosts },
  }
}
