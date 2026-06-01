export const APP_NAME = import.meta.env.VITE_APP_NAME || "Cemento Mayor";
export const API_URL = import.meta.env.VITE_API_URL || "https://api.cementomayor.com";
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "598 9121 2324";
export const COMPANY_EMAIL = import.meta.env.VITE_COMPANY_EMAIL || "comercial@cementomayor.com.uy";
export const GOOGLE_MAPS_EMBED_URL =
  import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL ||
  "https://maps.google.com/maps?q=Montevideo&t=&z=13&ie=UTF8&iwloc=&output=embed";

export const NAV_LINKS = [
  { label: "Inicio", path: "/" },
  { label: "Servicios", path: "/services" },
    { label: "Productos", path: "/products" },
    { label: "Galeria", path: "/gallery" },
  { label: "Nosotros", path: "/about" },
  { label: "Contacto", path: "/contact" },
];
