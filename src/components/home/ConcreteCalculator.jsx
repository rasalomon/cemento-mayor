import { useState } from "react";
import { WHATSAPP_NUMBER } from "../../constants";
import { formatWhatsappLink } from "../../utils/formatters";

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
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const resetQuotation = () => {
    setResistencia("");
    setFibra("");
    setTipo("");
    setVolumen("");
    setShowRequest(false);
    setShowCustomerForm(false);
    setSubmitStatus("idle");
    setSubmitMessage("");
  };

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
    setShowCustomerForm(false);
    setSubmitStatus("idle");
    setSubmitMessage("");
    console.log("Solicitud hormigón:", solicitud);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreateRequest();
  };

  const handleRequestSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const customerName = formData.get("name");
    const customerEmail = formData.get("email");
    const customerMessage = formData.get("message");

    const whatsappMessage =
      [
        "Hola Cemento Mayor, quiero solicitar una cotización de hormigón.",
        "",
        `Nombre: ${customerName}`,
        `Email: ${customerEmail}`,
        "",
        "Mensaje:",
        customerMessage,
        "",
        "Resumen de solicitud:",
        `Resistencia: ${resistencia}`,
        `Fibra: ${fibra}`,
        `Tipo de piedra: ${tipo.trim()}`,
        `Volumen: ${volumen} m³`,
      ].join("\n");

    window.open(formatWhatsappLink(WHATSAPP_NUMBER, whatsappMessage), "_blank", "noopener,noreferrer");
    form.reset();
    resetQuotation();
    setSubmitStatus("success");
    setSubmitMessage("Se abrió WhatsApp con los datos de la solicitud.");
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

        <div className="calculator-form__actions">
          <button type="submit" className="calculator-form__button">
            VER SOLICITUD
          </button>
          <button
            type="button"
            className="calculator-form__clear"
            onClick={resetQuotation}
          >
            LIMPIAR
          </button>
        </div>
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

          {!showCustomerForm ? (
            <button
              type="button"
              className="calculator-request-summary__send"
              onClick={() => setShowCustomerForm(true)}
            >
              ENVIAR
            </button>
          ) : null}

          {showCustomerForm ? (
            <form className="calculator-customer-form" onSubmit={handleRequestSubmit}>
              <h4>Datos de contacto</h4>

              <label htmlFor="request-name">Nombre</label>
              <input id="request-name" name="name" type="text" autoComplete="name" required />

              <label htmlFor="request-email">Email</label>
              <input id="request-email" name="email" type="email" autoComplete="email" required />

              <label htmlFor="request-message">Mensaje</label>
              <textarea id="request-message" name="message" rows="3" required />

              <button type="submit">ENVIAR POR WHATSAPP</button>
            </form>
          ) : null}
        </div>
      ) : null}

      {submitMessage ? (
        <p className={`calculator-submit-message calculator-submit-message--${submitStatus}`} role="status">
          {submitMessage}
        </p>
      ) : null}
    </aside>
  );
}

export default ConcreteCalculator;
