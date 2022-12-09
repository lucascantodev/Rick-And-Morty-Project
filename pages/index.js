import Head from 'next/head'
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import Header from '../src/components/Header'
import CharactersList from '../src/components/CharactersList'

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
        <section class="py-5">
          <div class="container px-4 px-lg-5 mt-5">
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              <CharactersList />
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}