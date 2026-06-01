import HeroSection from "../components/home/HeroSection";
import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import ServiceCard from "../components/services/ServiceCard";
import CTAButton from "../components/common/CTAButton";
import services from "../data/services";
import companyInfo from "../data/company";
import useDocumentTitle from "../hooks/useDocumentTitle";

function HomePage() {
  useDocumentTitle("Inicio");

  return (
    <>
      <HeroSection />

      <section className="section-block">
        <Container>
          <SectionTitle
            eyebrow="Bienvenidos"
            title="Compromiso técnico para tus Obras"
            subtitle="Trabajamos con procesos claros y supervisión constante para garantizar calidad en cada etapa."
          />
          <p className="home-intro-text">{companyInfo.intro}</p>
        </Container>
      </section>

      <section className="section-block section-block--alt">
        <Container>
          <SectionTitle
            eyebrow="Servicios destacados"
            title="Equipos de alta tecnología que brindan confianza para tu proyecto"
            subtitle="Impulsamos tu proyecto con soluciones tecnológicas que maximizan rendimiento y calidad."
            centered
          />
          <div className="cards-grid cards-grid--three">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} title={service.title} description={service.description} />
            ))}
          </div>
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
