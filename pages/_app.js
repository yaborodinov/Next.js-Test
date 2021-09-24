import '../styles/main.scss'
import NextNprogress from 'nextjs-progressbar'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <NextNprogress
        color="#000"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      {/* <style jsx global>{`
        body{
          font-family: 'Lato', sans-serif;
        }
      `}</style> */}
    </>
  )
}

export default MyApp
