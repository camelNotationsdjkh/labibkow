import '@/styles/globals.css'
import Navbar from '@/components/nav'
import Footer from '@/components/footer'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <title>Labib Kowsar</title>
        <meta name='description' content="Labib Kowsar's personal website. An electrical engineering student at UBCV, this site showcases his project portfolio, resumes, and a way to contact him."></meta>
        <meta name='author' content='Labib Kowsar'></meta>
        <link rel="apple-touch-icon" sizes="180x180" href="/fav/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width"></meta>

        <link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png" />
        <link rel="manifest" href="/fav/site.webmanifest" />
      </Head>
      <a style={{display: "none"}} href="https://www.flaticon.com/free-icons/camel" title="camel icons">Camel icons created by Freepik - Flaticon</a>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
