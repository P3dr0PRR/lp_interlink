import licenciamentoMensal from "../../assets/licenciamentoMensal.png";
import cadastroDeClientes from "../../assets/cadastroDeClientes.png";
import emissaoDeBoletos from "../../assets/emissaoDeBoletos.jpeg";

export function Serviços() {
  return (
    <section
      id="servicos"
      className="w-full min-h-screen flex items-center justify-center corpo bg-bg-servicos"
    >
      <div className="conteudo space-y-3 ">
        <p className="text-primary-dark">Soluções para cartórios</p>
        <h2 className="">Facilitamos seu dia a dia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card hover:scale-105 transition-transform duration-300 group">
            <img
              src={licenciamentoMensal}
              alt="Licenciamento Mensal"
              className="w-full h-auto"
            />
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
            <img
              src={emissaoDeBoletos}
              alt="Emissão de Boletos"
              className="w-full h-auto"
            />
            <div className="card-desc">
              <h3 className="group-hover:text-primary-dark">
                Emissão de boletos
              </h3>
              <p className="">Automatize a cobrança com facilidade.</p>
            </div>
          </div>

          <div className="card hover:scale-105 transition-transform duration-300 group">
            <img
              src={cadastroDeClientes}
              alt="Cadastro de Clientes"
              className="w-full h-auto"
            />
            <div className="card-desc">
              <h3 className="group-hover:text-primary-dark">
                Cadastro de Clientes
              </h3>
              <p className="">Facilite a gestão dos seus clientes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
