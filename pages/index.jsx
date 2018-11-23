import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faCoffee,
  faUndo,
  faTerminal,
} from '@fortawesome/free-solid-svg-icons'

import Page from '../layouts/main'
import Theme from '../components/Theme'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default () => (
  <Page>
    <Theme>
      {({ theme: { color, font, spacer, breakpoints } }) => (
        <React.Fragment>
          <Header />
          <div className="container">
            <div className="logos">
              {[faCode, faCoffee, faTerminal, faUndo].map((icon) => (
                <div className="logo">
                  <FontAwesomeIcon icon={icon} />
                </div>
              ))}
            </div>
            <h1 className="title">Michael Utz, FYI</h1>
          </div>
          <Footer />
          <style jsx>{`
            .container {
              width: 100vw;
              height: 100vh;
              display: flex;
              flex-flow: column nowrap;
              justify-content: center;
              align-items: center;
            }

            .title {
              text-align: center;
              animation-fill-mode: both;
              animation-delay: 5s;
              animation-duration: 1s;
              animation-timing-function: ease-in;
              animation-name: fadeIn;
            }

            .title,
            .title a {
              color: ${color.info};
            }

            .logos {
              width: 80vw;
              max-width: 600px;
              color: ${color.foreground};
              font-size: 2em;
              margin-bottom: ${spacer(1)};
              display: flex;
              justify-content: space-around;
            }

            @media screen and (min-width: ${breakpoints[1]}px) {
              .logos {
                font-size: 3em;
              }
            }

            .logo {
              animation-timing-function: ease-in-out;
              animation-duration: 1s;
              animation-fill-mode: both;
              animation-name: fadeIn;
            }

            .logo:nth-child(1) {
              animation-delay: 1s;
            }
            .logo:nth-child(2) {
              animation-delay: 2s;
            }
            .logo:nth-child(3) {
              animation-delay: 3s;
            }
            .logo:nth-child(4) {
              animation-delay: 4s;
            }

            @keyframes fadeIn {
              0% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }
          `}</style>
        </React.Fragment>
      )}
    </Theme>
  </Page>
)
