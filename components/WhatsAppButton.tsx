import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/data/products";

type WhatsAppButtonProps = {
  message: string;
  children?: React.ReactNode;
  className?: string;
};

export default function WhatsAppButton({
  message,
  children = "Comprar por WhatsApp",
  className = "",
}: WhatsAppButtonProps) {
  return (
    <a
      aria-label={
        typeof children === "string"
          ? children
          : "Escribir a Cindy’s Style por WhatsApp"
      }
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-brand-lilac-button px-5 py-3 text-sm font-semibold text-brand-white shadow-[0_14px_35px_rgba(184,146,212,0.32)] transition hover:-translate-y-0.5 hover:bg-brand-lilac-deep focus:outline-none focus:ring-4 focus:ring-brand-lilac/45 ${className}`}
      href={getWhatsAppUrl(message)}
      rel="noopener noreferrer"
      target="_blank"
    >
      <MessageCircle aria-hidden="true" className="h-4 w-4" strokeWidth={2.4} />
      {children}
    </a>
  );
}
