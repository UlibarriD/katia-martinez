// Importaciones de Next.js
import { notFound } from "next/navigation";

// Importar datos de sesiones desde el archivo de constantes
import { SESIONES } from "@/lib/constants";

// Importar el componente cliente con el sistema de carga
import SessionDetailClient from "./client";

// Definición de tipos para params
type Params = {
  id: string;
};

// Función para generar metadatos dinámicos
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  // En Next.js 15, params es una Promise que debe ser esperada
  const resolvedParams = await params;
  const id = String(resolvedParams.id);
  const sesion = SESIONES.find((s) => s.id === id);

  if (!sesion) {
    return {
      title: "Sesión no encontrada | Katia Martínez",
    };
  }

  return {
    title: `${sesion.titulo} | Katia Martínez`,
    description: sesion.descripcion.substring(0, 155) + "...",
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  // En Next.js 15, params es una Promise que debe ser esperada
  const resolvedParams = await params;
  const sesion = SESIONES.find((s) => s.id === resolvedParams.id);

  if (!sesion) {
    notFound();
  }

  // Usar nuestro componente cliente con el sistema de carga
  return <SessionDetailClient sesion={sesion} />;
}
