import type { MetadataRoute } from "next";

const siteUrl = "https://www.cindystyleperu.com";

const routes = ["/", "/#inicio", "/#catalogo", "/#como-comprar", "/#envios"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
