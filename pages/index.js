import Link from 'next/link'

import {MainLoyout} from '../components/MainLoyout'

export default function Index() {
  return (
    <MainLoyout title={'Home Page'}>
      <h1>hello world!!!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi aliquam, sunt ipsum, minus aperiam doloremque itaque voluptatem sequi quod vel amet optio?</p>
      <Link href="/about">
        <a><button>About</button></a>
      </Link>
      <Link href="/posts"><a><button>Posts</button></a></Link>
    </MainLoyout>
  )
}