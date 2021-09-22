import Link from 'next/link'

import {MainLoyout} from '../components/MainLoyout'

const Posts = () => (
  <MainLoyout>
    <h1>Posts page</h1>
    <Link href="/">
      <a><button>Main Page</button></a>
    </Link>
  </MainLoyout>
)


export default Posts
