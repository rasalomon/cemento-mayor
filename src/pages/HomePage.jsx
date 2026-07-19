import HeroSection from "../components/home/HeroSection";
import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import ServicesCarousel from "../components/home/ServicesCarousel";
import CTAButton from "../components/common/CTAButton";
import useDocumentTitle from "../hooks/useDocumentTitle";

const featuredServices = [
  {
    id: "bombeo-hormigon",
    image: "/images/gallery/BO-HO.png",
    title: "Bombeo de hormigón",
    // description:
    //   "Servicio especializado de bombeo para colocar hormigón de forma rápida, segura y eficiente en cualquier tipo de obra.",
  },
  {
    id: "hormigon-elaborado",
    image: "/images/gallery/HO-EL.png",
    title: "Hormigón elaborado",
    // description:
    //   "Hormigón de alta calidad producido bajo controles técnicos para proyectos residenciales, comerciales e industriales.",
  },
  {
    id: "pisos-industriales",
    image: "/images/gallery/PI-IN.png",
    title: "Pisos industriales",
    // description:
    //   "Soluciones profesionales para pisos de alta resistencia, nivelación y terminaciones industriales.",
  },
];

function HomePage() {
  useDocumentTitle("Inicio");

  return (
    <>
      <HeroSection />

      <section className="section-block home-banner-section">
        <Container>
          <img
            src="/images/gallery/Banner 2.png"
            alt="Cemento Mayor"
            className="home-banner-image"
          />
        </Container>
      </section>

      <section className="section-block section-block--alt home-services-section">
        <Container>
          <SectionTitle
            eyebrow="Servicios destacados"
            title="Equipos de alta tecnología que brindan confianza para tu proyecto"
            subtitle="Impulsamos tu proyecto con soluciones tecnológicas que maximizan rendimiento y calidad."
            centered
          />
          <ServicesCarousel items={featuredServices} />
        </Container>
      </section>

      <section className="section-block">
        <Container className="about-preview">
          <div>
            <SectionTitle
              eyebrow="Quienes somos"
              title="Un equipo confiable para acompañar tu obra"
              subtitle="Integramos planificación, materiales y ejecución para que cada entrega cumpla tus objetivos."
            />
          </div>
          <CTAButton to="/about" variant="secondary">
            Conocer la empresa
          </CTAButton>
        </Container>
      </section>

      <section className="section-block section-block--dark">
        <Container className="home-cta">
          <h2>Necesitas una propuesta para tu proyecto?</h2>
          <p>Coordinemos una evaluación técnica y avancemos con una solución adaptada a tu necesidad.</p>
          <CTAButton to="/contact">Hablar con Cemento Mayor</CTAButton>
        </Container>
      </section>
    </>
  );
}

export default HomePage;
