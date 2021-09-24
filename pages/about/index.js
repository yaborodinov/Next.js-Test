import Router from 'next/router'

import { MainLoyout } from '../../components/MainLoyout'

export default function About({title}) {
  console.log('ищу', title);
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
  const data = await response.json()
    

  return {
    title: data.title
  }
}