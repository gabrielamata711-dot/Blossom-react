import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-container">
      {}
      <p className="footer_copy">
        &copy; {new Date().getFullYear()} Blossom Flower. Todos los derechos
        reservados.
      </p>

      {}
      <nav>
        <ul>
          <li>
            <a href="#" className="footer_link">
              WhatsApp
            </a>
          </li>
          <li>
            <a href="#" className="footer_link">
              Instagram
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
