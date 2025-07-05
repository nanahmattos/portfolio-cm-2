"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";


export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const fullText =
    pathname === "/about" ? "Olá, seja bem-vindo!" : "Carolina Mattos";

  const prevFullText = useRef(fullText);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768;
      setScrolled(isMobile && window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Inicia digitação somente quando o texto muda
  useEffect(() => {
    if (prevFullText.current !== fullText) {
      setTypedText("");
      setIndex(0);
      prevFullText.current = fullText;
    }
  }, [fullText]);

  // Animação de digitação
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  const navLinks = [
    { href: "/about", label: "Sobre" },
    { href: "/projects", label: "Projetos" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md" : ""
      }`}
    >
      <div className="container mx-auto py-4 px-2 flex justify-between items-center">
      
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
        <div className="flex items-center">
          <a
            href="https://wa.me/5511959379003" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center px-2 py-2 rounded-full bg-white text-green-600 gap-1 hover:bg-gray-100 transition text-md"
          >
            <img
              src="/icons/icon_wpp.webp"
              alt="WhatsApp"
              width={20}
              height={20}
               
            />
            <span>Vamos conversar?</span>
          </a>
          {/* <button className="hidden md:block px-4 py-2 rounded-full bg-green-600 text-white font-bold hover:bg-green-500 transition">
            Vamos conversar?
          </button> */}
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
