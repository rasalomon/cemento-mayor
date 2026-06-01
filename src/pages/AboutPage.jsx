import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import companyInfo from "../data/company";
import useDocumentTitle from "../hooks/useDocumentTitle";

function AboutPage() {
  useDocumentTitle("Nosotros");

  return (
    <section className="section-block about-page">
      <Container>
        <SectionTitle
          eyebrow="Nosotros"
          title="Construimos confianza con resultados"
          subtitle="Conoce la base de trabajo de Cemento Mayor y nuestro enfoque profesional."
        />

        <article className="about-card">
          <h3>Presentación</h3>
          <p>{companyInfo.intro}</p>
        </article>

        <div className="cards-grid cards-grid--two">
          <article className="service-card">
            <h3>Misión</h3>
            <p>{companyInfo.mission}</p>
          </article>
          <article className="service-card">
            <h3>Visión</h3>
            <p>{companyInfo.vision}</p>
          </article>
        </div>

        <article className="about-card">
          <h3>Por que elegirnos</h3>
          <ul className="about-list">
            {companyInfo.reasons.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </article>
      </Container>
    </section>
  );
}

export default AboutPage;
