"use client";

import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";

interface ImageWithRetryProps extends Omit<ImageProps, 'onError'> {
  maxRetries?: number;
  onImageLoad?: () => void;
  onImageError?: () => void;
}

export function ImageWithRetry({
  src,
  maxRetries = 3,
  onImageLoad,
  onImageError,
  alt,
  ...props
}: ImageWithRetryProps) {
  const [retries, setRetries] = useState(0);
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  // Reset cuando cambia la fuente
  useEffect(() => {
    setImgSrc(src);
    setRetries(0);
    setError(false);
  }, [src]);

  const handleError = () => {
    if (retries < maxRetries) {
      // Incrementar reintentos y forzar nueva carga
      setRetries(prev => prev + 1);
      const timestamp = new Date().getTime();
      // Añadir timestamp para evitar cacheo y forzar nueva solicitud
      if (typeof src === 'string') {
        const separator = src.includes('?') ? '&' : '?';
        setImgSrc(`${src}${separator}_retry=${timestamp}`);
      }
    } else {
      // Después de maxRetries intentos, marcar como error permanente
      setError(true);
      console.error(`Imagen no pudo cargarse después de ${maxRetries} intentos:`, src);
      if (onImageError) {
        onImageError();
      }
    }
  };

  // Si hay error, mostrar un placeholder o manejar según necesidad
  if (error) {
    return (
      <div 
        className="bg-muted flex items-center justify-center"
        style={{ width: '100%', height: '100%', position: 'relative' }}
        {...props}
      >
        <span className="text-muted-foreground text-xs">Imagen no disponible</span>
      </div>
    );
  }

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onLoad={onImageLoad}
      onError={handleError}
    />
  );
}
