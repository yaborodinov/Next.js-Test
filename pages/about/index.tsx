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
  const response = await fetch('http://localhost:4200/about')
  const data: AboutPropsType = await response.json()
    

  return {
    title: data.title
  }
}
