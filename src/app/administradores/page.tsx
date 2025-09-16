import SearchBar from "@/components/Search";
import { ButtonAnchor, Anchor } from "@/components/Unimplemented";

export default function Administradores() {
  return (
    <main className="flex flex-col items-center bg-background text-primary text-center p-8 sm:min-h-[500px]">
          <h1 className="text-4xl font-extrabold mb-8">Administrar Administradores de Proyectos</h1>

          <ButtonAnchor>Registrar Administrador de Proyectos</ButtonAnchor>

          <SearchBar />
          
          <table className="border-separate border-spacing-1 my-4">
              <thead>
                  <tr>
                      <th scope="col" className="text-left pb-8">Nombre de Administrador</th>
                      <th scope="col" className="px-8 pb-8">Proyecto Asignado</th>
                      <th scope="col" className="text-right pb-8">Acciones Rápidas</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td className="text-left"><Anchor>Foo Bar</Anchor></td>
                      <td><em>Ninguno</em></td>
                      <td className="text-right"><Anchor>Asignar Proyecto</Anchor></td>
                  </tr>
                  <tr>
                      <td className="text-left"><Anchor>Bax Qux</Anchor></td>
                      <td><Anchor>Sistema de Contabilidad Alpha</Anchor></td>
                      <td className="text-right"><Anchor>Evaluar</Anchor></td>
                  </tr>
                  <tr>
                      <td className="text-left"><Anchor>Bar Bax</Anchor></td>
                      <td><Anchor>Verificador de Facturas Beta</Anchor></td>
                      <td className="text-right"><Anchor>Evaluar</Anchor></td>
                  </tr>
                  <tr>
                      <td className="text-left"><Anchor>Qux Quux</Anchor></td>
                      <td><em>Ninguno</em></td>
                      <td className="text-right"><Anchor>Asignar Proyecto</Anchor></td>
                  </tr>
                  <tr>
                      <td className="text-left"><Anchor>Foo Bax</Anchor></td>
                      <td><Anchor>Sistema de Teatro Epsilon</Anchor></td>
                      <td className="text-right"><Anchor>Evaluar</Anchor></td>
                  </tr>
              </tbody>
          </table>
          <nav className="my-4">
              <p className="mb-1">
                  <Anchor title="Primera página">«</Anchor> 
                  <Anchor selected={true} title="Página 1">1</Anchor> ,
                  <Anchor title="Página 2">2</Anchor> ,
                  <Anchor title="Página 3">3</Anchor> ,
                  … , 
                  <Anchor title="Página 7">7</Anchor> , 
                  <Anchor title="Página 8">8</Anchor> , 
                  <Anchor title="Página 9">9</Anchor> , 
                  <Anchor title="Última página">»</Anchor>
              </p>
              <p>Páginas</p>
          </nav>
    </main>
  );
};