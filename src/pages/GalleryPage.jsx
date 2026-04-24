import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import GalleryGrid from "../components/gallery/GalleryGrid";
import galleryItems from "../data/gallery";
import useDocumentTitle from "../hooks/useDocumentTitle";

function GalleryPage() {
  useDocumentTitle("Galeria");

  return (
    <section className="section-block gallery-page">
      <Container>
        <SectionTitle
          eyebrow="Galeria"
          title="Proyectos y soluciones ejecutadas"
          subtitle="Vista general de trabajos representativos de Cemento Mayor."
          centered
        />
        <GalleryGrid items={galleryItems} />
      </Container>
    </section>
  );
}

export default GalleryPage;
