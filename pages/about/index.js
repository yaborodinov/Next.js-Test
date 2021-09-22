import Router from 'next/router'

import { MainLoyout } from '../../components/MainLoyout'

export default function About() {

  const linkHandleClick = () => {
     Router.push('/posts')
  }

  return (
    <MainLoyout title={'About Page'}>
      <h2>About Page</h2>
      <button onClick={()=> linkHandleClick()}>Go to posts</button>
    </MainLoyout>
  )
}