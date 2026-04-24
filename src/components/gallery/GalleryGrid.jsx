function GalleryGrid({ items }) {
  return (
    <div className="gallery-grid">
      {items.map((item) => (
        <figure key={item.id} className="gallery-item">
          <img src={item.image} alt={item.title} loading="lazy" />
          <figcaption>
            <h3>{item.title}</h3>
            <p>{item.category}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default GalleryGrid;
