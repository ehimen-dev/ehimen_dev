import Container from '../components/util/container'
import PostList from '../components/blog/post-list'
import Layout from '../components/layout/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import Status from '../components/layout/status'
import { SHOWCASE_PATH, SITE_TITLE } from '../lib/constants'
import PostTitle from '../components/blog/post/post-title'

type Props = {
  allPosts: Post[]
}

export default function Showcase({ allPosts }: Props) {
  return (
    <>
    <Status />
      <Layout>
        <Head>
          <title>{SITE_TITLE}</title>
        </Head>
        <Container>
          <PostTitle>Project Showcase</PostTitle>
          {allPosts.length > 0 && <PostList posts={allPosts} path='showcase'/>}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(SHOWCASE_PATH, [
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  }
}