import Link from 'next/link'

const Header = () => (
  <div>
    <Link href="/background">
      <a>Background</a>
    </Link>
  </div>
)

Header.displayName = 'Header'

export default Header
