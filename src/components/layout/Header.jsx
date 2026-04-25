import { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "../common/Container";
import { APP_NAME, NAV_LINKS } from "../../constants";
import MobileMenu from "./MobileMenu";
import CTAButton from "../common/CTAButton";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <NavLink to="/" className="site-logo" aria-label={`${APP_NAME} inicio`}>
          <span className="site-logo__mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="site-logo__wordmark">
            <span>CEMENTO</span>
            <strong>MAYOR</strong>
          </span>
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

        <CTAButton to="/contact" className="site-header__cta">
          COTIZAR AHORA
        </CTAButton>

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
