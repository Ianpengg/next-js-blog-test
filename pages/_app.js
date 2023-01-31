import '../styles/globals.css'
import Layout from '../components/layout'
import React, { useState } from 'react';
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
  const [nav, setNav] = useState(false);
  return (

    <ThemeProvider attribute="class">
      <Layout nav={nav} setNav={setNav}>
        <Component {...pageProps} setNav={setNav} />
      </Layout>
    </ThemeProvider>
  )
}
