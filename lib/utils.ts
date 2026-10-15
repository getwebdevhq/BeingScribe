export function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}

const WHATSAPP_NUMBER = "918511526126";
const WHATSAPP_MESSAGE = "Hi BeingScribe! I came across your website and I'd like to talk about a project.";

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const PORTFOLIO_DRIVE_LINK = "https://drive.google.com/file/d/1YHMyBby2dwzz4LeVKXfWknOlw7j_dwZh/view?usp=sharing";
export const EMAIL_ADDRESS = "beingscribe7@gmail.com";
export const EMAIL_LINK = `mailto:${EMAIL_ADDRESS}`;
