function SectionTitle({ eyebrow, title, subtitle, centered = false }) {
  return (
    <header className={`section-title ${centered ? "is-centered" : ""}`.trim()}>
      {eyebrow ? <p className="section-title__eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {subtitle ? <p className="section-title__subtitle">{subtitle}</p> : null}
    </header>
  );
}

export default SectionTitle;
