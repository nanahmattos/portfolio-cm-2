"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/about", label: "Sobre", icon: "/icons/person.svg" },
    {
      href: "/about/experience",
      label: "Experiência",
      icon: "/icons/tools.svg",
    },
    {
      href: "/about/certificates",
      label: "Certificados",
      icon: "/icons/certificate.svg",
    },
    { href: "/about/skills", label: "Habilidades", icon: "/icons/tools.svg" },
  ];

  return (
    <div className="md:hidden">
      <nav className="fixed bottom-1 left-0 right-0 z-50 bg-white/10 rounded-xl backdrop-blur-md border border-white/20 shadow-lg p-2 mx-1 md:mx-2  flex justify-around items-center">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex flex-col items-center justify-center text-xs transition-all ${
              pathname === link.href ? "text-green-400" : "text-white"
            }`}
          >
            <Image
              src={link.icon}
              alt={link.label}
              width={20}
              height={20}
              className="mb-1"
            />
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
