import Head from 'next/head'
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import Header from '../src/components/Header'
import Main from '../src/components/Main'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" />
      </Head>
      <Navbar/>
      <Header/>
      <Main />
      <Footer/>
    </>
  )
}