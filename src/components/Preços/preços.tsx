export function Preços() {
  return (
    <section
      id="precos"
      className="w-full min-h-screen flex items-center justify-center corpo py-20"
    >
      <div className="conteudo space-y-3 ">
        <p className="text-primary-dark">Planos acessíveis</p>
        <h2 className="">Flexibilidade para seu cartório</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="">
            <div className="border p-2 rounded-sm shadow-md">
              <h3 className="">Licenciamento Mensal</h3>
              <p className="">Ideal para cartórios ativos</p>
              <div className="my-3 space-y-3">
                <p>R$200/mês</p>
                <p>
                  O Licenciamento Mensal é ideal para cartórios que desejam
                  acesso contínuo ao nosso sistema para protestos de títulos e
                  documentos. Com este pacote, você garante o uso completo das
                  funcionalidades do software, incluindo a emissão automática de
                  boletos bancários. Além disso, você se beneficia de
                  atualizações regulares e suporte técnico dedicado, permitindo
                  que sua equipe trabalhe de forma mais eficiente. Este pacote é
                  perfeito para cartórios que buscam otimizar seus processos e
                  aumentar a produtividade, sem preocupações com custos
                  adicionais inesperados. Experimente a tranquilidade de um
                  software em constante evolução.
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="border p-2 rounded-sm shadow-md">
              <h3 className="">Cobrança única</h3>
              <p className="">Flexível e sem compromisso</p>
              <div className="my-3 space-y-3">
                <p>R$100/pedido</p>
                <p>
                  A Cobrança Única é perfeita para cartórios que precisam de um
                  acesso pontual ao nosso sistema sem compromisso mensal. Este
                  pacote oferece uma solução flexível para aqueles que realizam
                  protestos esporádicos e preferem pagar apenas pelo que
                  utilizam. Com a emissão de boletos bancários instantâneos,
                  você pode atender rapidamente às demandas dos seus clientes,
                  mantendo a qualidade e a eficiência. Ideal para cartórios que
                  desejam experimentar nosso sistema antes de se comprometer com
                  um licenciamento mensal. Aproveite a facilidade e a agilidade
                  que a Cobrança Única proporciona ao seu negócio.
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="border p-2 rounded-sm shadow-md">
              <h3 className="">Suporte técnico adicional</h3>
              <p className="">Apoio especializado quando precisar</p>
              <div className="my-3 space-y-3">
                <p>R$150/sessão</p>
                <p>
                  O Suporte Técnico Adicional oferece assistência especializada
                  para cartórios que necessitam de ajuda extra na utilização de
                  nosso sistema. Este serviço esporádico é ideal para resolver
                  dúvidas, otimizar processos ou solucionar problemas técnicos
                  que possam surgir. Com um atendimento personalizado e rápido,
                  garantimos que você aproveite ao máximo todos os recursos do
                  nosso software. Este pacote é especialmente útil para equipes
                  que estão se adaptando ao sistema e desejam garantir que tudo
                  funcione perfeitamente. Invista em suporte adicional e
                  maximize sua eficiência operacional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
