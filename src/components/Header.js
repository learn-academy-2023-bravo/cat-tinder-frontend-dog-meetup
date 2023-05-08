import { Link } from "react-router-dom"
import logo from '../pages/logo1.png'
import '../App.css'

const Header = () => {
  return (
    <header>
      <div className="logo1">
        <a href="/">
          <img src={logo} alt="Logo" height="50" />
        </a>
      </div>
      <nav>
        <Link to="/DogIndex" className="nav-link">
          <h3>🐶 Meet the Dogs 🐶</h3>
        </Link>
        <Link to="/DogNew" className="nav-link">
          <h3>🐾 Add a New Dog 🐾</h3>
        </Link>
        <Link to="/" className="nav-link">
          <h3>🏠 Home 🏠</h3>
        </Link>
      </nav>
    </header>
  )
}

export default Header;