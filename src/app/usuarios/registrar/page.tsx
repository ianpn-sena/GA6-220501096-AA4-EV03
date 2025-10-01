"use client";

import { useState } from 'react';
import { FormButton } from "@/components/Unimplemented";

export default function Perfil() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const postForm = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('https://localhost:8443/root', {
        method: 'POST',
        body: formData,
      });
 
      if (!response.ok) {
        throw new Error('Error de servidor.');
      }
 
      //const data = await response.json()
      console.log(await response.text());
    } catch (err: any) {
      setError(err.message);
      console.error(err)
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

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
      <h1 className="text-4xl font-extrabold mb-8">Perfil</h1>

      <form id="form_perfil" action="https://localhost:8443" method="POST" className="flex flex-col items-center w-full" onSubmit={handleSubmitForm}>
        <div className="grid grid-cols-2 gap-4 my-4 items-center w-full">
          <label htmlFor="form_perfil_nombres" className="text-right">Nombre(s)</label>
          <input type="text" id="form_perfil_nombres" name="form_perfil_nombres" placeholder="Nombre(s)" className="border-solid border-1 p-1 w-full sm:w-3xs" required />
          <label htmlFor="form_perfil_apellidos" className="text-right">Apellidos</label>
          <input type="text" id="form_perfil_apellidos" name="form_perfil_apellidos" placeholder="Apellidos" className="border-solid border-1 p-1 w-full sm:w-3xs" required />
          <label htmlFor="form_perfil_tipo_de_documento" className="text-right">Tipo de Documento</label>
          <select id="form_perfil_tipo_de_documento" name="form_perfil_tipo_de_documento" className="border-solid border-1 p-1.5 w-full sm:w-3xs" required>
            <option value="">Seleccione una opción</option>
            <option value="CC">Cédula de ciudadanía</option>
            <option value="PASSPORT">Pasaporte</option>
            <option value="FOREIGN">Cédula de extranjería</option>
          </select>
          <label htmlFor="form_perfil_numero_de_documento" className="text-right">Número de Documento</label>
          <input type="text" id="form_perfil_numero_de_documento" name="form_perfil_numero_de_documento" placeholder="Número de Documento" className="border-solid border-1 p-1 w-full sm:w-3xs" required />
          <label htmlFor="form_perfil_email" className="text-right">Email</label>
          <input type="email" id="form_perfil_email" name="form_perfil_email" placeholder="Email" className="border-solid border-1 p-1 w-full sm:w-3xs" required />
          <label htmlFor="form_perfil_pais" className="text-right">País</label>
          <input type="text" id="form_perfil_pais" name="form_perfil_pais" placeholder="País" className="border-solid border-1 p-1 w-full sm:w-3xs" required />
          <label htmlFor="form_perfil_numero_de_telefono" className="text-right">Número de Teléfono</label>
          <input type="tel" id="form_perfil_numero_de_telefono" name="form_perfil_numero_de_telefono" placeholder="Número de Teléfono" className="border-solid border-1 p-1 w-full sm:w-3xs" required />
          <label htmlFor="form_perfil_departamento" className="text-right">Departamento</label>
          <input type="text" id="form_perfil_departamento" name="form_perfil_departamento" placeholder="Departamento" className="border-solid border-1 p-1 w-full sm:w-3xs" required />
          <label htmlFor="form_perfil_ciudad" className="text-right">Ciudad</label>
          <input type="text" id="form_perfil_ciudad" name="form_perfil_ciudad" placeholder="Ciudad" className="border-solid border-1 p-1 w-full sm:w-3xs" required />
          <label htmlFor="form_perfil_direccion_1" className="text-right">Dirección (primera línea)</label>
          <input type="text" id="form_perfil_direccion_1" name="form_perfil_direccion_1" placeholder="Dirección (primera línea)" className="border-solid border-1 p-1 w-full sm:w-3xs" required />
          <label htmlFor="form_perfil_direccion_2" className="text-right">Dirección (segunda línea)</label>
          <input type="text" id="form_perfil_direccion_1" name="form_perfil_direccion_1" placeholder="Dirección (segunda línea)" className="border-solid border-1 p-1 w-full sm:w-3xs" />
          <label htmlFor="form_perfil_codigo_zip" className="text-right">Código ZIP</label>
          <input type="text" id="form_perfil_codigo_zip" name="form_perfil_codigo_zip" placeholder="Código ZIP" className="border-solid border-1 p-1 w-full sm:w-3xs" />
      </div>
      <div className="flex items-center justify-around w-full sm:w-3/5">
          <FormButton type="button" value="Cambiar Email" />
          <FormButton type="submit" value="Actualizar" />
      </div>
    </form>
    </main>
  );
};