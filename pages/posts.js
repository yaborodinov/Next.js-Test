import Link from 'next/link'
import axios from 'axios'

import {MainLoyout} from '../components/MainLoyout'

const Posts = ({ data }) => {

  return(
    <MainLoyout>
        <h1>Posts page</h1>
        <ul>
          {data.map((post) => (
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

Posts.getInitialProps = async () => {
  const response = await axios.get('http://localhost:4200/posts')
  const data = response.data

  return {
    data
  }
}