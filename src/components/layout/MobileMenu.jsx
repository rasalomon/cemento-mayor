import { NavLink } from "react-router-dom";
import Container from "../common/Container";

function MobileMenu({ isOpen, links, onClose }) {
  return (
    <div className={`mobile-menu ${isOpen ? "is-open" : ""}`.trim()} aria-hidden={!isOpen}>
      <Container>
        <nav className="mobile-menu__nav" aria-label="Navegacion movil">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `mobile-menu__link ${isActive ? "is-active" : ""}`}
              onClick={onClose}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </Container>
    </div>
  );
}

export default MobileMenu;
