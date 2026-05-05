import sobre from "../../assets/Sobre.png";

export function Sobre() {
  return (
    <section id="sobre" className="w-full h-screen flex items-center justify-center corpo">
      <div className="conteudo space-y-3">
        <p className="text-primary-dark">Soluções para cartórios</p>
        <h2 className="">Sistemas eficientes para protestos</h2>
        <p className="text-text-base">
          Interlink oferece soluções inovadoras para cartórios de protestos de
          títulos e documentos. Nossos sistemas, desenvolvidos com React e
          Tailwind, garantem a emissão automática de boletos bancários e
          facilitam o gerenciamento de serviços com cobrança única ou mensal.
          Com um licenciamento mensal acessível, atendemos a necessidade de
          modernização e eficiência dos cartórios, permitindo que nossos
          clientes se concentrem no que realmente importa: oferecer um
          atendimento de qualidade aos seus usuários.
        </p>
        <a className="font-bold hover:border-b text-text-base" href="/contato">
          Entre em contato
        </a>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center p-4">
        <img
          src={sobre}
          alt="Sobre a Interlink"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
}
