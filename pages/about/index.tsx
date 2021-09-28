import Router from 'next/router'

import { MainLoyout } from '../../components/MainLoyout'

interface AboutPropsType{
  title: string
}

export default function About({title}: AboutPropsType) {
  const linkHandleClick = () => {
     Router.push('/posts')
  }

  return (
    <MainLoyout title={'About Page'}>
      <h2>{ title}</h2>
      <button onClick={()=> linkHandleClick()}>Go to posts</button>
    </MainLoyout>
  )
}

About.getInitialProps = async () => {
  const response = await fetch(`${process.env.API_URL}/about`)
  const data: AboutPropsType = await response.json()
    

  return {
    title: data.title
  }
}
