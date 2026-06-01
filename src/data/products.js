const products = [
    {
        id: "h-con-fibra",
        nombre: "Hormigón con fibra",
        title: "Hormigón con fibra",
        categoria: "Hormigones para pisos",
        description:
            "Hormigón reforzado con fibras para mejorar el control de fisuración y aumentar la durabilidad en pisos, plateas y superficies de alto tránsito.",
        usos: ["Pisos industriales", "Plateas", "Playas de maniobra", "Estacionamientos"],
        beneficios: ["Menor fisuración por retracción", "Mayor vida útil", "Mejor desempeño en alto tránsito"],
        etiqueta: "Alto desempeño",
        imagen: "/images/products/h-con-fibra.jpg",
    },
    {
        id: "h-estructural",
        nombre: "Hormigón estructural",
        title: "Hormigón estructural",
        categoria: "Hormigones estructurales",
        description:
            "Hormigón diseñado para elementos que requieren resistencia mecánica, estabilidad y cumplimiento técnico en obras civiles, comerciales e industriales.",
        usos: ["Fundaciones", "Columnas y vigas", "Losas", "Estructuras de obra civil"],
        beneficios: ["Resistencias específicas por proyecto", "Control de calidad", "Consistencia en obra"],
        etiqueta: "Uso estructural",
        imagen: "/images/products/h-estructural.jpg",
    },
    {
        id: "h-limpieza",
        nombre: "Hormigón de limpieza",
        title: "Hormigón de limpieza",
        categoria: "Preparación de obra",
        description:
            "Hormigón utilizado como base de nivelación y preparación del terreno antes de ejecutar fundaciones, plateas o estructuras principales.",
        usos: ["Bases bajo fundaciones", "Nivelación de terreno", "Separación del suelo natural", "Preparación de plateas"],
        beneficios: ["Superficie limpia de trabajo", "Mejor replanteo", "Reduce contaminación de armaduras"],
        etiqueta: "Base técnica",
        imagen: "/images/products/h-limpieza.jpg",
    },
    {
        id: "mortero-autonivelante",
        nombre: "Mortero autonivelante",
        title: "Mortero autonivelante",
        categoria: "Morteros y pisos",
        description:
            "Mortero fluido para lograr superficies parejas, lisas y listas para terminaciones de alta calidad en obras nuevas o remodelaciones.",
        usos: ["Nivelación interior", "Preparación para revestimientos", "Pisos comerciales", "Corrección de desniveles"],
        beneficios: ["Terminación uniforme", "Rápida aplicación", "Excelente planimetría"],
        etiqueta: "Terminación fina",
        imagen: "/images/products/mortero-autonivelante.jpg",
    },
    {
        id: "rdc",
        nombre: "RDC",
        title: "RDC",
        categoria: "Rellenos técnicos",
        description:
            "Relleno de densidad controlada ideal para zanjas, nivelaciones y trabajos donde se requiere estabilidad sin compactación tradicional.",
        usos: ["Relleno de zanjas", "Bases de pavimentos", "Nivelaciones técnicas", "Rellenos de difícil acceso"],
        beneficios: ["No requiere compactación mecánica", "Reduce tiempos de obra", "Densidad controlada"],
        etiqueta: "Eficiencia en obra",
        imagen: "/images/products/rdc.jpg",
    },
    {
        id: "h-resistencia-edad-temprana",
        nombre: "Hormigón de resistencia a edad temprana",
        title: "Hormigón de resistencia a edad temprana",
        categoria: "Hormigones especiales",
        description:
            "Hormigón formulado para alcanzar resistencia rápidamente, recomendado para obras con tiempos ajustados o habilitación temprana.",
        usos: ["Reparaciones urgentes", "Pavimentos", "Losas con habilitación rápida", "Obras con plazos críticos"],
        beneficios: ["Habilitación temprana", "Menor tiempo de espera", "Productividad en cronogramas exigentes"],
        etiqueta: "Rápida habilitación",
        imagen: "/images/products/h-resistencia-temprana.jpg",
    },
    {
        id: "h-autocompactante",
        nombre: "Hormigón autocompactante",
        title: "Hormigón autocompactante",
        categoria: "Hormigones especiales",
        description:
            "Hormigón de alta fluidez que se acomoda sin vibrado intenso, ideal para estructuras con mucha armadura o moldes complejos.",
        usos: ["Elementos densamente armados", "Moldes complejos", "Muros y columnas", "Piezas de terminación cuidada"],
        beneficios: ["Excelente llenado", "Menor intervención en obra", "Terminación homogénea"],
        etiqueta: "Alta fluidez",
        imagen: "/images/products/h-autocompactante.jpg",
    },
    {
        id: "mortero-1-4",
        nombre: "Mortero 1:4",
        title: "Mortero 1:4",
        categoria: "Morteros tradicionales",
        description:
            "Mezcla de mortero tradicional para albañilería, revoques, nivelaciones y trabajos generales de obra con dosificación controlada.",
        usos: ["Mampostería", "Revoques", "Carpetas y nivelaciones", "Trabajos generales de obra"],
        beneficios: ["Dosificación pareja", "Entrega lista para usar", "Mejor ritmo de ejecución"],
        etiqueta: "Uso general",
        imagen: "/images/products/mortero-1-4.jpg",
    },
    {
        id: "hormigones-especiales",
        nombre: "Hormigones especiales",
        title: "Hormigones especiales",
        categoria: "Soluciones a medida",
        description:
            "Desarrollos personalizados de hormigón según resistencia, asentamiento, exposición, bombeabilidad y requerimientos técnicos del proyecto.",
        usos: ["Obras industriales", "Requerimientos no estándar", "Pisos técnicos", "Proyectos con especificación particular"],
        beneficios: ["Asesoramiento técnico", "Dosificación a medida", "Adaptación a condiciones de obra"],
        etiqueta: "A medida",
        imagen: "/images/products/hormigones-especiales.jpg",
    },
];

export default products;
