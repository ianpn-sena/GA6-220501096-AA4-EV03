"use client";

import { usePathname } from "next/navigation";
import Link from "next/link"

export default function NavigationMenu() {
    const pathname = usePathname();

    const handleLogoutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      alert("Funcionalidad no implementada aun.");
    };

    return (
    <nav className="block sm:flex justify-between p-4 text-center sm:text-start">
        <ul className="block">
            <li className="block lg:inline-block m-4"><Link href="/proyectos.html" className={pathname == "/proyectos.html" ? "underline font-extrabold" : "underline"}>Administrar Proyectos</Link></li>
            <li className="block lg:inline-block m-4"><Link href="/administradores.html" className={pathname == "/administradores.html" ? "underline font-extrabold" : "underline"}>Administrar Administradores de Proyectos</Link></li>
            <li className="block lg:inline-block m-4"><Link href="/desarrolladores.html" className={pathname == "/desarrolladores.html" ? "underline font-extrabold" : "underline"}>Administrar Desarrolladores</Link></li>
        </ul>
        <ul className="block">
            <li className="block lg:inline-block m-4"><Link href="/perfil.html" className={pathname == "/perfil.html" ? "underline font-extrabold" : "underline"}>Perfil</Link></li>
            <li className="block lg:inline-block m-4"><a href="#" className="underline" onClick={handleLogoutClick}>Cerrar Sesión</a></li>
        </ul>
    </nav>
  );
}