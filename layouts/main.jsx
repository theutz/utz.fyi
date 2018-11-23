import Head from 'next/head'
import '../styles/normalize.css'
import Theme, { Provider } from '../components/Theme'

export default ({ children }) => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Rubik:400,700"
        rel="stylesheet"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/static/safari-pinned-tab.svg"
        color="#101935"
      />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <meta name="apple-mobile-web-app-title" content="utz.fyi" />
      <meta name="application-name" content="utz.fyi" />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="msapplication-config" content="/static/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <Provider>
      <Theme>
        {({ theme }) => (
          <>
            <div className="container">{children}</div>
            <style jsx global>{`
              body {
                background: ${theme.background};
                color: ${theme.foreground};
                font-family: 'Rubik', sans-serif;
              }

              a {
                color: ${theme.primary};
              }
            `}</style>
            <style jsx="true">{`
              .container {
                color: ${theme.foreground};
              }
            `}</style>
          </>
        )}
      </Theme>
    </Provider>
  </>
)
