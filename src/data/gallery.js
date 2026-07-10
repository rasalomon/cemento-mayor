const galleryFiles = [
  "56.png",
];

const galleryContent = {
  "hormigon-obra": {
    title: "Hormigón en obra",
    category: "Hormigón",
    description: "Suministro de hormigón para obras civiles y proyectos en ejecución.",
    alt: "Hormigón aplicado en obra de construcción",
  },
  "piso-industrial": {
    title: "Piso industrial",
    category: "Pisos industriales",
    description: "Ejecución de superficies resistentes para uso industrial y logístico.",
    alt: "Piso industrial de hormigón terminado",
  },
  "concretera-obra": {
    title: "Concretera en obra",
    category: "Concreteras",
    description: "Despacho y descarga de hormigón con equipos preparados para obra.",
    alt: "Camión concretera trabajando en obra",
  },
  "terminacion-hormigon": {
    title: "Terminación de hormigón",
    category: "Terminaciones",
    description: "Detalle de terminaciones y procesos de acabado sobre hormigón.",
    alt: "Terminación profesional de superficie de hormigón",
  },
  "maquinaria-obra": {
    title: "Maquinaria en obra",
    category: "Maquinaria",
    description: "Equipos y herramientas de apoyo para trabajos de hormigón.",
    alt: "Maquinaria utilizada en trabajos de hormigón",
  },
  "obra-hormigon": {
    title: "Proyecto de obra",
    category: "Obras",
    description: "Avance de obra con soluciones de hormigón para distintos proyectos.",
    alt: "Obra en ejecución con soluciones de hormigón",
  },
};

const getContentKey = (fileName) => fileName.replace(/-\d+\.\w+$/, "");

const fallbackContent = {
  title: "Registro de obra",
  category: "Galeria",
  description: "Imagen de referencia de proyecto en ejecución.",
  alt: "Registro fotográfico de obra",
};

const galleryImages = galleryFiles
  .filter((fileName) => typeof fileName === "string" && fileName.trim().length > 0)
  .map((fileName, index) => {
  const key = getContentKey(fileName);
  const content = galleryContent[key] ?? fallbackContent;
  const number = String(index + 1).padStart(2, "0");

  return {
    id: index + 1,
    src: `/images/gallery/${fileName}`,
    title: `${content.title} ${number}`,
    category: content.category,
    description: content.description,
    alt: `${content.alt} ${number}`,
  };
});

export default galleryImages;
