"use client";

import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SESIONES } from "@/lib/constants";
import { Loader } from "@/components/ui/loader";
import { useEffect, useState } from "react";
import { Brush, Camera, User } from "lucide-react";

export default function SesionesPage() {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const totalImages = SESIONES.length;

  useEffect(() => {
    // Timeout mínimo para mejor experiencia de usuario (1s)
    const minLoadTimeoutId = setTimeout(() => {
      if (imagesLoaded >= totalImages) {
        setIsLoading(false);
      }
    }, 800);

    // Timeout máximo (3s) para asegurar que la página no se quede cargando indefinidamente
    const maxLoadTimeoutId = setTimeout(() => {
      setIsLoading(false);
      console.log("Carga forzada por timeout máximo");
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
        // Pequeña pausa para que la transición sea suave
        setTimeout(() => setIsLoading(false), 200);
      }
      return newCount;
    });
  };

  // Manejar errores de carga de imágenes
  const handleImageError = () => {
    // Contamos la imagen como cargada aunque haya fallado para no bloquear la UI
    setImagesLoaded((prev) => prev + 1);
    console.error("Error al cargar una imagen");
  };

  return (
    <section className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
      {isLoading ? (
        <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
          <div className="flex flex-col items-center">
            <Loader size="large" />
            <p className="mt-4 text-lg">
              Cargando proyectos... {imagesLoaded} de {totalImages}
            </p>
          </div>
        </div>
      ) : null}

      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Proyectos Fotográficos
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Explora mi portafolio de trabajos. Cada proyecto ha sido
            cuidadosamente planeado y ejecutado para capturar la esencia de cada
            momento.
          </p>
          <Separator className="my-10 max-w-md mx-auto" />
        </div>

        {/* Listado de sesiones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {SESIONES.map((sesion) => (
            <Link href={`/proyectos/${sesion.id}`} key={sesion.id}>
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
                <AspectRatio ratio={3 / 4}>
                  <Image
                    src={sesion.imagenes[0].src}
                    alt={sesion.titulo}
                    fill
                    className="object-cover transition-all hover:scale-105 duration-500"
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={SESIONES.indexOf(sesion) < 4} // Prioriza las primeras 4 imágenes
                    loading={SESIONES.indexOf(sesion) < 4 ? "eager" : "lazy"}
                  />
                </AspectRatio>
                <CardContent className="pt-6">
                  <h3 className="font-heading text-xl mb-2">{sesion.titulo}</h3>
                  <p className="text-sm text-muted-foreground">
                    <User className="inline mr-2 h-4 w-4" />

                    {sesion.modelo}
                  </p>
                </CardContent>
                <CardFooter className="pt-0 pb-4 text-sm flex flex-col gap-2 justify-start items-start">
                  <div className=" grid grid-cols-2">
                    <p>
                      <Camera className="inline mr-2 h-4 w-4" />
                      {sesion.fotografia}
                    </p>
                    <p>
                      <strong>MUA:</strong> {sesion.mua}
                    </p>
                  </div>
                  <p>
                    <Brush className="inline mr-2 h-4 w-4" />
                    {sesion.estilismo}
                  </p>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
