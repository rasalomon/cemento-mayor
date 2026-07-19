import { useEffect, useState } from "react";

function ServicesCarousel({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isPaused || items.length < 2 || prefersReducedMotion) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % items.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isPaused, items.length]);

  const showPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + items.length) % items.length);
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % items.length);
  };

  return (
    <div
      className="services-carousel"
      aria-roledescription="carrusel"
      aria-label="Servicios destacados"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="services-carousel__viewport">
        <div
          className="services-carousel__track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <figure
              className={`services-carousel__slide${
                ["bombeo-hormigon", "hormigon-elaborado"].includes(item.id)
                  ? " services-carousel__slide--edge-fix"
                  : ""
              }`}
              key={item.id}
              aria-hidden={index !== activeIndex}
            >
              <img src={item.image} alt={item.title} />
            </figure>
          ))}
        </div>
      </div>

      <button
        className="services-carousel__control services-carousel__control--previous"
        type="button"
        onClick={showPrevious}
        aria-label="Ver servicio anterior"
      >
        ‹
      </button>
      <button
        className="services-carousel__control services-carousel__control--next"
        type="button"
        onClick={showNext}
        aria-label="Ver servicio siguiente"
      >
        ›
      </button>

      <div className="services-carousel__indicators" aria-label="Seleccionar servicio">
        {items.map((item, index) => (
          <button
            className={`services-carousel__indicator${index === activeIndex ? " is-active" : ""}`}
            type="button"
            key={item.id}
            onClick={() => setActiveIndex(index)}
            aria-label={`Ver ${item.title}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}

export default ServicesCarousel;
