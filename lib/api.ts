import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export function getPostSlugs(path: string) {
  const directory = join(process.cwd(), path);
  return fs.readdirSync(directory);
}

export function getPostBySlug(path: string, slug: string, fields: string[] = []) {
  const directory = join(process.cwd(), path);
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(directory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(path: string, fields: string[] = []) {
  const slugs = getPostSlugs(path);
  const posts = slugs
    .map((slug) => getPostBySlug(path, slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
