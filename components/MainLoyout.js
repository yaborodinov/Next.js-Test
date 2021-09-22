import Link from 'next/link'
import Head from 'next/head'

export function MainLoyout({ children, title = 'Next App' }) {
  return (
    <>
      <Head>
        <title>{ title} | Programmer the best | Next</title>
      </Head>
      <nav>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/posts"><a>Posts</a></Link>
      </nav>
      <main>
        {children}
      </main>
      <style jsx>{`
        nav{
          position: fixed;
          height: 60px;
          top: 0;
          left: 0;
          right: 0;
          background: lightblue;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        nav a{
          color: #100d0d;
          text-decoration: none;
        }
        main{
          margin-top: 70px;
          padding: 1rem;
        }
      `}</style>
    </>
  )
}