import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
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