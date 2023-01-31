import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter
    }
  })
  return {
    props: {
      posts
    }
  }
}

export default function Home({ posts }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
      {posts?.map(({slug, frontmatter}) => (
        <div key={slug} className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col '>
          <Link href={`/post/${slug}`}>
            <Image width={650} height={340} alt={frontmatter.title}
            src={`/${frontmatter.socialImage}`} />
            <h1 className="p-4">
              {frontmatter.title}
            </h1>
          </Link>
        </div>
      ))}
    </div>
  )
}
