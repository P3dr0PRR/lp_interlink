import { days } from "./contato";

import mail from "../../assets/mail.png";
import location from "../../assets/location.png";

import { useState } from "react";

export function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [aceito, setAceito] = useState(false);

  function handleSubmit() {
    if (!nome || !email || !telefone || !mensagem || !aceito) {
      alert("Preencha todos os campos!");
      return;
    }
    alert(`Mensagem enviada com sucesso por ${nome}!`);
  }

  return (
    <section
      id="contato"
      className="w-full min-h-screen flex flex-col items-center justify-center corpo"
    >
      <div className="flex flex-col md:flex-row w-full">
        <div className="conteudo space-y-3">
          <p className="text-primary-dark">Fale conosco</p>
          <h2 className="">Estamos prontos para ajudar!</h2>
          <div className="flex flex-col md:flex-row ">
            <div className=" flex flex-col w-full">
              <div className=" flex flex-col justify-center items-start p-6">
                <label htmlFor="nome" className="mb-2">
                  Nome:
                </label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  id="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="border border-gray-500 rounded px-3 py-2 w-full"
                />
              </div>

              <div className=" flex flex-col justify-center items-start p-6">
                <label htmlFor="email" className="mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  placeholder="Seu email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-500 rounded px-3 py-2 w-full"
                />
              </div>

              <div className=" flex flex-col justify-center items-start p-6">
                <label htmlFor="telefone" className="mb-2">
                  Telefone:
                </label>
                <input
                  type="tel"
                  placeholder="Seu telefone"
                  id="telefone"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="border border-gray-500 rounded px-3 py-2 w-full"
                />
              </div>

              <div className=" flex flex-col justify-center items-start p-6">
                <label htmlFor="mensagem" className="mb-2">
                  Mensagem
                </label>
                <textarea
                  placeholder="Deixe sua mensagem aqui"
                  id="mensagem"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="border border-gray-500 rounded px-3 py-2  h-50 w-full"
                />
              </div>
            </div>
            <div className="p-6.5 bg-bg-servicos w-full space-y-6">
              <h3>Fale conosco</h3>
              <div className="flex group transition-transform hover:scale-110 items-center mt-2">
                <img src={mail} alt="Email" className="w-6 h-6 mr-2" />
                <p className="group-hover:text-primary-dark group-hover:underline">
                  rocha@abracops.info
                </p>
              </div>

              <div className="">
                <h3>Localização</h3>
                <div className="flex group transition-transform hover:scale-110 items-center mt-2">
                  <img
                    src={location}
                    alt="Localização"
                    className="w-6 h-6 mr-2"
                  />
                  <p className="group-hover:text-primary-dark group-hover:underline">
                    Uberlândia, MG BR
                  </p>
                </div>
              </div>

              <div className="h-fit space-y-7">
                <h3>Horario</h3>
                {days.map((day) => (
                  <div
                    key={day.dia}
                    className="flex  w-full justify-between items-center gap-6"
                  >
                    <div className="flex group transition-transform hover:scale-110 items-center">
                      <p className="group-hover:text-primary-dark group-hover:underline  ">
                        {day.dia.toLocaleLowerCase()}
                      </p>
                    </div>
                    <p>{day.horario}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-start mt-10">
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="aceito"
            checked={aceito}
            onChange={(e) => setAceito(e.target.checked)}
            className="mt-1"
          />
          <label htmlFor="aceito" className="text-sm text-gray-600">
            Autorizo o uso dos meus dados para contato.{" "}
            <span className="text-red-500">*</span>
          </label>
        </div>
        <button onClick={handleSubmit} className="box-button w-full">
          Enviar Mensagem
        </button>
      </div>
    </section>
  );
}
