import { useRouter } from 'next/router'

import {MainLoyout} from '../../components/MainLoyout'

const Post = () => {
  const router = useRouter()
  return (
    <MainLoyout>
      <h1>Post { router.query.id}</h1>
    </MainLoyout>
  )
}

export default Post