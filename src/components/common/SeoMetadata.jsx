import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL } from "../../constants";

const DEFAULT_DESCRIPTION =
  "Cemento Mayor ofrece hormigón elaborado, bombeo de hormigón, pisos industriales y soluciones para obras en Uruguay.";

const PAGE_METADATA = {
  "/": {
    description: DEFAULT_DESCRIPTION,
  },
  "/products": {
    description:
      "Conocé nuestros hormigones y morteros con control técnico para pisos, estructuras, rellenos y terminaciones.",
  },
  "/services": {
    description:
      "Servicios de bombeo de hormigón, pisos industriales y soluciones integrales para obras en Uruguay.",
  },
  "/gallery": {
    description:
      "Galería de proyectos, obras y soluciones en hormigón ejecutadas por Cemento Mayor.",
  },
  "/about": {
    description:
      "Conocé a Cemento Mayor, nuestro equipo, experiencia y compromiso con la calidad en cada obra.",
  },
  "/contact": {
    description:
      "Contactá a Cemento Mayor para solicitar asesoramiento y una cotización para tu obra.",
  },
};

function setMetaContent(selector, content) {
  const element = document.head.querySelector(selector);

  if (element) {
    element.setAttribute("content", content);
  }
}

function SeoMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = PAGE_METADATA[pathname] || {
      description: DEFAULT_DESCRIPTION,
    };
    const canonicalUrl = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;

    setMetaContent('meta[name="description"]', metadata.description);
    setMetaContent('meta[property="og:description"]', metadata.description);
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[name="twitter:description"]', metadata.description);

    document
      .head
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", canonicalUrl);
  }, [pathname]);

  return null;
}

export default SeoMetadata;
