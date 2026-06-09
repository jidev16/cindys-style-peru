"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { displayWhatsApp } from "@/data/products";

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#catalogo", label: "Productos" },
  { href: "#comprar", label: "Cómo comprar" },
  { href: "#envios", label: "Envíos" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleScroll = () => setIsMenuOpen(false);
    const handlePointerDown = (event: PointerEvent) => {
      if (
        headerRef.current &&
        event.target instanceof Node &&
        !headerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isMenuOpen]);

  return (
    <header
      className="sticky top-0 z-40 border-b border-brand-line/80 bg-brand-warm-white/92 backdrop-blur-md"
      ref={headerRef}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8">
        <a
          className="text-xl font-semibold tracking-normal text-brand-brown sm:text-2xl"
          href="#inicio"
          onClick={closeMenu}
        >
          Cindy’s Style Perú
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              className="text-sm font-medium text-brand-brown-muted transition hover:text-brand-lilac-deep"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden sm:block">
          <WhatsAppButton
            className="px-4 py-2.5"
            message="¡Hola, Cindy’s Style! 💜 Me encantaría recibir asesoría para comprar mis nuevos favoritos."
          >
            {displayWhatsApp}
          </WhatsAppButton>
        </div>
        <button
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-line bg-brand-white text-brand-brown shadow-sm transition hover:bg-brand-lilac-soft focus:outline-none focus:ring-4 focus:ring-brand-lilac/35 md:hidden"
          onClick={() => setIsMenuOpen((value) => !value)}
          type="button"
        >
          {isMenuOpen ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
        </button>
      </div>
      {isMenuOpen ? (
        <nav
          aria-label="Menú móvil"
          className="border-t border-brand-line bg-brand-warm-white px-5 py-4 shadow-[0_20px_50px_rgba(122,80,71,0.12)] md:hidden"
          id="mobile-menu"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <a
                className="rounded-lg px-3 py-3 text-base font-semibold text-brand-brown-muted transition hover:bg-brand-lilac-soft hover:text-brand-purple"
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
