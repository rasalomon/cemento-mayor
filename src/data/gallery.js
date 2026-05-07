const galleryFiles = [
  "hormigon-obra-01.jpg",
  "piso-industrial-02.jpg",
  "concretera-obra-03.jpg",
  "terminacion-hormigon-04.jpg",
  "maquinaria-obra-05.jpg",
  "obra-hormigon-06.jpg",
  "hormigon-obra-07.jpg",
  "piso-industrial-08.jpg",
  "concretera-obra-09.jpg",
  "terminacion-hormigon-10.jpg",
  "maquinaria-obra-11.jpg",
  "obra-hormigon-12.jpg",
  "hormigon-obra-13.jpg",
  "piso-industrial-14.jpg",
  "concretera-obra-15.jpg",
  "terminacion-hormigon-16.jpg",
  "maquinaria-obra-17.jpg",
  "obra-hormigon-18.jpg",
  "hormigon-obra-19.jpg",
  "piso-industrial-20.jpg",
  "concretera-obra-21.jpg",
  "terminacion-hormigon-22.png",
  "56.png",
  "obra-hormigon-24.jpg",
  "hormigon-obra-25.jpg",
  "piso-industrial-26.jpg",
  "concretera-obra-27.jpg",
  "terminacion-hormigon-28.jpg",
  "maquinaria-obra-29.jpg",
  "obra-hormigon-30.jpg",
  "hormigon-obra-31.jpg",
  "piso-industrial-32.jpg",
  "concretera-obra-33.jpg",
  "terminacion-hormigon-34.jpg",
  "maquinaria-obra-35.jpg",
  "obra-hormigon-36.jpg",
  "hormigon-obra-37.jpg",
  "piso-industrial-38.jpg",
  "concretera-obra-39.jpg",
  "terminacion-hormigon-40.jpg",
  "maquinaria-obra-41.jpg",
  "obra-hormigon-42.jpg",
  "hormigon-obra-43.jpg",
  "piso-industrial-44.jpg",
  "concretera-obra-45.jpg",
  "terminacion-hormigon-46.jpg",
  "maquinaria-obra-47.jpg",
  "obra-hormigon-48.jpg",
  "hormigon-obra-49.jpg",
  "piso-industrial-50.png",
  "concretera-obra-51.png",
  "terminacion-hormigon-52.jpg",
  "maquinaria-obra-53.jpg",
];

const galleryContent = {
  "hormigon-obra": {
    title: "Hormigon en obra",
    category: "Hormigon",
    description: "Suministro de hormigon para obras civiles y proyectos en ejecucion.",
    alt: "Hormigon aplicado en obra de construccion",
  },
  "piso-industrial": {
    title: "Piso industrial",
    category: "Pisos industriales",
    description: "Ejecucion de superficies resistentes para uso industrial y logistico.",
    alt: "Piso industrial de hormigon terminado",
  },
  "concretera-obra": {
    title: "Concretera en obra",
    category: "Concreteras",
    description: "Despacho y descarga de hormigon con equipos preparados para obra.",
    alt: "Camion concretera trabajando en obra",
  },
  "terminacion-hormigon": {
    title: "Terminacion de hormigon",
    category: "Terminaciones",
    description: "Detalle de terminaciones y procesos de acabado sobre hormigon.",
    alt: "Terminacion profesional de superficie de hormigon",
  },
  "maquinaria-obra": {
    title: "Maquinaria en obra",
    category: "Maquinaria",
    description: "Equipos y herramientas de apoyo para trabajos de hormigon.",
    alt: "Maquinaria utilizada en trabajos de hormigon",
  },
  "obra-hormigon": {
    title: "Proyecto de obra",
    category: "Obras",
    description: "Avance de obra con soluciones de hormigon para distintos proyectos.",
    alt: "Obra en ejecucion con soluciones de hormigon",
  },
};

const getContentKey = (fileName) => fileName.replace(/-\d+\.\w+$/, "");

const fallbackContent = {
  title: "Registro de obra",
  category: "Galeria",
  description: "Imagen de referencia de proyecto en ejecucion.",
  alt: "Registro fotografico de obra",
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
