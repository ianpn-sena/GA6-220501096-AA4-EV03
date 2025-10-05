"use client";

// Handler para eventos de  elementos con funcionalidad no implementada.
// Muestra un mensaje de error.
const handleButtonClick = (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
  alert("Funcionalidad no implementada aun.");
};

// Define un componente botón con un enlace, el cual muestra un error de "no implementado" al hacerle click.
export function ButtonAnchor({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <a href="#" className="block bg-secondary text-background font-bold my-4 p-4 text-xl" onClick={handleButtonClick}>{children}</a>
  );
}

// Define un componente botón en un formulario, que muestra un error de "no implementado" al hacerle click.
export function FormButton({
  type,
  value
}: {
  type: "submit" | "button" | "reset"
  value?: string
}) {  
  return (
    <input type={type} value={value} className="block bg-secondary text-background font-bold my-4 p-4 text-xl" onClick={type != "submit" ? handleButtonClick : undefined} />
  );
}

// Define un enlace que, al hacerle click, muestra un mensaje de error "no implementado."
export function Anchor({
  children,
  title,
  selected
}: {
  children?: React.ReactNode,
  title?: string | undefined,
  selected?: boolean | null | undefined
}) {
  return (
    <a href="#" className={selected ? "bold text-secondary" : "underline"} title={title} onClick={handleButtonClick}>{children}</a>
  );
}