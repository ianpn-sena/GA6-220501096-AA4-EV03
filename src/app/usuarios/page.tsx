"use client";

import { useState, useEffect } from 'react';

import Usuario from "./usuario";

export default function ViewUsers() {
  const [ users, setUsers ] = useState<Array<any>>([]);
  const [ loaded, setLoaded ] = useState(false);

  useEffect(() => {
    if (!loaded) {
      (async () => {
        try {
          const response = await fetch("https://localhost:8443/usuarios");
    
          if (!response.ok) {
            throw new Error('Error de servidor.');
          }

          const responseObject = await response.json();
          setUsers(responseObject.reverse());
        } catch (err : unknown) {
          if (err instanceof Error) {
            alert("Error encontrado:\n\n" + err.message);
            console.error(err)
          }
        } finally {
          setLoaded(true);
        }
      })();
    }
  }, [loaded]);

  return (
    <main className="flex flex-col items-center bg-background text-primary text-center p-8 sm:min-h-[500px]">
      <h1 className="text-4xl font-extrabold mb-8">Usuarios Registrados</h1>

      <div className="flex flex-col items-center w-fvvvvvvvull">
        <div className="grid grid-cols-2 gap-4 my-4 items-center w-full">
          {
            users.map(u => <Usuario key={u.id} data={u} />)
          }
      </div>
    </div>
    </main>
  );
};