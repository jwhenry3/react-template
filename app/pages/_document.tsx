import { ServerStyleSheets } from '@material-ui/core'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

interface IProps {
  css: any
}

class MyDocument extends Document<IProps> {
  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
      })

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement()
      ]
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='manifest' href='/manifest.json' />

          <meta charSet='utf-8' />
          <link rel='shortcut icon' href='%PUBLIC_URL%/favicon.ico' />
          <meta name='theme-color' content='#000000' />
          <link rel='manifest' href='%PUBLIC_URL%/manifest.json' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
