export function formatWhatsappLink(number, text) {
  const cleanNumber = `${number}`.replace(/\D/g, "");
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}
