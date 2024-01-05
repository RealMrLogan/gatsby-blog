import { Link } from 'gatsby'
import logo from '../../images/logo.svg'

export const Header = () => (
  <>
    <header className="py-6">
      <Link to="/">
        <img src={logo} alt="Mr.Logan" />
      </Link>
    </header>
    <div className="h-0.5 bg-stone-800 mb-10 rounded-full" />
  </>
)
