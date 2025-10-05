"use client";

import { useState, useEffect } from 'react';

import Usuario from "./usuario";

export default function ViewUsers() {
  const [ users, setUsers ] = useState<Array<any>>([]);
  const [ loaded, setLoaded ] = useState(false);

  // Carga los datos JSON de todos los usuarios registrados
  useEffect(() => {
    // Solo se procede si no se han cargado datos aun.
    if (!loaded) {
      (async () => {
        try {
          const response = await fetch("https://localhost:8443/usuarios");
    
          // Se recibió un código de estado distinto a 200. Se levanta un error.
          if (!response.ok) {
            throw new Error('Error de servidor.');
          }

          // Se actualiza el estado del componente.
          const responseObject = await response.json();
          setUsers(responseObject.reverse());
        } catch (err : unknown) {
          // Se muestra un error al usuario.
          if (err instanceof Error) {
            console.error(err);
            alert("Error encontrado:\n\n" + err.message);
          }
        } finally {
          // Se señala que ya se cargaron los datos exitosamente.
          setLoaded(true);
        }
      })();
    }
  }, [loaded]);

  // Se define el JSX del componente.
  return (
    <main className="flex flex-col items-center bg-background text-primary text-center p-8 sm:min-h-[500px]">
      <h1 className="text-4xl font-extrabold mb-8">Usuarios Registrados</h1>

      <div className="flex flex-col items-center w-full">
        <div className="grid grid-cols-2 gap-4 my-4 items-center w-full">
          { loaded && users.length == 0 && (
            <p className="text-xl col-span-2 text-center">No se encontraron usuarios registrados en el sistema.</p>
          )}
          { loaded && users.length > 0 && (
            users.map(u => <Usuario key={u.id} data={u} />)
          )}
      </div>
    </div>
    </main>
  );
};