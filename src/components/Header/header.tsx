import { useState } from "react";
import menu from "../../assets/menu.png";
import close from "../../assets/close.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white flex items-center justify-center p-[20px] fixed z-10">
      {!isMenuOpen && (
        <div className="flex justify-between w-full px-[20px]">
          <a className="logo">Interlink</a>
          <button
            className="block md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src={menu} alt="Menu" className="w-6 h-6" />
          </button>
          <nav className="hidden md:flex w-full items-center justify-end gap-8">
            <a className="links" href="#inicio">
              Início
            </a>
            <a className="links" href="#sobre">
              Sobre
            </a>
            <a className="links" href="#servicos">
              Serviços
            </a>
            <a className="links" href="#precos">
              Preços
            </a>
            <a className="contact-button" href="#contato">
              Contato
            </a>
          </nav>
        </div>
      )}

      {isMenuOpen && (
        <div className="flex flex-col items-center gap-4 py-4 md:hidden w-full">
          <div className="w-full flex items-center justify-end px-4">
            <button onClick={() => setIsMenuOpen(false)}>
              <img src={close} alt="Close" className="w-6 h-6" />
            </button>
          </div>
          <nav className="w-full px-11 space-y-3">
            <ul className="flex flex-col w-full space-y-3">
              <li className="w-full">
                <a
                  className="links py-1 border-text-base border-b w-full"
                  href="#inicio"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  className="links py-1 border-text-base border-b w-full"
                  href="#sobre"
                >
                  Sobre
                </a>
              </li>
              <li className="w-full">
                <a
                  className="links py-1 border-text-base border-b w-full"
                  href="#servicos"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a className="links py-1 border-text-base" href="#precos">
                  Preços
                </a>
              </li>
            </ul>
            <div className="flex text-center w-full">
              <a className="contact-button w-full" href="#contato">
                Contato
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
