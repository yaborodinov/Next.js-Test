import Link from 'next/link'
import { MainLoyout } from '../components/MainLoyout'
import classes from '../styles/error.module.scss'

const ErrorPage = () => {
  return (
    <MainLoyout>
      <h1 className={classes.error}>Error 404 </h1>
      <p>Please <Link href={'/'}><a>go back</a></Link> to safety</p>
    </MainLoyout>
  )
}

export default ErrorPage
