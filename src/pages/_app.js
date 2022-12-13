import 'bootstrap/dist/css/bootstrap.css'
import '../../public/style.css'
import MainContainer from '../components/MainContainer'

function MyApp({ Component, pageProps }) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  )
}

export default MyApp
