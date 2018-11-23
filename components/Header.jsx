import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faCoffee,
  faTerminal,
  faUndo,
} from '@fortawesome/free-solid-svg-icons'

import Theme from '../components/Theme'

const Header = () => (
  <Theme>
    {({ theme }) => (
      <header className="container">
        <div className="title-bar">
          <div className="logos">
            {[faCode, faCoffee, faTerminal, faUndo].map((icn) => (
              <Link href="/">
                <a className="logo">
                  <FontAwesomeIcon icon={icn} />
                </a>
              </Link>
            ))}
          </div>
          <Link href="/">
            <a className="title">https://utz.fyi</a>
          </Link>
        </div>
        <menu className="menu-bar">
          {[['/', 'Home'], ['/background', 'Background']].map(([url, text]) => (
            <div className="menu-item">
              <Link href={url}>
                <a>{text}</a>
              </Link>
            </div>
          ))}
          <div />
        </menu>
        <style jsx>{`
          .container {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            display: flex;
            flex-flow: column;
          }

          .title-bar {
            margin: 0.5em;
            padding: 0.25em 0.5em;
            display: flex;
            justify-content: space-between;
            background: ${theme.color.foreground};
          }

          .title-bar,
          .title-bar a {
            color: ${theme.color.background};
          }

          .title {
            font-weight: 700;
            text-transform: uppercase;
            color: ${theme.color.background};
          }

          .logos {
            display: flex;
          }

          .logo {
            margin-right: 0.25em;
          }

          .menu-bar {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }

          .menu-item,
          .menu-item a {
            color: ${theme.color.info};
          }
        `}</style>
      </header>
    )}
  </Theme>
)

Header.displayName = 'Header'

export default Header
