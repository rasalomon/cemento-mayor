import { useState } from "react";

const resistencias = ["H20", "H25", "H30", "H35", "H40"];

const fibras = ["Sin fibra", "Fibra sint\u00E9tica", "Fibra met\u00E1lica"];

const tipos = [
  "Estructural",
  "Bombeable",
  "Autocompactante",
  "Limpieza",
  "RDC",
  "Mortero",
];

function ConcreteCalculator() {
  const [resistencia, setResistencia] = useState("");
  const [fibra, setFibra] = useState("");
  const [tipo, setTipo] = useState("");
  const [volumen, setVolumen] = useState("");

  const handleCreateRequest = () => {
    const solicitud = {
      resistencia,
      fibra,
      tipo,
      volumen: Number(volumen),
    };

    console.log("Solicitud hormig\u00F3n:", solicitud);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreateRequest();
  };

  return (
    <aside className="calculator-card calculator-card--in-phone" aria-label="Solicitud de hormigón">
      <div className="calculator-card__header">
        <h2 className="calculator-card__title">SOLICITUD DE HORMIGÓN</h2>
        <div className="calculator-card__stripe" aria-hidden="true" />
      </div>

      <form className="calculator-form" onSubmit={handleSubmit}>
        <label htmlFor="concrete-resistance">Resistencia</label>
        <select
          id="concrete-resistance"
          value={resistencia}
          onChange={(event) => setResistencia(event.target.value)}
          required
        >
          <option value="">Seleccione resistencia</option>
          {resistencias.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <label htmlFor="concrete-fiber">Fibra</label>
        <select
          id="concrete-fiber"
          value={fibra}
          onChange={(event) => setFibra(event.target.value)}
          required
        >
          <option value="">Seleccione fibra</option>
          {fibras.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <label htmlFor="concrete-type">Tipo</label>
        <select
          id="concrete-type"
          value={tipo}
          onChange={(event) => setTipo(event.target.value)}
          required
        >
          <option value="">Seleccione tipo</option>
          {tipos.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <label htmlFor="concrete-volume">Volumen (m3)</label>
        <input
          id="concrete-volume"
          type="number"
          min="0"
          step="0.1"
          value={volumen}
          onChange={(event) => setVolumen(event.target.value)}
          placeholder="Ingrese metros cúbicos"
          required
        />

        <button type="submit" className="calculator-form__button">
          VER SOLICITUD
        </button>
      </form>
    </aside>
  );
}

export default ConcreteCalculator;
