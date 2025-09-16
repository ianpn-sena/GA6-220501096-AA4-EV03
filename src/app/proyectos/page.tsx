import SearchBar from "@/components/Search";
import { ButtonAnchor, Anchor } from "@/components/Unimplemented";

export default function Proyectos() {
  return (
    <main className="flex flex-col items-center bg-background text-primary text-center p-8 sm:min-h-[500px]">
          <h1 className="text-4xl font-extrabold mb-8">Administrar Proyectos</h1>

          <ButtonAnchor>Crear Proyecto</ButtonAnchor>

          <SearchBar />
          
          <table className="border-separate border-spacing-1 my-4">
              <thead>
                  <tr>
                      <th scope="col" className="text-left pb-8">Nombre de Proyecto</th>
                      <th scope="col" className="px-8 pb-8">Fecha de Inicio</th>
                      <th scope="col" className="text-right pb-8">Estado de Proyecto</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td className="text-left"><Anchor>Sistema de Contabilidad Alpha</Anchor></td>
                      <td>2025/05/01</td>
                      <td className="text-right">ACTIVO</td>
                  </tr>
                  <tr>
                      <td className="text-left"><Anchor>Verificador de Facturas Beta</Anchor></td>
                      <td>2024/11/30</td>
                      <td className="text-right">ACTIVO</td>
                  </tr>
                  <tr>
                      <td className="text-left"><Anchor>Sistema de Salud Integral Gamma</Anchor></td>
                      <td>2024/06/15</td>
                      <td className="text-right">ACTIVO</td>
                  </tr>
                  <tr>
                      <td className="text-left"><Anchor>Aplicación Móvil Gimnasio Delta</Anchor></td>
                      <td>2024/02/21</td>
                      <td className="text-right">FINALIZADO</td>
                  </tr>
                  <tr>
                      <td className="text-left"><Anchor>Sistema de Teatro Epsilon</Anchor></td>
                      <td>2023/05/29</td>
                      <td className="text-right">ACTIVO</td>
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
                  <Anchor title="Página 16">16</Anchor> , 
                  <Anchor title="Página 17">17</Anchor> , 
                  <Anchor title="Página 18">18</Anchor> , 
                  <Anchor title="Última página">»</Anchor>
              </p>
              <p>Páginas</p>
          </nav>
    </main>
  );
};