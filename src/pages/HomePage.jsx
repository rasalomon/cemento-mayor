import Hero from "../components/home/Hero";
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
      <Hero />

      <section className="section-block">
        <Container>
          <SectionTitle
            eyebrow="Bienvenidos"
            title="Compromiso tecnico para obras de alto rendimiento"
            subtitle="Trabajamos con procesos claros y supervision constante para garantizar calidad en cada etapa."
          />
          <p className="home-intro-text">{companyInfo.intro}</p>
        </Container>
      </section>

      <section className="section-block section-block--alt">
        <Container>
          <SectionTitle
            eyebrow="Servicios destacados"
            title="Soluciones clave para tu proyecto"
            subtitle="Aplicamos experiencia en obra para resolver necesidades de construccion con eficiencia y precision."
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
              title="Un equipo confiable para acompanar tu obra"
              subtitle="Integramos planificacion, materiales y ejecucion para que cada entrega cumpla tus objetivos."
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
          <p>Coordinemos una evaluacion tecnica y avancemos con una solucion adaptada a tu necesidad.</p>
          <CTAButton to="/contact">Hablar con Cemento Mayor</CTAButton>
        </Container>
      </section>
    </>
  );
}

export default HomePage;
