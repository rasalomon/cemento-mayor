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
          title="Hormigones y morteros para cada etapa de obra"
          subtitle="Soluciones elaboradas con control técnico para pisos, estructuras, rellenos y terminaciones."
          centered
        />
        <div className="cards-grid cards-grid--three">
          {products.map((product) => (
            <ProductsType key={product.id} {...product} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProductsPage;
