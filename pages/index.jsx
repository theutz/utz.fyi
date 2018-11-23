import Page from '../layouts/main'
import Theme from '../components/Theme'

export default () => (
  <Page>
    <Theme>
      {({ theme }) => (
        <>
          <h1>
            <a href="/">utz.fyi</a>
          </h1>
          <style jsx>{`
            .container {
            }
          `}</style>
        </>
      )}
    </Theme>
  </Page>
)
