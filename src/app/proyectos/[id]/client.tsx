"use client";

import { Sesion } from "@/lib/constants";
import { Carousel } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { User, ChevronLeft, Camera, Brush } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Loader } from "@/components/ui/loader";

interface SessionDetailProps {
  sesion: Sesion;
}

export default function SessionDetailClient({ sesion }: SessionDetailProps) {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const totalImages = sesion.imagenes.length;

  useEffect(() => {
    // Tiempo mínimo de carga (reducido a 1s para mejorar velocidad pero mantener experiencia visual)
    const minLoadTimeoutId = setTimeout(() => {
      if (imagesLoaded >= totalImages) {
        setIsLoading(false);
      }
    }, 500);

    // Tiempo máximo de espera (3s) para evitar que se quede bloqueado indefinidamente
    const maxLoadTimeoutId = setTimeout(() => {
      setIsLoading(false);
      console.log("Carga forzada por timeout máximo en detalle de proyecto");
    }, 1000);

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
        // Pausa breve para transición suave
        setTimeout(() => setIsLoading(false), 200);
      }
      return newCount;
    });
  };

  // Manejar errores de carga
  const handleImageError = () => {
    // Contar como cargada aunque haya error para no bloquear la UI
    setImagesLoaded((prev) => prev + 1);
    console.error("Error al cargar una imagen en carousel");
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
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
        <Link
          href="/proyectos"
          className="inline-flex items-center mb-8 text-sm hover:text-primary transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Volver a proyectos
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* En desktop: Carousel a la izquierda */}
          <div className="order-2 lg:order-1">
            <Carousel
              images={sesion.imagenes}
              aspectRatio={3 / 4}
              autoplay={true}
              autoplayDelay={5000}
              loop={true}
              showThumbnails={true}
              onImageLoad={handleImageLoad}
              onImageError={handleImageError}
            />
          </div>

          {/* En desktop: Información a la derecha */}
          <div className="order-1 lg:order-2">
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              {sesion.titulo}
            </h1>

            <div className="flex flex-col gap-3 my-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <User className="h-4 w-4" />
                <span>Modelo: {sesion.modelo}</span>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Camera className="h-4 w-4" />
                <span>{sesion.fotografia}</span>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <span>MUA: {sesion.mua}</span>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Brush className="h-4 w-4" />
                <span>Estilismo: {sesion.estilismo}</span>
              </div>
            </div>

            <Separator className="my-6" />

            <div>
              <h2 className="font-heading text-xl font-medium mb-4">
                Acerca de esta sesión
              </h2>
              <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                {sesion.descripcion}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
