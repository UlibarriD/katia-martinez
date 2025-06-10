"use client";

import React from "react";
import MasonryCSS from 'react-masonry-css';

interface MasonryGridProps {
  children: React.ReactNode;
  breakpointColumns?: {
    default: number;
    [key: number]: number;
  };
  className?: string;
}

export function MasonryGrid({
  children,
  breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  },
  className = "",
}: MasonryGridProps) {
  return (
    <MasonryCSS
      breakpointCols={breakpointColumns}
      className={`flex w-auto -ml-4 ${className}`}
      columnClassName="pl-4 bg-clip-padding"
    >
      {children}
    </MasonryCSS>
  );
}
