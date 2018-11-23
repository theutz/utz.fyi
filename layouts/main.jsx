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
      <title>FYI: Michael Utz</title>
    </Head>
    <Provider>
      <Theme>
        {({ theme }) => {
          return (
            <>
              <div className="container">{children}</div>
              <style jsx global>{`
                html {
                  font-size: ${theme.font.size(4)};
                }

                body {
                  font-weight: ${theme.font.weight};
                  line-height: ${theme.font.lineHeight[0]};
                  background: ${theme.background};
                  color: ${theme.foreground};
                  font-family: 'Rubik', sans-serif;
                }

                p {
                  margin-bottom: 1.3em;
                }

                h1,
                h2,
                h3,
                h4 {
                  margin: ${theme.spacer(1.414)} 0 ${theme.spacer(0.5)};
                  line-height: ${theme.font.lineHeight[1]};
                }

                h1 {
                  margin-top: 0;
                  font-size: ${theme.font.size(0)};
                }

                h2 {
                  font-size: ${theme.font.size(1)};
                }

                h3 {
                  font-size: ${theme.font.size(2)};
                }

                h4 {
                  font-size: ${theme.font.size(3)};
                }

                small {
                  font-size: ${theme.font.size(5)};
                }

                a {
                  text-decoration: none;
                  color: ${theme.primary};
                }

                a:hover {
                  text-decoration: underline;
                }
              `}</style>
              <style>{`
                .container {
                  color: ${theme.foreground};
                }
              `}</style>
            </>
          )
        }}
      </Theme>
    </Provider>
  </>
)
