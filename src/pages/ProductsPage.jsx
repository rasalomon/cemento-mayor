import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import products from "../data/products.js";
import useDocumentTitle from "../hooks/useDocumentTitle";
import ProductsType from "../components/products/ProductsType.jsx";

function ProductsPage() {
    useDocumentTitle("Productos");

  return (
    <section className="section-block product-page">
      <Container>
        <SectionTitle
          eyebrow="Productos"
          title="Cobertura integral para obras de hormigon y pisos"
          subtitle="Selecciona el servicio que mejor se adapte a tu proyecto."
          centered
        />
        <div className="cards-grid cards-grid--three">
          {products.map((service) => (
              <ProductsType key={service.id} title={service.title} description={service.description} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProductsPage;
