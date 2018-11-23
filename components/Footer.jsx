import Theme from './Theme'

const Footer = () => (
  <Theme>
    {({ theme, toggleTheme }) => (
      <div className="container">
        <div className="right">
          <button className="btn">Change Theme</button>
        </div>
        <style jsx>{``}</style>
      </div>
    )}
  </Theme>
)

export default Footer
