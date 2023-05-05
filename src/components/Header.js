import { Link } from "react-router-dom";
import logo from '../pages/logo1.png'

const Header = () => {
  return (
    <header>
       <div style={{position: 'fixed', top: 0}}>
      <a href="/">
        <img src={logo} alt="Logo" height="50" />
      </a>
    </div>
      <nav style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/DogIndex" style={linkStyle}>
          <h3>🐶 Meet the Dogs 🐶</h3>
        </Link>
        <Link to="/DogNew" style={linkStyle}>
          <h3>🐾 Add a New Dog 🐾</h3>
        </Link>
        <Link to="/" style={linkStyle}>
          <h3>🏠 Home 🏠</h3>
        </Link>
      </nav>
    </header>
  );
};

const linkStyle = {
  color: "white",
  fontSize: "1.2rem",
  textDecoration: "none",
  margin: "0 1rem",
  transition: "all 0.2s ease-in-out",
};

export default Header;