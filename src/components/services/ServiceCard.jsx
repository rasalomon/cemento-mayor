function ServiceCard({ title, description, image, imageOnly = false }) {
  return (
    <article className={`service-card${imageOnly ? " service-card--image-only" : ""}`}>
      {image && (
        <figure className="service-card__media">
          <img src={image} alt={title} loading="lazy" />
        </figure>
      )}
      {!imageOnly && (
        <>
          <h3>{title}</h3>
          <p>{description}</p>
        </>
      )}
    </article>
  );
}

export default ServiceCard;
