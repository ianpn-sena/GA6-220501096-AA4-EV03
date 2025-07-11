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
            <li className="block lg:inline-block m-4"><Link href="/administracion/proyectos" className={pathname == "/administracion/proyectos" ? "underline font-extrabold" : "underline"}>Administrar Proyectos</Link></li>
            <li className="block lg:inline-block m-4"><Link href="/administracion/administradores" className={pathname == "/administracion/administradores" ? "underline font-extrabold" : "underline"}>Administrar Administradores de Proyectos</Link></li>
            <li className="block lg:inline-block m-4"><Link href="/administracion/desarrolladores" className={pathname == "/administracion/desarrolladores" ? "underline font-extrabold" : "underline"}>Administrar Desarrolladores</Link></li>
        </ul>
        <ul className="block">
            <li className="block lg:inline-block m-4"><Link href="/administracion/perfil" className={pathname == "/administracion/perfil" ? "underline font-extrabold" : "underline"}>Perfil</Link></li>
            <li className="block lg:inline-block m-4"><a href="#" className="underline" onClick={handleLogoutClick}>Cerrar Sesión</a></li>
        </ul>
    </nav>
  );
}