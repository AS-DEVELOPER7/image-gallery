import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import {store}from '../app/store'
import StateContext from '../context/StateContext'
function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
   <StateContext>

  <Component {...pageProps} />
</StateContext>
</Provider>
}

export default MyApp
