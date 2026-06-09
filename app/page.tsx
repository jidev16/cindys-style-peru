import Image from "next/image";
import {
  CheckCircle2,
  ClipboardList,
  CreditCard,
  MapPin,
  PackageCheck,
  Truck,
} from "lucide-react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhatsAppButtonFAB from "@/components/WhatsAppButtonFAB";
import { displayWhatsApp, products } from "@/data/products";

const featuredProducts = products.filter((product) => product.featured);

const whatsappAdviceMessage =
  "¡Hola, Cindy’s Style! 💜 Me encantaría recibir asesoría para comprar mis nuevos favoritos.";

const buySteps = [
  {
    icon: ClipboardList,
    title: "Elige tus favoritos",
    text: "¡Enamórate! Revisa el catálogo y escríbenos por WhatsApp con tus elegidos.",
  },
  {
    icon: CheckCircle2,
    title: "Confirmamos stock",
    text: "Te confirmamos al instante si tenemos tus favoritos listos para ti.",
  },
  {
    icon: CreditCard,
    title: "Paga fácil",
    text: "Paga fácil y 100% seguro con Yape, Plin o transferencia bancaria.",
  },
  {
    icon: PackageCheck,
    title: "Recibe tu pedido",
    text: "¡Listo, hermosa! Empacamos tu pedido con mucho amor para que llegue perfecto a tus manos.",
  },
];

const deliveryDetails = [
  "Entregas rápidas y seguras en Lima Metropolitana.",
  "Empaque cuidado para que tu compra llegue linda y protegida.",
  "Atención personalizada por WhatsApp en cada paso.",
];

export default function Home() {
  return (
    <>
      <Header />
      <main
        className="min-h-screen overflow-hidden bg-brand-warm-white text-foreground"
        id="main-content"
      >
        <section className="relative" id="inicio">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,var(--brand-lilac-soft)_0,transparent_34%),linear-gradient(120deg,var(--brand-warm-white)_0%,var(--brand-lilac-panel)_54%,var(--brand-lilac-soft)_100%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:pb-20 lg:pt-16">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-semibold leading-[1.02] tracking-normal text-brand-brown sm:text-6xl lg:text-7xl">
                Cindy’s Style Perú
              </h1>
              <p className="mt-6 max-w-xl text-xl leading-8 text-brand-brown-muted sm:text-2xl sm:leading-9">
                Descubre lo mejor en perfumería, maquillaje y cuidado personal.
                Engríete y resalta tu esencia única todos los días con nuestros
                productos seleccionados.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton message={whatsappAdviceMessage}>
                  Comprar por WhatsApp
                </WhatsAppButton>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-brand-lilac bg-brand-white/80 px-5 py-3 text-sm font-semibold text-brand-purple transition hover:bg-brand-white focus:outline-none focus:ring-4 focus:ring-brand-lilac/35"
                  href="#catalogo"
                >
                  Ver catálogo
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-brand-lilac/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-brand-white/70 bg-brand-white shadow-[0_30px_90px_rgba(122,80,71,0.18)]">
                <Image
                  alt="Perfumes, maquillaje y cuidado personal de Cindy’s Style Perú"
                  className="h-auto w-full object-cover"
                  height={1024}
                  priority
                  src="/images/hero-products.png"
                  width={1536}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-white py-16 sm:py-20" id="destacados">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-3xl font-semibold text-brand-brown sm:text-4xl">
                  Productos destacados
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-brand-brown-muted">
                  Nuestros favoritos del mes. El detalle ideal para engreírte o
                  sorprender a esa persona especial.
                </p>
              </div>
              <a
                className="text-sm font-semibold text-brand-lilac-deep hover:text-brand-purple"
                href="#catalogo"
              >
                Ver todo el catálogo
              </a>
            </div>
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-lilac-panel py-16 sm:py-20" id="catalogo">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-brand-brown sm:text-4xl">
                Catálogo de productos
              </h2>
              <p className="mt-3 text-base leading-7 text-brand-brown-muted">
                Elige tus favoritos de Cindy’s Style Perú y pídelos directo por
                WhatsApp.
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-white py-16 sm:py-20" id="comprar">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-brand-brown sm:text-4xl">
                Cómo comprar
              </h2>
              <p className="mt-3 text-base leading-7 text-brand-brown-muted">
                Comprar en Cindy’s Style Perú es fácil, cercano y pensado para
                que te sientas acompañada.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-4">
              {buySteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <article
                    className="relative rounded-lg border border-brand-line bg-brand-warm-white p-6 text-center"
                    key={step.title}
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-lilac-soft text-brand-purple-soft">
                      <Icon aria-hidden="true" className="h-7 w-7" />
                    </div>
                    <p className="mt-5 text-sm font-bold text-brand-rose">
                      {index + 1}. {step.title}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-brand-brown-muted">
                      {step.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="relative bg-brand-warm-white py-16 sm:py-20"
          id="envios"
        >
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-lilac-soft text-brand-purple-soft">
                <Truck aria-hidden="true" className="h-8 w-8" />
              </div>
              <h2 className="mt-6 text-3xl font-semibold text-brand-brown sm:text-4xl">
                Envíos en Lima
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-brand-brown-muted">
                ¡Llevamos tu cajita de belleza hasta la puerta de tu casa!
                Entregas rápidas y seguras en toda Lima Metropolitana, con
                atención personalizada por WhatsApp en cada paso.
              </p>
              <div className="mt-8 space-y-4">
                {deliveryDetails.map((detail) => (
                  <div
                    className="flex gap-3 text-sm leading-6 text-brand-brown-muted"
                    key={detail}
                  >
                    <MapPin
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 text-brand-rose"
                    />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-brand-line bg-brand-white p-6 shadow-[0_24px_70px_rgba(122,80,71,0.1)]">
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-sm font-semibold text-brand-brown">
                    Cobertura
                  </p>
                  <p className="mt-2 text-sm leading-6 text-brand-brown-muted">
                    Lima Metropolitana
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-brown">
                    Coordinación
                  </p>
                  <p className="mt-2 text-sm leading-6 text-brand-brown-muted">
                    Por WhatsApp
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-brown">
                    Contacto
                  </p>
                  <p className="mt-2 text-sm leading-6 text-brand-brown-muted">
                    {displayWhatsApp}
                  </p>
                </div>
              </div>
              <div className="mt-8 overflow-hidden rounded-lg bg-brand-lilac-soft">
                <Image
                  alt="Detalle de productos de belleza para envíos en Lima"
                  className="h-64 w-full object-cover sm:h-80"
                  height={1024}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src="/images/hero-products.png"
                  style={{ objectPosition: "72% 58%" }}
                  width={1536}
                />
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-brand-line bg-brand-white px-5 py-8 text-center text-sm text-brand-brown-muted">
          Cindy’s Style Perú - Perfumería, maquillaje y cuidado personal en
          Lima.
        </footer>

        <WhatsAppButtonFAB message={whatsappAdviceMessage} />
      </main>
    </>
  );
}
