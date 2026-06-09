import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { getWhatsAppUrl, type Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-brand-line bg-brand-white shadow-[0_18px_45px_rgba(122,80,71,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(122,80,71,0.14)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-lilac-soft">
        <Image
          alt={product.name}
          className="object-contain p-6 transition duration-500 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 260px"
          src={product.image}
        />
      </div>
      <div className="flex min-h-64 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-brown-soft">
          {product.category}
        </p>
        <h3 className="mt-2 text-xl font-semibold leading-tight text-foreground">
          {product.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-brand-brown-muted">
          {product.description}
        </p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="text-lg font-bold text-brand-rose">{product.price}</span>
          <a
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-lilac-soft px-4 py-2 text-sm font-semibold text-brand-purple transition hover:bg-brand-lilac hover:text-brand-white focus:outline-none focus:ring-4 focus:ring-brand-lilac/40"
            href={getWhatsAppUrl(product.whatsappMessage)}
            rel="noopener noreferrer"
            target="_blank"
          >
            <ShoppingBag aria-hidden="true" className="h-4 w-4" />
            Pedir por WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
