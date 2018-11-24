import Page from '../layouts/main'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Background = () => (
  <Page>
    {() => {
      return (
        <>
          <Header />
          <h2>Background</h2>
          <Footer />
        </>
      )
    }}
  </Page>
)

Background.displayName = 'Background'

export default Background
