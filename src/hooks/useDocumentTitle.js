import { useEffect } from "react";
import { APP_NAME } from "../constants";

function useDocumentTitle(pageTitle) {
  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} | ${APP_NAME}` : APP_NAME;
  }, [pageTitle]);
}

export default useDocumentTitle;
