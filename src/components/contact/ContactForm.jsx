import CTAButton from "../common/CTAButton";
import { WHATSAPP_NUMBER } from "../../constants";
import { formatWhatsappLink } from "../../utils/formatters";

const serviceLabels = {
  hormigon: "Hormigón elaborado",
  bombeo: "Bombeo de hormigón",
  pisos: "Regla laser para pisos",
};

function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const nombre = formData.get("name");
    const telefono = formData.get("phone");
    const email = formData.get("email");
    const servicios = formData.getAll("service");
    const mensaje = formData.get("message");
    const serviciosInteres = servicios.map((servicio) => serviceLabels[servicio] ?? servicio);

    if (serviciosInteres.length === 0) {
      window.alert("Selecciona al menos un servicio de interes.");
      return;
    }

    const whatsappMessage = [
      "Hola Cemento Mayor, quiero hacer una consulta.",
      "",
      `Nombre: ${nombre}`,
      `Telefono: ${telefono}`,
      `Email: ${email}`,
      `Servicios de interes: ${serviciosInteres.join(", ")}`,
      "",
      "Mensaje:",
      mensaje,
    ].join("\n");

    window.open(formatWhatsappLink(WHATSAPP_NUMBER, whatsappMessage), "_blank", "noopener,noreferrer");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre</label>
      <input id="name" name="name" type="text" placeholder="Tu nombre" required />

      <label htmlFor="phone">Teléfono</label>
      <input id="phone" name="phone" type="tel" placeholder="+598 ..." required />

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" placeholder="nombre@empresa.com" required />

      <fieldset className="contact-form__checkbox-group">
        <legend>Servicios de interes</legend>
        <label>
          <input name="service" type="checkbox" value="hormigon" />
          <span>Hormigón elaborado</span>
        </label>
        <label>
          <input name="service" type="checkbox" value="bombeo" />
          <span>Bombeo de hormigón</span>
        </label>
        <label>
          <input name="service" type="checkbox" value="pisos" />
          <span>Regla laser para pisos</span>
        </label>
      </fieldset>

      <label htmlFor="message">Mensaje</label>
      <textarea id="message" name="message" rows="5" placeholder="Contanos sobre tu proyecto..." required />

      <CTAButton>Enviar consulta</CTAButton>
    </form>
  );
}

export default ContactForm;
