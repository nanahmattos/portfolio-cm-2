"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  const fullText =
    pathname === "/about" ? "Olá, seja bem-vindo!" : "Carolina Mattos";

  useEffect(() => {
    setTypedText("");
    setIndex(0);
  }, [pathname]);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 80); // velocidade de digitação
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  const navLinks = [
    { href: "/about", label: "Sobre" },
    { href: "/projects", label: "Projetos" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Navegação desktop */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg font-medium hover:text-green-400 transition ${
                pathname === link.href ? "text-green-400" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            ☰
          </button>
        {/* Nome com animação */}
        <Link
          href="/"
          className="text-xl font-bold font-mono whitespace-nowrap"
        >
          <span className="text-green-400">{"{"}</span>
          <span className="text-white"> {typedText} </span>
          <span className="text-green-400">{"}"}</span>
        </Link>

        {/* Botão + mobile menu */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block px-4 py-2 rounded-full bg-green-400 text-black hover:bg-white hover:text-green-400 transition">
            Vamos conversar?
          </button>
        </div>
      </div>

      {/* Navegação mobile */}
      {menuOpen && (
        <nav className="md:hidden bg-black/80 px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-2 text-sm font-medium ${
                pathname === link.href ? "text-green-400" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
