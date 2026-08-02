export function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}

const WHATSAPP_NUMBER = "918511526126";
const WHATSAPP_MESSAGE = "Hi BeingScribe! I came across your website and I'd like to talk about a project.";

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
