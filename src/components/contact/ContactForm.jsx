import CTAButton from "../common/CTAButton";

const CONTACT_EMAIL = "ventas@cementomayor.com.uy";

const serviceLabels = {
  hormigon: "Hormigón elaborado",
  bombeo: "Bombeo de hormigón",
  pisos: "Pisos industriales",
  asesoria: "Asesoria técnica",
  custom: "Obra a medida",
};

function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const selectedService = serviceLabels[data.service] ?? data.service;

    const subject = `Consulta web - ${data.name}`;
    const body = [
      "Nueva consulta desde el sitio web de Cemento Mayor:",
      "",
      `Nombre: ${data.name}`,
      `Telefono: ${data.phone}`,
      `Email: ${data.email}`,
      `Servicio de interes: ${selectedService}`,
      "",
      "Mensaje:",
      data.message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre</label>
      <input id="name" name="name" type="text" placeholder="Tu nombre" required />

      <label htmlFor="phone">Telefono</label>
      <input id="phone" name="phone" type="tel" placeholder="+598 ..." required />

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" placeholder="nombre@empresa.com" required />

      <label htmlFor="service">Servicio de interes</label>
      <select id="service" name="service" required>
        <option value="">Selecciona un servicio</option>
        <option value="hormigon">Hormigón elaborado</option>
        <option value="bombeo">Bombeo de hormigón</option>
        <option value="pisos">Pisos industriales</option>
        <option value="asesoria">Asesoria técnica</option>
        <option value="custom">Obra a medida</option>
      </select>

      <label htmlFor="message">Mensaje</label>
      <textarea id="message" name="message" rows="5" placeholder="Contanos sobre tu proyecto..." required />

      <CTAButton>Enviar consulta</CTAButton>
    </form>
  );
}

export default ContactForm;
