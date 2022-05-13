import { Main, NextScript, Head, Html } from "next/document"
import Script from "next/script"

export default function Document() {
  return (
    <Html>
      <Head>
        <Script
          id="inline-before"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `console.log('inline beforeInteractive')`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
