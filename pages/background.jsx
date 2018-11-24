import Page from '../layouts/main'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content from '../components/Content'

const Background = () => (
  <Page>
    {() => {
      return (
        <>
          <Header />
          <Content>
            <h2>Background</h2>
            <p>
              I&apos;ve been working on the web since before CSS3 was a
              thing—mostly as a hobby or for local non-profits.
            </p>
            <p>
              In 2007, I graduated from Northwest University with a Bachelor of
              Arts in Music focusing on music technology. My passion for
              technology and creativity lead me to learn more about the web.
            </p>
            <p>
              Since then, I&apos;ve had a chance to work with some wonderful
              teams to create marketing sites, mostly in WordPress. I caught the
              JavaScript bug in 2015, and I can&apos;t get enough of it!
            </p>
            <p>
              My wife and I moved to Helsinki in February 2018, and we love it
              here!
            </p>
            <Footer />
          </Content>
        </>
      )
    }}
  </Page>
)

Background.displayName = 'Background'

export default Background
