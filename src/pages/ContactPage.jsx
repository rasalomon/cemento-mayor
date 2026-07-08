import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import ContactForm from "../components/contact/ContactForm";
import CTAButton from "../components/common/CTAButton";
import {
  API_URL,
  COMPANY_EMAIL,
  GOOGLE_MAPS_EMBED_URL,
  WHATSAPP_NUMBER,
} from "../constants";
import { formatWhatsappLink } from "../utils/formatters";
import useDocumentTitle from "../hooks/useDocumentTitle";

function ContactPage() {
  useDocumentTitle("Contacto");

  const whatsappLink = formatWhatsappLink(
    WHATSAPP_NUMBER,
    "Hola Cemento Mayor, quiero solicitar una cotización."
  );

  return (
    <section className="section-block contact-page">
      <Container>
        <SectionTitle
          eyebrow="Contacto"
          title="Hablemos sobre tu obra"
          subtitle="Completa el formulario o escribinos por WhatsApp para recibir asesoramiento."
          centered
        />

        <div className="contact-grid">
          <div>
            <ContactForm />
          </div>

          <aside className="contact-card">
            <h3>Canales directos</h3>
            <p>Email: {COMPANY_EMAIL}</p>
            <p>Telefono: {WHATSAPP_NUMBER}</p>
            <p>Direccion: Ruta y dirección de oficina (placeholder)</p>
            <p className="contact-card__env">API configurada: {API_URL}</p>
            <CTAButton href={whatsappLink} external>
              Escribir por WhatsApp
            </CTAButton>
          </aside>
        </div>

        <section className="map-card" aria-label="Ubicacion en mapa">
          <h3>Ubicación</h3>
          <iframe
            title="Mapa de Cemento Mayor"
            src={GOOGLE_MAPS_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </Container>
    </section>
  );
}

export default ContactPage;
