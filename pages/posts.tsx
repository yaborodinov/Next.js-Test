import Link from 'next/link'
import axios from 'axios'

import {MainLoyout} from '../components/MainLoyout'
import { useState, useEffect } from 'react'

import { MyPost } from '../interfaces/post'
import { NextPageContext } from 'next'

interface PostPageProps{
  posts: MyPost[]
}

const Posts = ({ posts: serverPosts }: PostPageProps) => {
  const [posts, setPosts] = useState(serverPosts)
  useEffect(() => {
    const load = async () => {
      const response = await axios.get('http://localhost:4200/posts')
      const data = await response.data
      setPosts(data)
    }
    if (!serverPosts) {
      load()
    }
  }, [])

  if (!posts) {
    return <MainLoyout>
      <p>Loading ...</p>
    </MainLoyout>
  }


  return(
    <MainLoyout>
        <h1>Posts page</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                <a>
                   {post.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      <Link href="/">
        <a><button>Main Page</button></a>
      </Link>
    </MainLoyout>
  )
}

export default Posts

Posts.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) {
    return {
      posts: null
    }
  }
  const response = await fetch('${process.env.API_URL}/posts')
  const posts: MyPost[] = await response.json()

  return {
    posts
  }
}
