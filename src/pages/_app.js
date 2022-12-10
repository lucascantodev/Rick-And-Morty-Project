import 'bootstrap/dist/css/bootstrap.css'
import MainContainer from '../components/MainContainer.js'

function MyApp({ Component, pageProps }) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  )
}

export default MyApp
