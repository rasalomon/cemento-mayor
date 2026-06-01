import { useMemo, useState } from "react";

const CONCRETE_TYPES = [
  "Hormig\u00F3n para pisos con fibra",
  "Hormig\u00F3n Estructural",
  "Hormig\u00F3n de P\u00E1pida Habilitaci\u00F3n",
  "Hormig\u00F3n Autocompactante",
  "Mortero Autonivelante",
  "RDC",
  "Mortero 1:4",
];

const PRICE_PER_M3 = {
  "Hormig\u00F3n para pisos con fibra": 7200,
  "Hormig\u00F3n Estructural": 6800,
  "Hormig\u00F3n de P\u00E1pida Habilitaci\u00F3n": 5900,
  "Hormig\u00F3n Autocompactante": 8100,
  "RDC": 5600,
  "Mortero 1:4": 6100,
};

const currencyUYU = new Intl.NumberFormat("es-UY", {
  style: "currency",
  currency: "UYU",
  maximumFractionDigits: 0,
});

function ConcreteCalculator() {
  const [type, setType] = useState("");
  const [volume, setVolume] = useState("");
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState({});
  const [showResult, setShowResult] = useState(false);

  const total = useMemo(() => {
    const numericVolume = Number(volume);
    if (!type || !numericVolume || numericVolume <= 0) return 0;
    return numericVolume * PRICE_PER_M3[type];
  }, [type, volume]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};
    const numericVolume = Number(volume);

    if (!type) nextErrors.type = "Selecciona un tipo de hormig\u00F3n.";
    if (!volume || Number.isNaN(numericVolume) || numericVolume <= 0) {
      nextErrors.volume = "Ingresa un volumen v\u00E1lido mayor a 0.";
    }
    if (!location.trim()) nextErrors.location = "Ingresa la ubicaci\u00F3n de obra.";

    setErrors(nextErrors);
    setShowResult(Object.keys(nextErrors).length === 0);
  };

  return (
    <aside className="calculator-card calculator-card--in-phone" aria-label="Calculadora de cotizaci\u00F3n de hormig\u00F3n">
      <div className="calculator-card__header">
        <h2 className="calculator-card__title">COTIZACIÓN DE HORMIGÓN</h2>
        <div className="calculator-card__stripe" aria-hidden="true" />
      </div>

      <form className="calculator-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="concrete-type">Tipo de hormigón</label>
        <select
          id="concrete-type"
          value={type}
          onChange={(event) => setType(event.target.value)}
          aria-invalid={Boolean(errors.type)}
        >
          <option value="">Selecciona una opción</option>
          {CONCRETE_TYPES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        {errors.type ? <p className="calculator-form__error">{errors.type}</p> : null}

        <label htmlFor="concrete-volume">Volumen (m3)</label>
        <input
          id="concrete-volume"
          type="number"
          min="0"
          step="0.1"
          value={volume}
          onChange={(event) => setVolume(event.target.value)}
          placeholder="Ej: 12"
          aria-invalid={Boolean(errors.volume)}
        />
        {errors.volume ? <p className="calculator-form__error">{errors.volume}</p> : null}

        <label htmlFor="concrete-location">Ubicacion de obra</label>
        <input
          id="concrete-location"
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Ciudad / barrio"
          aria-invalid={Boolean(errors.location)}
        />
        {errors.location ? <p className="calculator-form__error">{errors.location}</p> : null}

        <button type="submit" className="calculator-form__button">
          CALCULAR PRECIO
        </button>
      </form>

      {showResult ? (
        <div className="calculator-result">
          <p className="calculator-result__label">Total estimado</p>
          <p className="calculator-result__value">{currencyUYU.format(total)}</p>
          <p className="calculator-result__note">Incluye materiales, elaboracion y transporte.</p>
          <p className="calculator-result__note">Cotizacion valida por 7 dias.</p>
        </div>
      ) : null}
    </aside>
  );
}

export default ConcreteCalculator;
