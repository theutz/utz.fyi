import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

import Theme, { Provider } from '../components/Theme'

import '../styles/normalize.css'

const Page = ({ children }) => (
  <React.Fragment>
    <Head>
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
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Rubik:400,700"
        rel="stylesheet"
      />
      <title>Michael Utz, FYI</title>
    </Head>
    <Provider>
      <Theme>
        {({
          theme: {
            color,
            spacer,
            breakpoints,
            font: { size, weight, lineHeight },
          },
          themeName,
          toggleTheme,
        }) => {
          return (
            <div className="container">
              {children}
              <div className="theme-toggler">
                <button onClick={toggleTheme}>
                  <FontAwesomeIcon
                    icon={themeName === 'dark' ? faSun : faMoon}
                  />
                </button>
              </div>
              <style jsx global>{`
                html {
                  font-size: ${size(4)};
                }

                body {
                  font-weight: ${weight};
                  line-height: ${lineHeight[0]};
                  background: ${color.background};
                  color: ${color.foreground};
                  font-family: 'Rubik', sans-serif;
                }

                p {
                  margin-bottom: 1.3em;
                }

                h1,
                h2,
                h3,
                h4 {
                  margin: ${spacer(1.414)} 0 ${spacer(0.5)};
                  line-height: ${lineHeight[1]};
                }

                h1 {
                  margin-top: 0;
                  font-size: ${size(0)};
                }

                h2 {
                  font-size: ${size(1)};
                }

                h3 {
                  font-size: ${size(2)};
                }

                h4 {
                  font-size: ${size(3)};
                }

                small {
                  font-size: ${size(5)};
                }

                a {
                  text-decoration: none;
                  color: ${color.primary};
                }

                a:hover {
                  text-decoration: underline;
                }

                @media (min-width: ${breakpoints[1]}px) {
                  h1 {
                    font-size: ${size(0, { scale: 1 })};
                  }
                  h2 {
                    font-size: ${size(1, { scale: 1 })};
                  }
                  h3 {
                    font-size: ${size(2, { scale: 1 })};
                  }
                  h4 {
                    font-size: ${size(3, { scale: 1 })};
                  }
                  small {
                    font-size: ${size(5, { scale: 1 })};
                  }
                }
              `}</style>
              <style>{`
                .container {
                  color: ${color.foreground};
                }

                .theme-toggler {
                  position: fixed;
                  bottom: 0.5em;
                  right: 0.5em;
                }

                .theme-toggler button {
                  background: ${color.foreground};
                  color: ${color.background};
                  border-radius: 50%;
                  padding: 0.5em;
                }
              `}</style>
            </div>
          )
        }}
      </Theme>
    </Provider>
  </React.Fragment>
)

Page.displayName = 'Page'

export default Page
