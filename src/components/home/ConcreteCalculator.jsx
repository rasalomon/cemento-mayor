import { useMemo, useState } from "react";

const concreteTypes = [
  { label: "H con fibra", price: 7350 },
  { label: "H estructural", price: 6900 },
  { label: "H de limpieza", price: 5100 },
  { label: "Mortero autonivelante", price: 8200 },
  { label: "RDC", price: 6400 },
  { label: "H resistencia temprana", price: 8900 },
  { label: "H autocompactante", price: 9300 },
  { label: "Mortero 1:4", price: 5700 },
];

const currencyFormatter = new Intl.NumberFormat("es-UY", {
  style: "currency",
  currency: "UYU",
  maximumFractionDigits: 0,
});

function ConcreteCalculator() {
  const [selectedType, setSelectedType] = useState(concreteTypes[0].label);
  const [volume, setVolume] = useState("");
  const [location, setLocation] = useState("");
  const [total, setTotal] = useState(null);

  const selectedConcrete = useMemo(
    () => concreteTypes.find((type) => type.label === selectedType) || concreteTypes[0],
    [selectedType]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const parsedVolume = Number(volume);

    if (!parsedVolume || parsedVolume <= 0) {
      setTotal(null);
      return;
    }

    setTotal(parsedVolume * selectedConcrete.price);
  };

  return (
    <form className="concrete-calculator" onSubmit={handleSubmit}>
      <div className="construction-stripe" aria-hidden="true" />
      <div className="concrete-calculator__header">
        <h2>COTIZACIÓN DE HORMIGÓN</h2>
      </div>
      <div className="construction-stripe construction-stripe--bottom" aria-hidden="true" />

      <label className="calculator-field">
        <span>Tipo de hormigón</span>
        <select value={selectedType} onChange={(event) => setSelectedType(event.target.value)}>
          {concreteTypes.map((type) => (
            <option key={type.label} value={type.label}>
              {type.label}
            </option>
          ))}
        </select>
      </label>

      <label className="calculator-field">
        <span>Volumen en m³</span>
        <input
          min="0"
          step="0.1"
          type="number"
          inputMode="decimal"
          value={volume}
          placeholder="Ej: 18"
          onChange={(event) => setVolume(event.target.value)}
        />
      </label>

      <label className="calculator-field">
        <span>Ubicación de obra</span>
        <input
          type="text"
          value={location}
          placeholder="Montevideo, Canelones..."
          onChange={(event) => setLocation(event.target.value)}
        />
      </label>

      <button className="calculator-submit" type="submit">
        CALCULAR PRECIO
      </button>

      <div className="calculator-result" aria-live="polite">
        <span>Total estimado</span>
        <strong>{total ? currencyFormatter.format(total) : currencyFormatter.format(0)}</strong>
        <p>Incluye materiales, elaboración y transporte.</p>
        <p>Cotización válida por 7 días.</p>
      </div>
    </form>
  );
}

export default ConcreteCalculator;
