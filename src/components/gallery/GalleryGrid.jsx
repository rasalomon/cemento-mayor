import { useEffect, useState } from "react";

function GalleryGrid({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const safeItems = Array.isArray(items)
    ? items.filter(
        (item) =>
          item &&
          typeof item === "object" &&
          item.id != null &&
          item.src &&
          item.title &&
          item.category &&
          item.description &&
          item.alt
      )
    : [];

  useEffect(() => {
    if (!selectedItem) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    };

    document.body.classList.add("is-gallery-modal-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("is-gallery-modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem]);

  return (
    <>
      <div className="gallery-grid">
        {safeItems.map((item) => (
          <article key={item.id} className="gallery-item">
            <button
              className="gallery-item__button"
              type="button"
              onClick={() => setSelectedItem(item)}
              aria-label={`Ampliar imagen: ${item.title}`}
            >
              <span className="gallery-item__media">
                <img src={item.src} alt={item.alt} loading="lazy" />
              </span>
              <span className="gallery-item__content">
                <span className="gallery-item__category">{item.category}</span>
                <span className="gallery-item__title">{item.title}</span>
                <span className="gallery-item__description">{item.description}</span>
              </span>
            </button>
          </article>
        ))}
      </div>

      {selectedItem && (
        <div
          className="gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          onMouseDown={() => setSelectedItem(null)}
        >
          <div className="gallery-modal__dialog" onMouseDown={(event) => event.stopPropagation()}>
            <button
              className="gallery-modal__close"
              type="button"
              onClick={() => setSelectedItem(null)}
              aria-label="Cerrar imagen ampliada"
            >
              ×
            </button>
            <img src={selectedItem.src} alt={selectedItem.alt} />
            <div className="gallery-modal__content">
              <span>{selectedItem.category}</span>
              <h3>{selectedItem.title}</h3>
              <p>{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GalleryGrid;
