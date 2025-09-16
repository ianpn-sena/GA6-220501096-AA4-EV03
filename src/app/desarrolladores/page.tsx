import SearchBar from "@/components/Search";
import { ButtonAnchor, Anchor } from "@/components/Unimplemented";

export default function Desarrolladores() {
  return (
    <main className="flex flex-col items-center bg-background text-primary text-center p-8 sm:min-h-[500px]">
          <h1 className="text-4xl font-extrabold mb-8">Administrar Desarrolladores</h1>

          <ButtonAnchor>Registrar Desarrollador</ButtonAnchor>

          <SearchBar />
          
          <table className="border-separate border-spacing-1 my-4">
              <thead>
                  <tr>
                      <th scope="col" className="text-left pb-8">Nombre de Desarrollador</th>
                      <th scope="col" className="px-8 pb-8">Proyecto Asignado</th>
                      <th scope="col" className="text-right pb-8">Email</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td className="text-left"><Anchor>John Doe</Anchor></td>
                      <td><em>Ninguno</em></td>
                      <td className="text-right"><Anchor>john.doe@jm.dev</Anchor></td>
                  </tr>
                  <tr>
                      <td className="text-left"><Anchor>Jane Doe</Anchor></td>
                      <td><Anchor>Sistema de Contabilidad Alpha</Anchor></td>
                      <td className="text-right"><Anchor>jane.doe@jm.dev</Anchor></td>
                  </tr>
                  <tr>
                      <td className="text-left"><Anchor>Alice</Anchor></td>
                      <td><Anchor>Verificador de Facturas Beta</Anchor></td>
                      <td className="text-right"><Anchor>alice@jm.dev</Anchor></td>
                  </tr>
                  <tr>
                      <td className="text-left"><Anchor>Bob</Anchor></td>
                      <td><em>Ninguno</em></td>
                      <td className="text-right"><Anchor>bob@jm.dev</Anchor></td>
                  </tr>
                  <tr>
                      <td className="text-left"><Anchor>Craig</Anchor></td>
                      <td><Anchor>Sistema de Teatro Epsilon</Anchor></td>
                      <td className="text-right"><Anchor>craig@jm.dev</Anchor></td>
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
                  <Anchor title="Página 33">33</Anchor> , 
                  <Anchor title="Página 34">34</Anchor> , 
                  <Anchor title="Página 35">35</Anchor> , 
                  <Anchor title="Última página">»</Anchor>
              </p>
              <p>Páginas</p>
          </nav>
    </main>
  );
};