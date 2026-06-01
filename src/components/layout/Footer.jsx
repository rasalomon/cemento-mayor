import Container from "../common/Container";
import { APP_NAME, COMPANY_EMAIL, WHATSAPP_NUMBER } from "../../constants";

function Footer() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__grid">
        <section>
          <h3>{APP_NAME}</h3>
          <p>
            Soluciones profesionales en hormigón, pisos y obras a medida para construcción residencial,
            comercial e industrial.
          </p>
        </section>

        <section>
          <h3>Contacto</h3>
          <ul>
            <li>Email: {COMPANY_EMAIL}</li>
            <li>WhatsApp: +{WHATSAPP_NUMBER}</li>
            <li>Telefono: +598 0000 0000</li>
          </ul>
        </section>

        <section>
          <h3>Social</h3>
          <ul>
            <li>
              <a href="#" aria-label="Instagram (placeholder)">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn (placeholder)">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" aria-label="Facebook (placeholder)">
                Facebook
              </a>
            </li>
          </ul>
        </section>
      </Container>
      <Container>
        <p className="site-footer__bottom">
          &copy; {new Date().getFullYear()} {APP_NAME}. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
