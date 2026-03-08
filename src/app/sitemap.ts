import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/utils";

const routes = ["", "/metodo", "/simulador", "/academy", "/comunidad", "/respaldo", "/aliados", "/sobre-nosotros", "/blog", "/contacto", "/legal"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date(), changeFrequency: "weekly", priority: route === "" ? 1 : 0.7 }));
}
