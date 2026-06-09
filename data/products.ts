export type ProductCategory =
  | "Perfumes para mujer"
  | "Perfumes para hombre"
  | "Maquillaje"
  | "Cuidado corporal"
  | "Jabones y cremas"
  | "Kits";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  price: string;
  image: string;
  whatsappMessage: string;
  featured?: boolean;
};

export const whatsappNumber = "51924776188";
export const displayWhatsApp = "+51 924 776 188";

const placeholders: Record<ProductCategory, string> = {
  "Perfumes para mujer": "/images/placeholders/perfumes-mujer.svg",
  "Perfumes para hombre": "/images/placeholders/perfumes-hombre.svg",
  Maquillaje: "/images/placeholders/maquillaje.svg",
  "Cuidado corporal": "/images/placeholders/cuidado-corporal.svg",
  "Jabones y cremas": "/images/placeholders/jabones-cremas.svg",
  Kits: "/images/placeholders/kits.svg",
};

const orderMessage = (name: string, price: string) =>
  `¡Hola, Cindy’s Style! 💜 Me enamoré de este producto y quiero pedir: ${name} (${price}).`;

export const products: Product[] = [
  {
    id: "luna-radiante",
    name: "Luna Radiante",
    category: "Perfumes para mujer",
    description:
      "Un aroma floral e inolvidable que resalta tu esencia. Perfecto para dejar huella a donde vayas.",
    price: "S/ 70.00",
    image: placeholders["Perfumes para mujer"],
    whatsappMessage: orderMessage("Luna Radiante", "S/ 70.00"),
    featured: true,
  },
  {
    id: "humor-envolve-mujer",
    name: "Humor Envolve",
    category: "Perfumes para mujer",
    description:
      "Una fragancia alegre y femenina con flores suaves y un fondo envolvente para acompañar tus mejores planes.",
    price: "S/ 55.00",
    image: placeholders["Perfumes para mujer"],
    whatsappMessage: orderMessage("Humor Envolve", "S/ 55.00"),
    featured: true,
  },
  {
    id: "kriska-drama",
    name: "Kriska Drama",
    category: "Perfumes para mujer",
    description:
      "Dulce, intensa y coqueta, con notas cálidas que le dan un toque elegante a tu rutina.",
    price: "S/ 69.00",
    image: placeholders["Perfumes para mujer"],
    whatsappMessage: orderMessage("Kriska Drama", "S/ 69.00"),
    featured: true,
  },
  {
    id: "humor-proprio-75-ml",
    name: "Humor Propio 75 ml",
    category: "Perfumes para mujer",
    description:
      "Un perfume frutal y amaderado para sentirte segura, fresca y lista para brillar.",
    price: "S/ 50.00",
    image: placeholders["Perfumes para mujer"],
    whatsappMessage: orderMessage("Humor Propio 75 ml", "S/ 50.00"),
    featured: true,
  },
  {
    id: "far-away-avon-50-ml",
    name: "Far Away Avon 50 ml",
    category: "Perfumes para mujer",
    description:
      "Un clásico femenino de salida cálida y elegante, ideal para llevar un toque sofisticado contigo.",
    price: "S/ 30.00",
    image: placeholders["Perfumes para mujer"],
    whatsappMessage: orderMessage("Far Away Avon 50 ml", "S/ 30.00"),
  },
  {
    id: "lov-u-date-night",
    name: "Lov|U Date Night",
    category: "Perfumes para mujer",
    description:
      "Dulzura, sensualidad y calidez en una fragancia pensada para noches especiales.",
    price: "S/ 35.00",
    image: placeholders["Perfumes para mujer"],
    whatsappMessage: orderMessage("Lov|U Date Night", "S/ 35.00"),
  },
  {
    id: "kaiak-oceano-masculino-100-ml",
    name: "Kaiak Océano Masculino 100 ml",
    category: "Perfumes para hombre",
    description:
      "Una fragancia fresca y marina para quienes disfrutan una sensación limpia, ligera y segura.",
    price: "S/ 55.00",
    image: placeholders["Perfumes para hombre"],
    whatsappMessage: orderMessage("Kaiak Océano Masculino 100 ml", "S/ 55.00"),
  },
  {
    id: "kaiak-clasico-natura-100-ml",
    name: "Kaiak Clásico Natura 100 ml",
    category: "Perfumes para hombre",
    description:
      "Un aroma masculino fresco y aromático, perfecto para el día a día y planes casuales.",
    price: "S/ 55.00",
    image: placeholders["Perfumes para hombre"],
    whatsappMessage: orderMessage("Kaiak Clásico Natura 100 ml", "S/ 55.00"),
  },
  {
    id: "humor-envolve-hombre",
    name: "Humor Envolve",
    category: "Perfumes para hombre",
    description:
      "Una fragancia moderna y cercana, ideal para regalar o sumar a una rutina con personalidad.",
    price: "S/ 55.00",
    image: placeholders["Perfumes para hombre"],
    whatsappMessage: orderMessage("Humor Envolve", "S/ 55.00"),
  },
  {
    id: "labial-mate-rouge-4m",
    name: "Labial Mate Rouge 4M",
    category: "Maquillaje",
    description:
      "Color intenso de acabado mate, textura cómoda y larga duración para unos labios protagonistas.",
    price: "S/ 30.00",
    image: placeholders.Maquillaje,
    whatsappMessage: orderMessage("Labial Mate Rouge 4M", "S/ 30.00"),
  },
  {
    id: "paleta-facial-ultra-color-avon",
    name: "Paleta Facial en Polvo 3 en 1 Ultra Color Avon 3.8 g",
    category: "Maquillaje",
    description:
      "Rubor, bronceado e iluminador en una sola paleta para darle vida y luz a tu maquillaje.",
    price: "S/ 30.00",
    image: placeholders.Maquillaje,
    whatsappMessage: orderMessage(
      "Paleta Facial en Polvo 3 en 1 Ultra Color Avon 3.8 g",
      "S/ 30.00",
    ),
  },
  {
    id: "mascara-pestanas-ultra-volume-waterproof",
    name: "Máscara de Pestañas Ultra Volume Waterproof",
    category: "Maquillaje",
    description:
      "Pestañas con más presencia y un acabado resistente para acompañarte en tus días más movidos.",
    price: "S/ 20.00",
    image: placeholders.Maquillaje,
    whatsappMessage: orderMessage(
      "Máscara de Pestañas Ultra Volume Waterproof",
      "S/ 20.00",
    ),
  },
  {
    id: "fruity-gloss-color-trend-avon",
    name: "Fruity Gloss Brillo Labial Color Trend Avon",
    category: "Maquillaje",
    description:
      "Un brillo jugoso y coqueto para labios frescos, luminosos y con un toque de color.",
    price: "S/ 10.00",
    image: placeholders.Maquillaje,
    whatsappMessage: orderMessage(
      "Fruity Gloss Brillo Labial Color Trend Avon",
      "S/ 10.00",
    ),
  },
  {
    id: "delineador-liquido-ojos-negro-color-trend-avon",
    name: "Delineador Líquido Ojos Negro Color Trend Avon",
    category: "Maquillaje",
    description:
      "Trazo negro definido para elevar tu mirada con un acabado limpio y femenino.",
    price: "S/ 9.00",
    image: placeholders.Maquillaje,
    whatsappMessage: orderMessage(
      "Delineador Líquido Ojos Negro Color Trend Avon",
      "S/ 9.00",
    ),
  },
  {
    id: "delineador-ojos-glimmerstick-diamonds",
    name: "Delineador de Ojos Glimmerstick Diamonds Avon True Colour",
    category: "Maquillaje",
    description:
      "Color con brillo delicado para una mirada especial, fácil de llevar de día o de noche.",
    price: "S/ 13.00",
    image: placeholders.Maquillaje,
    whatsappMessage: orderMessage(
      "Delineador de Ojos Glimmerstick Diamonds Avon True Colour",
      "S/ 13.00",
    ),
  },
  {
    id: "brow-sculpting-lapiz-delineador-cejas",
    name: "Brow Sculpting Lápiz Delineador para Cejas",
    category: "Maquillaje",
    description:
      "Define tus cejas con precisión y un acabado natural para enmarcar tu rostro con estilo.",
    price: "S/ 36.00",
    image: placeholders.Maquillaje,
    whatsappMessage: orderMessage(
      "Brow Sculpting Lápiz Delineador para Cejas",
      "S/ 36.00",
    ),
  },
  {
    id: "humor-desodorante-corporal-spray-liberta-100-ml",
    name: "Humor Desodorante Corporal en Spray Liberta 100 ml",
    category: "Cuidado corporal",
    description:
      "Un spray práctico con aroma alegre y envolvente para refrescar tu día con actitud.",
    price: "S/ 25.00",
    image: placeholders["Cuidado corporal"],
    whatsappMessage: orderMessage(
      "Humor Desodorante Corporal en Spray Liberta 100 ml",
      "S/ 25.00",
    ),
  },
  {
    id: "body-splash-tododia-ciruela-flor-cerezo",
    name: "Body Splash Tododia Ciruela y Flor de Cerezo",
    category: "Cuidado corporal",
    description:
      "Una bruma dulce y refrescante que perfuma tu piel con un toque delicado y femenino.",
    price: "S/ 30.00",
    image: placeholders["Cuidado corporal"],
    whatsappMessage: orderMessage(
      "Body Splash Tododia Ciruela y Flor de Cerezo",
      "S/ 30.00",
    ),
  },
  {
    id: "mama-bebe-aceite-masajes-bebe",
    name: "Mamá y Bebé Aceite para Masajes en Bebé",
    category: "Cuidado corporal",
    description:
      "Un aceite suave para momentos de cuidado y conexión, con una sensación delicada al aplicar.",
    price: "S/ 39.00",
    image: placeholders["Cuidado corporal"],
    whatsappMessage: orderMessage(
      "Mamá y Bebé Aceite para Masajes en Bebé",
      "S/ 39.00",
    ),
  },
  {
    id: "gel-intimo-refrescante-avon-care-intimate",
    name: "Gel Íntimo Refrescante Avon Care Intimate",
    category: "Cuidado corporal",
    description:
      "Una opción de cuidado personal con sensación fresca y delicada para tu rutina diaria.",
    price: "S/ 16.00",
    image: placeholders["Cuidado corporal"],
    whatsappMessage: orderMessage(
      "Gel Íntimo Refrescante Avon Care Intimate",
      "S/ 16.00",
    ),
  },
  {
    id: "aguas-colonia-jaboticaba-jabon-liquido",
    name: "Aguas Colonia Jabotícaba + Jabón Líquido",
    category: "Jabones y cremas",
    description:
      "Un dúo perfumado con notas frutales para convertir tu baño en un momento especial.",
    price: "S/ 55.00",
    image: placeholders["Jabones y cremas"],
    whatsappMessage: orderMessage(
      "Aguas Colonia Jabotícaba + Jabón Líquido",
      "S/ 55.00",
    ),
  },
  {
    id: "jabon-liquido-aguas-violeta",
    name: "Jabón Líquido Aguas Violeta",
    category: "Jabones y cremas",
    description:
      "Espuma suave con aroma a violeta para una ducha más rica, delicada y femenina.",
    price: "S/ 20.00",
    image: placeholders["Jabones y cremas"],
    whatsappMessage: orderMessage("Jabón Líquido Aguas Violeta", "S/ 20.00"),
  },
  {
    id: "crema-mano-ekos",
    name: "Crema de Mano Ekos",
    category: "Jabones y cremas",
    description:
      "Textura cremosa y práctica para llevar tus manos suaves y perfumadas durante el día.",
    price: "S/ 8.50",
    image: placeholders["Jabones y cremas"],
    whatsappMessage: orderMessage("Crema de Mano Ekos", "S/ 8.50"),
  },
  {
    id: "jabon-erva-doce-natura",
    name: "Jabón Erva Doce Natura",
    category: "Jabones y cremas",
    description:
      "Un jabón de aroma fresco y reconfortante para una sensación limpia y agradable.",
    price: "S/ 20.00",
    image: placeholders["Jabones y cremas"],
    whatsappMessage: orderMessage("Jabón Erva Doce Natura", "S/ 20.00"),
  },
  {
    id: "kit-maracuya",
    name: "Kit Maracuyá",
    category: "Kits",
    description:
      "Un kit tropical y delicioso para consentirte con aroma, hidratación y cuidado diario.",
    price: "S/ 95.00",
    image: placeholders.Kits,
    whatsappMessage: orderMessage("Kit Maracuyá", "S/ 95.00"),
  },
  {
    id: "kit-maracuya-2",
    name: "Kit de Maracuyá #2",
    category: "Kits",
    description:
      "Una combinación práctica de cuidado corporal y jabón líquido con el encanto del maracuyá.",
    price: "S/ 68.00",
    image: placeholders.Kits,
    whatsappMessage: orderMessage("Kit de Maracuyá #2", "S/ 68.00"),
  },
  {
    id: "kit-castana",
    name: "Kit Castaña",
    category: "Kits",
    description:
      "Cremas de aroma cálido y acogedor para regalar suavidad o darte un gusto especial.",
    price: "S/ 50.00",
    image: placeholders.Kits,
    whatsappMessage: orderMessage("Kit Castaña", "S/ 50.00"),
  },
  {
    id: "kit-marine",
    name: "Kit Marine",
    category: "Kits",
    description:
      "Un set masculino de sensación fresca y marina, perfecto para un regalo útil y con estilo.",
    price: "S/ 60.00",
    image: placeholders.Kits,
    whatsappMessage: orderMessage("Kit Marine", "S/ 60.00"),
  },
];

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
