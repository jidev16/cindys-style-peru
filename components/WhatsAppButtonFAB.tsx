import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/data/products";

type WhatsAppButtonFABProps = {
  message: string;
  className?: string;
};

export default function WhatsAppButtonFAB({
  message,
  className = "",
}: WhatsAppButtonFABProps) {
  return (
    <a
      aria-label="Escribir a Cindy’s Style por WhatsApp"
      className={`fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-brand-white shadow-[0_18px_45px_rgba(37,211,102,0.35)] transition hover:-translate-y-1 hover:bg-whatsapp-hover focus:outline-none focus:ring-4 focus:ring-whatsapp/30 ${className}`}
      href={getWhatsAppUrl(message)}
      rel="noopener noreferrer"
      target="_blank"
    >
      <MessageCircle aria-hidden="true" className="h-7 w-7" strokeWidth={2.4} />
    </a>
  );
}
