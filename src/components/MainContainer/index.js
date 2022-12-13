import Head from 'next/head'
import Navbar from '../Navbar'
import Footer from '../Footer'

const MainContainer = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" />
        <title>Rick and Morty Project - PWEB</title>
      </Head>
      <Navbar />
        {children}
      <Footer />
    </>
  );
};

export default MainContainer