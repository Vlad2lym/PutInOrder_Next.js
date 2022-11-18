import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { store } from '../store'
import { Provider } from 'react-redux'

const Global = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Indie Flower', cursive;
}
html,
body {
  padding: 0;
  margin: 0;
}
`
const theme = {
  colors: {
    myYellow: '#bb9f3e'
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="description" content="game for kids" />
        <title>Put in order</title>
      </Head>
      <Global/>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}
