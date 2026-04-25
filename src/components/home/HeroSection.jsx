import CTAButton from "../common/CTAButton";
import Container from "../common/Container";
import FeatureItem from "./FeatureItem";
import PhoneMockup from "./PhoneMockup";

const features = [
  { icon: "quality", title: "Hormigón de calidad" },
  { icon: "delivery", title: "Entrega puntual" },
  { icon: "technical", title: "Asesoramiento técnico" },
  { icon: "safety", title: "Compromiso y seguridad" },
];

function HeroSection() {
  return (
    <section className="home-hero" aria-label="Inicio Cemento Mayor">
      <Container className="home-hero__inner">
        <div className="home-hero__content">
          <p className="home-hero__eyebrow">Hormigón, pisos industriales y soluciones para obras</p>
          <h1>
            Construimos calidad, entregamos <span>confianza</span>
          </h1>
          <p className="home-hero__lead">
            En Cemento Mayor ofrecemos hormigón de alta calidad y soluciones integrales para todo tipo de obras.
          </p>

          <ul className="home-hero__features" aria-label="Beneficios principales">
            {features.map((feature) => (
              <FeatureItem key={feature.title} icon={feature.icon} title={feature.title} />
            ))}
          </ul>

          <div className="home-hero__actions">
            <CTAButton to="/services">Conocer servicios</CTAButton>
            <CTAButton to="/gallery" variant="dark">
              Ver obras realizadas
            </CTAButton>
          </div>
        </div>

        <PhoneMockup />
      </Container>

      <div className="home-hero__construction" aria-hidden="true">
        <div className="home-hero__construction-inner" />
      </div>
    </section>
  );
}

export default HeroSection;
