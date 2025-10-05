import type { Metadata } from "next";

import NavigationMenu from "@/components/Header";
import About from "@/components/Footer";

export const metadata: Metadata = {
  title: "Software de Gestión de Proyectos de Software - JM Team Consulting",
  description: "Gestor de proyectos interno de software para el personal de JM Team Consulting.",
};

import "./globals.css";

// Define la estructura principal de la aplicación, con un layout global compartido.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Se regresa el HTML del layout, incluyendo un header y un footer.
  return (
    <html lang="es">
      <body className="bg-foreground text-background">
        <NavigationMenu />
        <div className="bg-background text-primary text-center p-8">
          {children}
        </div>
        <About />
      </body>
    </html>
  );
}
