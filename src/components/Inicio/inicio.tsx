import inicio from "../../assets/inicio.png";

export function Inicio() {
  return (
    <section
      id="inicio"
      className="w-full flex items-center justify-center pt-[80px]"
    >
      <div className="bg-lime-500 relative">
        <img
          src={inicio}
          alt="Inicio"
          className="w-full h-full object-cover "
        />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/3 -translate-y-1/2 space-y-5 bg-gray-400/50 rounded-md p-4">
          <h1 className="text-secondary ">Soluções para cartórios</h1>
          <h3 className="text-secondary ">
            Facilite o gerenciamento de protestos
          </h3>
          <a className="box-button" href="">
            Ver Serviços
          </a>
        </div>
      </div>
    </section>
  );
}
