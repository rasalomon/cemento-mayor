import { useEffect } from "react";
import { APP_NAME } from "../constants";

function useDocumentTitle(pageTitle) {
  useEffect(() => {
    const title =
      pageTitle === "Inicio"
        ? `${APP_NAME} | Hormigón elaborado y servicios para obras`
        : pageTitle
          ? `${pageTitle} | ${APP_NAME}`
          : APP_NAME;

    document.title = title;
    document.head
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", title);
    document.head
      .querySelector('meta[name="twitter:title"]')
      ?.setAttribute("content", title);
  }, [pageTitle]);
}

export default useDocumentTitle;
