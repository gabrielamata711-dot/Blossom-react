import { Link } from "react-router-dom";
import "./Nav.css";
import { useCart } from "../../context/CartContext";

export const Nav = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav className="nav_menu">
      <ul className="nav-list">
        <li>
          <Link to={"/"} className="nav_item">
            Inicio
          </Link>
        </li>
        <li>
          <Link to={"/contacto"} className="nav_item">
            Contacto
          </Link>
        </li>
        <li>
          <Link to={"/cart"} className="nav_item">
            Carrito🛒{" "}
            {totalItems > 0 && <span className="incart">{totalItems}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
