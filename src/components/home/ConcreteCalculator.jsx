import { useState } from "react";

const resistencias = ["C15", "C20", "C25", "C30", "C35", "C40", "C45"];

const fibras = ["Sin fibra", "Macro Fibra y Micro Fibra"];

const tipos = [
  " Pedregullo (5-25mm)",
  "Piedra Partida (5-20mm)",
  "Gravillin (4-8mm)",
];

function ConcreteCalculator() {
  const [resistencia, setResistencia] = useState("");
  const [fibra, setFibra] = useState("");
  const [tipo, setTipo] = useState("");
  const [volumen, setVolumen] = useState("");
  const [showRequest, setShowRequest] = useState(false);

  const handleCreateRequest = () => {
    if (!resistencia || !fibra || !tipo || !volumen) {
      setShowRequest(false);
      return;
    }

    const solicitud = {
      resistencia,
      fibra,
      tipo,
      volumen,
    };

    setShowRequest(true);
    console.log("Solicitud hormigón:", solicitud);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreateRequest();
  };

  return (
    <aside className="calculator-card calculator-card--in-phone" aria-label="Solicitud de hormigón">
      <div className="calculator-card__header">
        <h2 className="calculator-card__title">COTIZACIÓN DE HORMIGÓN</h2>
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

        <label htmlFor="concrete-type">Tipo de piedra</label>
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

      {showRequest ? (
        <div className="calculator-request-summary" aria-live="polite">
          <h3>Resumen de solicitud</h3>
          <dl>
            <div>
              <dt>Resistencia</dt>
              <dd>{resistencia}</dd>
            </div>
            <div>
              <dt>Fibra</dt>
              <dd>{fibra}</dd>
            </div>
            <div>
              <dt>Tipo</dt>
              <dd>{tipo}</dd>
            </div>
            <div>
              <dt>Volumen</dt>
              <dd>{volumen} m³</dd>
            </div>
          </dl>
        </div>
      ) : null}
    </aside>
  );
}

export default ConcreteCalculator;
