import Page from '../layouts/main'
import Theme from '../components/Theme'
import Link from 'next/link'

export default () => (
  <Page>
    <Theme>
      {({ theme }) => (
        <React.Fragment>
          <div className="container">
            <h1>
              <Link href="/">
                <a>Michael Utz, FYI</a>
              </Link>
            </h1>
          </div>
          <style jsx>{`
            .container {
              width: 100vw;
              height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            h1 {
              text-align: center;
            }
          `}</style>
        </React.Fragment>
      )}
    </Theme>
  </Page>
)
