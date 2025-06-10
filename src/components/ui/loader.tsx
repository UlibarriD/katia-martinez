import React from "react";

export interface LoaderProps {
  size?: "small" | "medium" | "large";
}

export function Loader({ size = "medium" }: LoaderProps) {
  const sizeClasses = {
    small: "w-6 h-6 border-2",
    medium: "w-10 h-10 border-3",
    large: "w-16 h-16 border-4",
  };

  return (
    <div className="flex items-center justify-center h-full w-full">
      <div
        className={`${sizeClasses[size]} border-t-primary rounded-full animate-spin`}
        role="status"
        aria-label="Cargando..."
      />
      <span className="sr-only">Cargando...</span>
    </div>
  );
}
