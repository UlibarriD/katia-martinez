"use client";

import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MasonryGrid } from "@/components/ui/masonry-grid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SESIONES } from "@/lib/constants";
import { Loader } from "@/components/ui/loader";
import { useEffect, useState } from "react";

// Función para generar ratios consistentes basados en el índice
function getConsistentRatio(index: number): number {
  const ratios = [3 / 4, 1, 2 / 3, 4 / 5, 2 / 3, 5 / 7];
  return ratios[index % ratios.length];
}

// Crear un array con TODAS las imágenes de todas las sesiones para el bento grid
// Note: lo movemos dentro del componente para asegurar que el cliente y servidor rendericen igual

export default function Home() {
  // Crear el array de imágenes dentro del componente para asegurar consistencia entre cliente y servidor
  const allImages = SESIONES.flatMap((sesion, sesionIndex) =>
    sesion.imagenes.map((imagen, index) => ({
      id: `${sesion.id}-${index}`,
      src: imagen.src,
      alt: imagen.alt,
      ratio: getConsistentRatio(sesionIndex * 10 + index), // Usar función determinista en lugar de Math.random()
      sessionId: sesion.id, // Mantiene la referencia a qué sesión pertenece cada imagen
    }))
  );

  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const totalImages = allImages.length;

  useEffect(() => {
    // Reducimos el tiempo mínimo a 1 segundo para mejorar la velocidad percibida
    const minLoadTimeoutId = setTimeout(() => {
      if (imagesLoaded >= totalImages) {
        setIsLoading(false);
      }
    }, 1000);

    // Tiempo máximo de espera (3s) para garantizar que la página siempre se muestre
    const maxLoadTimeoutId = setTimeout(() => {
      setIsLoading(false);
      console.log("Carga forzada por timeout máximo en página principal");
    }, 1100);

    return () => {
      clearTimeout(minLoadTimeoutId);
      clearTimeout(maxLoadTimeoutId);
    };
  }, [imagesLoaded, totalImages]);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => {
      const newCount = prev + 1;
      // Si hemos cargado todas las imágenes, podemos mostrar el contenido
      if (newCount >= totalImages) {
        // Transición suave después de un pequeño delay
        setTimeout(() => setIsLoading(false), 200);
      }
      return newCount;
    });
  };

  // Manejar errores de carga de imágenes
  const handleImageError = () => {
    // Contar como cargada aunque haya error para no bloquear la UI
    setImagesLoaded((prev) => prev + 1);
    console.error("Error al cargar una imagen en la página principal");
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      {isLoading ? (
        <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
          <div className="flex flex-col items-center">
            <Loader size="large" />
            <p className="mt-4 text-lg">
              Cargando imágenes... {imagesLoaded} de {totalImages}
            </p>
          </div>
        </div>
      ) : null}

      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="text-center mb-12">
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Katia Martínez
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fashion Stylist
          </p>
        </div>

        <MasonryGrid>
          {allImages.map((image) => (
            <Link
              key={image.id}
              href={`/proyectos/${image.sessionId}`}
              className="mb-4 block overflow-hidden rounded-md"
            >
              <AspectRatio ratio={image.ratio}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="object-cover transition-all hover:scale-105 duration-700 ease-in-out"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={allImages.indexOf(image) < 3} // Prioridad para las primeras tres imágenes
                  loading={allImages.indexOf(image) < 6 ? "eager" : "lazy"} // Carga anticipada para las primeras 6 imágenes
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
              </AspectRatio>
            </Link>
          ))}
        </MasonryGrid>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="mx-auto">
            <Link href="/proyectos">Ver todas las proyectos</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
