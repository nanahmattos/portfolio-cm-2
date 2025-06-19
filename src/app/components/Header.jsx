"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "Sobre" },
    { href: "/projects", label: "Projetos" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header className="sticky container">
      <div className="p-8 flex justify-between items-center">
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium hover:text-green-400 transition ${
                pathname === link.href ? "text-green-400" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/" className="text-xl font-bold">
          <span className="text-green-400">{"{"}</span>
          <span className="text-white"> Carolina Mattos </span>
          <span className="text-green-400">{"}"}</span>
        </Link>
        <button className="text-black p-2 bg-white rounded-full">
          Vamos conversar?
        </button>
        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden bg-white px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-2 text-sm font-medium ${
                pathname === link.href ? "text-green-400" : "text-gray-700"
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
