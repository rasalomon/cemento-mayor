import { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "../common/Container";
import { APP_NAME, NAV_LINKS } from "../../constants";
import MobileMenu from "./MobileMenu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <NavLink to="/" className="site-logo" aria-label={`${APP_NAME} inicio`}>
          <img
            className="site-logo__mark"
            src="/images/gallery/Icono.png"
            alt=""
            aria-hidden="true"
          />
          <span>{APP_NAME}</span>
        </NavLink>

        <nav className="site-nav" aria-label="Navegacion principal">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `site-nav__link ${isActive ? "is-active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </Container>

      <MobileMenu isOpen={isMenuOpen} links={NAV_LINKS} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}

export default Header;
