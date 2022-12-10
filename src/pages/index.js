import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import CharactersList from '../components/CharactersList'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" />
        <title>Rick and Morty Project - PWEB</title>
      </Head>
      <Navbar/>
      <Header/>
      <main>
        <section className="py-5">
          <CharactersList />
        </section>
      </main>
      <Footer/>
    </>
  )
}