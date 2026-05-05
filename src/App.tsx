import { Header } from "./components/Header/header";
import { Inicio } from "./components/Inicio/inicio";
import { Sobre } from "./components/Sobre/sobre";

function App() {
  return (
    <main className="h-screen flex flex-col items-center justify-start">
      <Header />
      <Inicio />
      {/* <Sobre /> */}
    </main>
  );
}

export default App;
