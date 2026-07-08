import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import ServiceCard from "../components/services/ServiceCard";
import services from "../data/services";
import useDocumentTitle from "../hooks/useDocumentTitle";

function ServicesPage() {
  useDocumentTitle("Servicios");

  return (
    <section className="section-block services-page">
      <Container>
        <SectionTitle
          eyebrow="Servicios"
          title="Cobertura integral para obras de hormigón y pisos"
          subtitle="Selecciona el servicio que mejor se adapte a tu proyecto."
          centered
        />
        <div className="cards-grid cards-grid--three">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              imageOnly={service.imageOnly}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ServicesPage;
