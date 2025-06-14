// Tipos para las sesiones y sus elementos
export interface Imagen {
  src: string;
  alt: string;
}

export interface Sesion {
  id: string;
  titulo: string;
  fotografia: string;
  estilismo: string;
  modelo: string;
  mua: string;
  descripcion: string;
  imagenes: Imagen[];
}

// Datos de las sesiones
export const SESIONES: Sesion[] = [
  {
    id: "Portada",
    titulo: "PORTADA",
    fotografia: "Paula Diaz",
    estilismo: "Katia Martinez, Laura Exposito, Carmen Quesada",
    modelo: "Melanie Roldan",
    mua: "Raquel Aranjuez",
    descripcion:
      "Jersey: Pinko\nBikini: Woman secret\nBrazaletes: Luxenter\nCollar: Bershka\nCollar largo: Pull&bear",

    imagenes: [
      {
        src: "/Portada/KATIA, LAURA Y CARMEN 1.webp",
        alt: "Portada 1",
      },
      {
        src: "/Portada/KATIA, LAURA Y CARMEN 2.webp",
        alt: "Portada 2",
      },
      {
        src: "/Portada/KATIA, LAURA Y CARMEN 3.webp",
        alt: "Portada 3",
      },
    ],
  },
  {
    id: "Masculino",
    titulo: "MASCULINO",
    fotografia: "Paula Diaz",
    estilismo: "Katia Martinez, Laura Exposito, Carmen Quesada",
    modelo: "Javier Bragado",
    mua: "Raquel Aranjuez",
    descripcion:
      "Chaqueta negra: belstaff\nChubasquero: Ralph Lauren \nBotas: Camper",

    imagenes: [
      {
        src: "/Masculino/EmptyName 1.webp",
        alt: "Portada 1",
      },
      {
        src: "/Masculino/EmptyName 2.webp",
        alt: "Portada 2",
      },
      {
        src: "/Masculino/EmptyName 3.webp",
        alt: "Portada 3",
      },
    ],
  },
  {
    id: "Decadas",
    titulo: "DÉCADAS",
    fotografia: "Paula Diaz",
    estilismo: "Katia Martinez, Laura Exposito, Jessica Figueroa",
    modelo: "Carmen Rubio",
    mua: "David Pelaez",
    descripcion: "Vestido: Zara\nAccesorios vintage\nZapatos Bershka ",

    imagenes: [
      {
        src: "/Decadas/KATYA, LAURA Y JESSICA.webp",
        alt: "Decadas",
      },
      {
        src: "/Decadas/KATYA, LAURA Y JESSICA 1.webp",
        alt: "Decadas 1",
      },
      {
        src: "/Decadas/KATYA, LAURA Y JESSICA 2.webp",
        alt: "Decadas 2",
      },
      {
        src: "/Decadas/KATYA, LAURA Y JESSICA 3.webp",
        alt: "Decadas 3",
      },
    ],
  },
  {
    id: "Novia",
    titulo: "NOVIA",
    fotografia: "Paula Diaz",
    estilismo: "Katia Martinez, Laura Exposito, Carmen Quesada",
    modelo: "Tania Bermudez",
    mua: "Saray Sojo",
    descripcion:
      "Vestido: Rendondo Brand\nZapatos: Pretty Ballerinas\nAccesorios: Encinar",

    imagenes: [
      {
        src: "/Novia/CARMEN, KATIA Y LAURA.webp",
        alt: "Novia",
      },
      {
        src: "/Novia/CARMEN, KATIA Y LAURA 1.webp",
        alt: "Novia 1",
      },
      {
        src: "/Novia/CARMEN, KATIA Y LAURA 2.webp",
        alt: "Novia 2",
      },
      {
        src: "/Novia/CARMEN, KATIA Y LAURA 3.webp",
        alt: "Novia 3",
      },
      {
        src: "/Novia/CARMEN, KATIA Y LAURA 4.webp",
        alt: "Novia 4",
      },
    ],
  },
  {
    id: "Ecommerce",
    titulo: "E-COMMERCE",
    fotografia: "Paula Diaz",
    estilismo: "Katia Martinez, Laura Exposito, Carmen Quesada",
    modelo: "Irene Victor",
    mua: "David Pelaez",
    descripcion: "Falda: Mango\nJersey: Maje\nBotas: Vagabond",

    imagenes: [
      {
        src: "/Ecommerce/CARMEN, KATYA Y LAURA 1.webp",
        alt: "Ecommerce 1",
      },
      {
        src: "/Ecommerce/CARMEN, KATYA Y LAURA 2.webp",
        alt: "Ecommerce 2",
      },
      {
        src: "/Ecommerce/CARMEN, KATYA Y LAURA 3.webp",
        alt: "Ecommerce 3",
      },
      {
        src: "/Ecommerce/CARMEN, KATYA Y LAURA 4.webp",
        alt: "Ecommerce 4",
      },
      {
        src: "/Ecommerce/CARMEN, KATYA Y LAURA 5.webp",
        alt: "Ecommerce 5",
      },
      {
        src: "/Ecommerce/CARMEN, KATYA Y LAURA 6.webp",
        alt: "Ecommerce 6",
      },
    ],
  },
  {
    id: "Basicos",
    titulo: "BÁSICOS",
    fotografia: "Flavio Solato",
    estilismo: "Katia Martinez, Laura Exposito, Jessica Figueroa",
    modelo: "Maria Bayon",
    mua: "Saray Sojo",
    descripcion: "",

    imagenes: [
      {
        src: "/Basicos/Basicos 1.webp",
        alt: "Basicos 1",
      },
      {
        src: "/Basicos/Basicos 2.webp",
        alt: "Basicos 2",
      },
    ],
  },
  {
    id: "Produccion_Moda",
    titulo: "PRODUCCIÓN DE MODA",
    fotografia: "Flavio Solato",
    estilismo: "Katia Martinez, Laura Exposito, Carmen Quesada",
    modelo: "Luisa Herrero",
    mua: "Alba Medina",
    descripcion:
      "Falda: alma en pena\nTop: Sonia RyKiel\nPendientes Bimba y Lola\nAccesorios: Tous",

    imagenes: [
      {
        src: "/Produccion/Produccion 1.webp",
        alt: "Produccion 1",
      },
      {
        src: "/Produccion/Produccion 2.webp",
        alt: "Produccion 2",
      },
    ],
  },
  {
    id: "Red_Carpet",
    titulo: "RED CARPET",
    fotografia: "Paula Diaz",
    estilismo: "Katia Martinez, Laura Exposito, Carmen Quesada",
    modelo: "Irinia Carchenilla",
    mua: "Talia Cuesta",
    descripcion: "Vestido: Ernesto Naranjo\nZapatos: Aquazzura",

    imagenes: [
      {
        src: "/Red_Carpet/red_carpet 1.webp",
        alt: "Red_Carpet 1",
      },
      {
        src: "/Red_Carpet/red_carpet 2.webp",
        alt: "Red_Carpet 2",
      },
      {
        src: "/Red_Carpet/red_carpet 3.webp",
        alt: "Red_Carpet 3",
      },
      {
        src: "/Red_Carpet/red_carpet 4.webp",
        alt: "Red_Carpet 4",
      },
      {
        src: "/Red_Carpet/red_carpet 5.webp",
        alt: "Red_Carpet 5",
      },
      {
        src: "/Red_Carpet/red_carpet 6.webp",
        alt: "Red_Carpet 6",
      },
    ],
  },
  {
    id: "Bread_Element",
    titulo: "BREAD ELEMENT",
    fotografia: "Paula Diaz",
    estilismo: "Katia Martinez, Laura Exposito, Carmen Quesada",
    modelo: "Malia Struve",
    mua: "Raquel Aragues",
    descripcion:
      "Jersey: Nude Project\nShort: Nude Project\nGafas: Pull&bear\nMedias: Calzedonia",

    imagenes: [
      {
        src: "/Bread/bread_element 1.webp",
        alt: "Bread_Element 1",
      },
      {
        src: "/Bread/bread_element 2.webp",
        alt: "Bread_Element 2",
      },
      {
        src: "/Bread/bread_element 3.webp",
        alt: "Bread_Element 3",
      },
      {
        src: "/Bread/bread_element 4.webp",
        alt: "Bread_Element 4",
      },
      {
        src: "/Bread/bread_element 5.webp",
        alt: "Bread_Element 5",
      },
      {
        src: "/Bread/bread_element 6.webp",
        alt: "Bread_Element 6",
      },
    ],
  },
];

// Función auxiliar para obtener todas las imágenes de todas las sesiones
export function getAllImages(): Imagen[] {
  return SESIONES.flatMap((sesion) => sesion.imagenes);
}

// Función para obtener imágenes aleatorias para mosaicos o galerías
export function getRandomImages(count: number): Imagen[] {
  const allImages = getAllImages();

  // Mezclar el array usando el algoritmo Fisher-Yates
  for (let i = allImages.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allImages[i], allImages[j]] = [allImages[j], allImages[i]];
  }

  // Devolver el número solicitado de imágenes
  return allImages.slice(0, count);
}
