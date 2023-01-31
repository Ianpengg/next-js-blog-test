import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Ian's website</title>
        <link rel="icon" href="/images/favicon.ico"/>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
