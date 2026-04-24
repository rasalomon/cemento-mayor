import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import useDocumentTitle from "../hooks/useDocumentTitle";

function NotFoundPage() {
  useDocumentTitle("Pagina no encontrada");

  return (
    <section className="section-block">
      <Container className="not-found">
        <h1>404</h1>
        <p>La pagina solicitada no existe.</p>
        <Link to="/" className="cta-button cta-button--primary">
          Volver al inicio
        </Link>
      </Container>
    </section>
  );
}

export default NotFoundPage;
