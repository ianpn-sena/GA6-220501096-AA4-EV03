"use client";

import { useState } from 'react';
import { FormButton } from "@/components/Unimplemented";

export default function Perfil() {
  const [isLoading, setIsLoading] = useState(false);

  const postForm = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch(e.currentTarget.action, {
        method: 'POST',
        body: formData
      });
 
      if (!response.ok) {
        throw new Error('Error de servidor.');
      }

      alert("Usuario creado exitosamente!");
    } catch (err : unknown) {
      if (err instanceof Error) {
        alert("Error encontrado:\n\n" + err.message);
        console.error(err)
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;

    if (form.checkValidity()) {
      if (!isLoading) {
        postForm(e);
      }

      return;
    }

    form.reportValidity();
  };

  return (
    <main className="flex flex-col items-center bg-background text-primary text-center p-8 sm:min-h-[500px]">
      <h1 className="text-4xl font-extrabold mb-8">Agregar Usuario</h1>

      <form id="form_perfil" action="https://localhost:8443/usuarios" method="POST" className="flex flex-col items-center w-fvvvvvvvull" onSubmit={handleSubmitForm}>
        <div className="grid grid-cols-2 gap-4 my-4 items-center w-full">
          <label htmlFor="form_perfil_numero_de_documento" className="text-right">Número de Documento</label>
          <input type="text" id="form_perfil_numero_de_documento" name="form_perfil_numero_de_documento" placeholder="Número de Documento" className="border-solid border-1 p-1 w-full sm:w-3xs" required />

          <label htmlFor="form_perfil_email" className="text-right">Email</label>
          <input type="email" id="form_perfil_email" name="form_perfil_email" placeholder="Email" className="border-solid border-1 p-1 w-full sm:w-3xs" required />

          <label htmlFor="form_perfil_primer_nombre" className="text-right">Primer Nombre</label>
          <input type="text" id="form_perfil_primer_nombre" name="form_perfil_primer_nombre" placeholder="Primer Nombre" className="border-solid border-1 p-1 w-full sm:w-3xs" required />
          <label htmlFor="form_perfil_segundo_nombre" className="text-right">Segundo Nombre</label>
          <input type="text" id="form_perfil_segundo_nombre" name="form_perfil_segundo_nombre" placeholder="Segundo Nombre" className="border-solid border-1 p-1 w-full sm:w-3xs" />
          <label htmlFor="form_perfil_primer_apellido" className="text-right">Primer Apellido</label>
          <input type="text" id="form_perfil_primer_apellido" name="form_perfil_primer_apellido" placeholder="Primer Apellido" className="border-solid border-1 p-1 w-full sm:w-3xs" required />
          <label htmlFor="form_perfil_segundo_apellido" className="text-right">Segundo Apellido</label>
          <input type="text" id="form_perfil_segundo_apellido" name="form_perfil_segundo_apellido" placeholder="Segundo Apellido>" className="border-solid border-1 p-1 w-full sm:w-3xs" />

          <label htmlFor="form_perfil_numero_de_telefono" className="text-right">Número de Teléfono</label>
          <input type="tel" id="form_perfil_numero_de_telefono" name="form_perfil_numero_de_telefono" placeholder="Número de Teléfono" className="border-solid border-1 p-1 w-full sm:w-3xs" required />

          <label htmlFor="form_perfil_pais" className="text-right">País</label>
          <input type="text" id="form_perfil_pais" name="form_perfil_pais" placeholder="País" className="border-solid border-1 p-1 w-full sm:w-3xs" required />
          <label htmlFor="form_perfil_departamento" className="text-right">Departamento</label>
          <input type="text" id="form_perfil_departamento" name="form_perfil_departamento" placeholder="Departamento" className="border-solid border-1 p-1 w-full sm:w-3xs" required />
          <label htmlFor="form_perfil_ciudad" className="text-right">Ciudad</label>
          <input type="text" id="form_perfil_ciudad" name="form_perfil_ciudad" placeholder="Ciudad" className="border-solid border-1 p-1 w-full sm:w-3xs" required />

          <label htmlFor="form_perfil_direccion_1" className="text-right">Dirección (primera línea)</label>
          <input type="text" id="form_perfil_direccion_1" name="form_perfil_direccion_1" placeholder="Dirección (primera línea)" className="border-solid border-1 p-1 w-full sm:w-3xs" required />
          <label htmlFor="form_perfil_direccion_2" className="text-right">Dirección (segunda línea)</label>
          <input type="text" id="form_perfil_direccion_2" name="form_perfil_direccion_2" placeholder="Dirección (segunda línea)" className="border-solid border-1 p-1 w-full sm:w-3xs" />
          <label htmlFor="form_perfil_codigo_zip" className="text-right">Código ZIP</label>
          <input type="text" id="form_perfil_codigo_zip" name="form_perfil_codigo_zip" placeholder="Código ZIP" className="border-solid border-1 p-1 w-full sm:w-3xs" />
      </div>
      <div className="flex items-center justify-around w-full sm:w-3/5">
          <FormButton type="submit" value="Crear Usuario" />
      </div>
    </form>
    </main>
  );
};