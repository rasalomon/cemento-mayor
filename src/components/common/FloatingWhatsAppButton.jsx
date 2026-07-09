import { WHATSAPP_NUMBER } from "../../constants";
import { formatWhatsappLink } from "../../utils/formatters";

function FloatingWhatsAppButton() {
  const whatsappLink = formatWhatsappLink(
    WHATSAPP_NUMBER,
    "Hola Cemento Mayor, quiero hacer una consulta."
  );

  return (
    <a
      className="floating-whatsapp"
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      title="Escribir por WhatsApp"
    >
      <img src="/images/wsp50.png" alt="" aria-hidden="true" />
    </a>
  );
}

export default FloatingWhatsAppButton;
