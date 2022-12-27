import '../styles/globals.css'
import Navbar from './Shared/Navber'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar></Navbar>
      <div>
       <Component {...pageProps} />
      </div>
    </div>
  )
}
