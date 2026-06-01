import CTAButton from "../common/CTAButton";
import Container from "../common/Container";
import PhoneMockup from "./PhoneMockup";

function HeroSection() {
  return (
    <section className="hero" aria-label="Bienvenida principal">
      <img className="hero__background" src="/images/background/obra.png" alt="Obra de construccion de cemento" />
      <div className="hero__overlay" />
      <Container className="hero__content hero__content--split">
        <div className="hero__left">
          <p className="hero__eyebrow">Cemento Mayor</p>
          <h1>Soluciones en hormigón para proyectos que exigen resultados</h1>
          <p>
            Acompanamos tu obra con calidad técnica, cumplimiento y un equipo preparado para responder en cada
            etapa.
          </p>
          <div className="hero__actions">
            <CTAButton to="/services">Ver servicios</CTAButton>
            <CTAButton to="/contact" variant="secondary">
              Solicitar cotización
            </CTAButton>
          </div>
        </div>

        <PhoneMockup />
      </Container>
    </section>
  );
}

export default HeroSection;
