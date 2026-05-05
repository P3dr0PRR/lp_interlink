import servicos1 from "../../assets/serviços1.png";
import servicos2 from "../../assets/Serviços2.png";

export function Serviços() {
  return (
    <section
      id="servicos"
      className="w-full h-screen flex items-center justify-center corpo bg-bg-servicos"
    >
      <div className="conteudo space-y-3 ">
        <p className="text-primary-dark">Soluções para cartórios</p>
        <h2 className="">Facilitamos seu dia a dia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card hover:scale-105 transition-transform duration-300 group">
            <img src={servicos1} alt="Serviços" className="w-full h-auto" />
            <div className="card-desc">
              <h3 className="group-hover:text-primary-dark">
                Licenciamento Mensal
              </h3>
              <p className="">
                Obtenha acesso contínuo ao sistema de protestos.
              </p>
            </div>
          </div>

          <div className="card hover:scale-105 transition-transform duration-300 group">
            <img src={servicos2} alt="Serviços" className="w-full h-auto" />
            <div className="card-desc">
              <h3 className="group-hover:text-primary-dark">
                Cadastro de Clientes
              </h3>
              <p className="">Facilite a gestão dos seus clientes.</p>
            </div>
          </div>

          <div className="card hover:scale-105 transition-transform duration-300 group">
            <img src={servicos1} alt="Serviços" className="w-full h-auto" />
            <div className="card-desc">
              <h3 className="group-hover:text-primary-dark">
                Emissão de boletos
              </h3>
              <p className="">Automatize a cobrança com facilidade.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
