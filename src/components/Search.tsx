"use client";

import Image from "next/image";

// Componente que define una barra de búsqueda, la cual no hace nada actualmente.
export default function SearchBar () {
  // Handler de click o búsqueda del componente de búsqueda. Muestra un mensaje de error.
  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Funcionalidad no implementada aun.");
  };

  // Regresa el HTML del componente de búsqueda.
  return (
    <form id="form_buscar" action="#" method="GET" className="border-solid border-1 py-1 px-2 my-8 flex items-center" onSubmit={handleSubmitForm}>
        <input type="search" className="" placeholder="Buscar" />
        <button form="form_buscar" type="submit" className="ml-2"><Image width={176} height={196} className="w-4 h-4 my-auto" src="/img/search.png" alt="Buscar" /></button>
    </form>
  );
}