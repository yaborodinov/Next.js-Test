import { useRouter } from 'next/router'
import axios from 'axios'
import Link from 'next/link'
import classes from '../../styles/btn.module.scss'

import {MainLoyout} from '../../components/MainLoyout'

const Post = ({data}) => {
  console.log(data);
  return (
    <MainLoyout>
      <h1>{data.title}</h1>
      <br />
      <p>{data.body}</p>
      <Link href="/posts">
        <a>
          <button className={classes.btn}>Back to Posts</button>
        </a>
      </Link>
    </MainLoyout>
  )
}

export default Post

Post.getInitialProps = async (ctx) => {

  const response = await axios.get(`http://localhost:4200/posts/${ctx.query.id}`)
  const data = response.data
  
  return {
    data
  }
}