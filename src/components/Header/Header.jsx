import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import logo from "../../assets/flower.jpeg";
import "./Header.css";

export const Header = () => {
  return (
    <header className="main_header">
      <div className="logo_container">
        <Link to="/" className="logo_link">
          <img src={logo} alt="Blossom Logo" className="logo_img" />
          <span className="logo_text">Blossom</span>
        </Link>
      </div>

      <Nav />
    </header>
  );
};
