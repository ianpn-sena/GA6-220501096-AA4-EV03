"use client";

import { usePathname } from "next/navigation";
import Link from "next/link"

export default function NavigationMenu() {
    const pathname = usePathname();

    const handleNotImplementedClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      alert("Funcionalidad no implementada aun.");
    };

    return (
    <nav className="block sm:flex justify-between p-4 text-center sm:text-start">
        <ul className="block">
            <li className="block lg:inline-block m-4"><Link href="/usuarios" className={pathname == "/usuarios" ? "underline font-extrabold" : "underline"}>Ver Usuarios</Link></li>
            <li className="block lg:inline-block m-4"><Link href="/usuarios/registrar" className={pathname == "/usuarios/registrar" ? "underline font-extrabold" : "underline"}>Agregar Usuarios</Link></li>
        </ul>
        <ul className="block">
            <li className="block lg:inline-block m-4"><Link href="/perfil" className={pathname == "/perfil" ? "underline font-extrabold" : "underline"} onClick={handleNotImplementedClick}>Perfil</Link></li>
            <li className="block lg:inline-block m-4"><a href="#" className="underline" onClick={handleNotImplementedClick}>Cerrar Sesión</a></li>
        </ul>
    </nav>
  );
}