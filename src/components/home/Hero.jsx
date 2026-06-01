import CTAButton from "../common/CTAButton";
import Container from "../common/Container";

function Hero() {
  return (
    <section className="hero" aria-label="Bienvenida principal">
      <img className="hero__background" src="/images/hero-banner.svg" alt="Obra de construccion de cemento" />
      <div className="hero__overlay" />
      <Container className="hero__content">
        <p className="hero__eyebrow">Cemento Mayor</p>
        <h1>Soluciones en hormigón para proyectos que exigen resultados</h1>
        <p>
          Acompañamos tu obra con calidad tecnica, cumplimiento y un equipo preparado para responder en cada
          etapa.
        </p>
        <div className="hero__actions">
          <CTAButton to="/services">Ver servicios</CTAButton>
          <CTAButton to="/contact" variant="secondary">
            Solicitar cotizacion
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
