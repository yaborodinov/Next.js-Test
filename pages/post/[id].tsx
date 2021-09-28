import {useState, useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link'
import classes from '../../styles/btn.module.scss'

import {MainLoyout} from '../../components/MainLoyout'
import { useRouter } from 'next/router'
import { NextPageContext } from 'next'
import { MyPost } from '../../interfaces/post'

interface PostPageProps{
  post: MyPost
}

const Post = ({ post: serverPost }: PostPageProps) => {
  const [post, setPost] = useState(serverPost)
  const router = useRouter()
  useEffect(() => {
    async function load() {
      
      const response = await axios.get(`http://localhost:4200/posts/${router.query.id}`)
      const data = await response.data
      setPost(data)
    }

    if (!serverPost) {
      load()
    }
  }, [])

  if (!post) {
    return <MainLoyout>
      <p>Loading...</p>    
    </MainLoyout>
  }

    return (
      <MainLoyout>
        <h1>{post.title}</h1>
        <br />
        <p>{post.body}</p>
        <Link href="/posts">
          <a>
            <button className={classes.btn}>Back to Posts</button>
          </a>
        </Link>
      </MainLoyout>
    )
  }

  

export default Post


// использовать для комбинирования Front-end & Back-end

// Post.getInitialProps = async ({query, request}) => {
//   if (!request) return {post: null}
//   const response = await axios.get(`http://localhost:4200/posts/${query.id}`)
//   const post = response.post
  
//   return {
//     post
//   }
// }

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string
  }
}


// можно использовать только для Server Side rendering
export async function getServerSideProps({ query, req }: PostNextPageContext) {
  if (!req) {
    return{posts: null}
  }
    const response = await axios.get(`${process.env.API_URL}/posts/${query.id}`)
    const post: MyPost = response.data

    return { props:{post}}
}
