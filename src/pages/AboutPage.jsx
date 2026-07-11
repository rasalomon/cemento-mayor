import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import companyInfo from "../data/company";
import useDocumentTitle from "../hooks/useDocumentTitle";

const benefits = [
  {
    id: "experience",
    icon: "team",
    title: "Experiencia técnica",
    description: "Equipo capacitado para obras residenciales, comerciales e industriales.",
  },
  {
    id: "planning",
    icon: "calendar",
    title: "Planificación precisa",
    description: "Organización orientada al cumplimiento de plazos y presupuestos.",
  },
  {
    id: "quality",
    icon: "shield",
    title: "Calidad garantizada",
    description: "Materiales controlados y procesos de trabajo estandarizados.",
  },
  {
    id: "support",
    icon: "message",
    title: "Atención cercana",
    description: "Acompañamiento técnico y respuestas rápidas durante cada proyecto.",
  },
];

function AboutIcon({ name }) {
  const paths = {
    building: (
      <>
        <path d="M3 21h18" />
        <path d="M6 21V5l6-2v18" />
        <path d="M12 8h6v13" />
        <path d="M8.5 8v.01M8.5 12v.01M8.5 16v.01M15 12h.01M18 12h.01M15 16h.01M18 16h.01" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    vision: (
      <>
        <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
        <circle cx="12" cy="12" r="2.5" />
      </>
    ),
    team: (
      <>
        <path d="M4 15.5V14a4 4 0 0 1 4-4h1" />
        <path d="M15 10h1a4 4 0 0 1 4 4v1.5" />
        <circle cx="8" cy="6" r="2.5" />
        <circle cx="16" cy="6" r="2.5" />
        <path d="M8 21v-2a4 4 0 0 1 8 0v2" />
        <circle cx="12" cy="14" r="2.5" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18M8 15l2 2 5-5" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 20 6v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </>
    ),
    message: (
      <>
        <path d="M21 12a8 8 0 0 1-8 8H6l-4 2 1.5-5A8.5 8.5 0 1 1 21 12Z" />
        <path d="M8 12h.01M12 12h.01M16 12h.01" />
      </>
    ),
  };

  return (
    <svg className="about-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function AboutPage() {
  useDocumentTitle("Nosotros");

  return (
    <section className="section-block about-page">
      <Container>
        <SectionTitle
          eyebrow="Nosotros"
          title="Construimos confianza con resultados"
          subtitle="Conoce la base de trabajo de Cemento Mayor y nuestro enfoque profesional."
          centered
        />

        <div className="about-content">
          <article className="about-presentation">
            <div className="about-icon-box about-icon-box--large">
              <AboutIcon name="building" />
            </div>
            <div>
              <p className="about-section-label">Cemento Mayor</p>
              <h2>Presentación</h2>
              <p>{companyInfo.intro}</p>
            </div>
          </article>

          <div className="about-principles">
            <article className="about-principle-card">
              <div className="about-icon-box"><AboutIcon name="target" /></div>
              <div>
                <h2>Misión</h2>
                <p>{companyInfo.mission}</p>
              </div>
            </article>
            <article className="about-principle-card">
              <div className="about-icon-box"><AboutIcon name="vision" /></div>
              <div>
                <h2>Visión</h2>
                <p>{companyInfo.vision}</p>
              </div>
            </article>
          </div>

          <section className="about-benefits" aria-labelledby="benefits-title">
            <header className="about-benefits__header">
              <p className="about-section-label">Nuestro diferencial</p>
              <h2 id="benefits-title">Por qué elegirnos</h2>
            </header>
            <div className="about-benefits__grid">
              {benefits.map((benefit) => (
                <article className="about-benefit-card" key={benefit.id}>
                  <div className="about-icon-box"><AboutIcon name={benefit.icon} /></div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
}

export default AboutPage;
