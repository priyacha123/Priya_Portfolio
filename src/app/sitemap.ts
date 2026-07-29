import { MetadataRoute } from "next";
import { projects } from "@/content/projects";

// Same domain as layout.tsx — update both together when you deploy.
const SITE_URL = "https://priyakumari.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/projects",
    "/experience",
    "/skills",
    "/contact",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}