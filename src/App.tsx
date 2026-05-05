import { Header } from "./components/Header/header";
import { Inicio } from "./components/Inicio/inicio";
import { Sobre } from "./components/Sobre/sobre";
import { Serviços } from "./components/Serviços/serviços";
import { Preços } from "./components/Preços/preços";
import { Contato } from "./components/Contato/contato";

function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start">
      <Header />
      <Inicio />
      <Sobre />
      <Serviços />
      <Preços />
      <Contato />
    </main>
  );
}

export default App;
