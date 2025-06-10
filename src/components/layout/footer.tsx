"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/20 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">
              Katia Martínez
            </h3>
            <p className="text-muted-foreground">
              Capturando momentos, creando recuerdos y transformando emociones
              en arte.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 inline-block relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-primary after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/sesiones"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 inline-block relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-primary after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Sesiones
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 inline-block relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-primary after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">
              Contacto
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <a
                  href="https://wa.me/5255291950170"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors duration-300 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:scale-110 transition-transform duration-300"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>+52 55 2919 5170</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a
                  href="mailto:katiaamtzrdz@gmail.com"
                  className="flex items-center gap-2 hover:text-primary transition-colors duration-300 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:scale-110 transition-transform duration-300"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>katiaamtzrdz@gmail.com</span>
                </a>
              </li>
            </ul>

            <div className="mt-4 flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors duration-300 hover:scale-110 inline-block transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors duration-300 hover:scale-110 inline-block transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-6 bg-border/50" />

        <div className="text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Katia Martínez Fotografía. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
