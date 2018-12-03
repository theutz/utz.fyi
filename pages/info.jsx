import Page from '../layouts/main'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content, { Title, P, A } from '../components/Content'

const HistoryPage = () => {
  return (
    <Page>
      <Header />
      <Content>
        <Title>Info</Title>
        <P>
          I&apos;ve been working on the web since before CSS3 was a thing—mostly
          as a hobby or for local non-profits.
        </P>
        <P>
          In 2007, I graduated from{' '}
          <A href="https://www.northwestu.edu/">Northwest University</A> with a
          Bachelor of Arts in Music focusing on music technology. My passion for
          technology and creativity lead me to learn more about the web.
        </P>
        <P>
          Since then, I&apos;ve had a chance to work with some wonderful teams
          to create marketing sites, mostly in WordPress. I caught the
          JavaScript bug in 2015, and I can&apos;t get enough of it!
        </P>
        <P>
          My wife and I moved to Helsinki in February 2018, and we love it here!
        </P>
        <Footer />
      </Content>
    </Page>
  )
}

HistoryPage.displayName = 'Background'

export default HistoryPage
