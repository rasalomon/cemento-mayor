import CTAButton from "../common/CTAButton";

function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
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
