import { Header } from "./components/Header/header";
import { Inicio } from "./components/Inicio/inicio";
import { Sobre } from "./components/Sobre/sobre";
import {Serviços} from "./components/Serviços/serviços";

function App() {
  return (
    <main className="h-screen flex flex-col items-center justify-start">
      <Header />
      <Inicio />
      <Sobre />
      <Serviços />
    </main>
  );
}

export default App;
