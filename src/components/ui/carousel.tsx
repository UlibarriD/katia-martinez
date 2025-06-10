"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ImageWithRetry } from "./image-with-retry";
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type CarouselImage = {
  src: string
  alt: string
}

type CarouselProps = {
  images: CarouselImage[]
  aspectRatio?: number
  className?: string
  showThumbnails?: boolean
  autoplay?: boolean
  autoplayDelay?: number
  loop?: boolean
  onImageLoad?: () => void
  onImageError?: () => void
}

export function Carousel({ 
  images, 
  aspectRatio = 16/9,
  className = "",
  showThumbnails = true,
  autoplay = true,
  autoplayDelay = 4000,
  loop = true,
  onImageLoad,
  onImageError
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop,
    align: "center",
    dragFree: true,
  })
  
  const [thumbsRef, thumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps" as const,
    dragFree: true,
    align: "start"
  })
  
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  // Sincronizar carrusel principal con miniaturas
  const onThumbClick = React.useCallback(
    (index: number) => {
      if (!emblaApi || !thumbsApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi, thumbsApi]
  )

  const onSelect = React.useCallback(() => {
    if (!emblaApi || !thumbsApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    thumbsApi.scrollTo(emblaApi.selectedScrollSnap())
  }, [emblaApi, thumbsApi])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])
  
  // Funciones para los botones de navegación
  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // Configurar el autoplay
  React.useEffect(() => {
    if (emblaApi && autoplay) {
      let intervalId: NodeJS.Timeout
      
      const startAutoplay = () => {
        intervalId = setInterval(() => {
          if (emblaApi.canScrollNext()) {
            emblaApi.scrollNext()
          } else if (loop) {
            emblaApi.scrollTo(0)
          }
        }, autoplayDelay)
      }
      
      const stopAutoplay = () => {
        clearInterval(intervalId)
      }
      
      // Iniciar autoplay
      startAutoplay()
      
      // Pausar en hover/touch
      emblaApi.on('pointerDown', stopAutoplay)
      emblaApi.on('pointerUp', startAutoplay)
      
      return () => {
        stopAutoplay()
        emblaApi.off('pointerDown', stopAutoplay)
        emblaApi.off('pointerUp', startAutoplay)
      }
    }
  }, [emblaApi, autoplay, autoplayDelay, loop])

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className={`relative ${className}`}>
      {/* Carrusel principal */}
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((image, index) => (
              <div className="flex-[0_0_100%] min-w-0 relative" key={index}>
                <AspectRatio ratio={aspectRatio}>
                  <ImageWithRetry
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                    onImageLoad={onImageLoad}
                    onImageError={onImageError}
                    maxRetries={3}
                  />
                </AspectRatio>
              </div>
            ))}
          </div>
        </div>
        
        {/* Botones de navegación */}
        <button 
          onClick={scrollPrev} 
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-black/50 rounded-full text-white z-10 transition-colors"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={scrollNext} 
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-black/50 rounded-full text-white z-10 transition-colors"
          aria-label="Imagen siguiente"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Miniaturas */}
      {showThumbnails && images.length > 1 && (
        <div className="mt-4 overflow-hidden" ref={thumbsRef}>
          <div className="flex gap-2 py-1">
            {images.map((image, index) => (
              <div 
                key={index}
                className={cn(
                  "cursor-pointer flex-[0_0_20%] min-w-0 relative transition-opacity",
                  selectedIndex === index ? "opacity-100 ring-2 ring-primary" : "opacity-70 hover:opacity-100"
                )}
                onClick={() => onThumbClick(index)}
              >
                <AspectRatio ratio={1}>
                  <ImageWithRetry
                    src={image.src}
                    alt={`Miniatura ${index + 1}`}
                    fill
                    className="object-cover rounded-sm"
                    onImageLoad={onImageLoad}
                    onImageError={onImageError}
                    loading="lazy"
                    maxRetries={3}
                  />
                </AspectRatio>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
