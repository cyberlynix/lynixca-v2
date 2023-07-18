import { Html, Head, Main, NextScript } from 'next/document'
import {randomBytes} from "crypto";

export default function Document() {

    /* Content Policy Settings */
    /* ISSUE: 'unsafe-eval' is used for ReactJS */
    const nonce = randomBytes(128).toString('base64')
    const csp = `object-src 'none'; base-uri 'none'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https: http: 'nonce-${nonce}' 'strict-dynamic'`

    return (
    <Html lang="en" className="dark">
        <Head nonce={nonce}>
            <meta httpEquiv="Content-Security-Policy" content={csp} />
        </Head>
      <body>
        <Main />
        <NextScript nonce={nonce} />
      </body>
    </Html>
  )
}
