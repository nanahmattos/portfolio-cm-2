"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Nav() {
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
    {
      href: "/about/skills",
      label: "Habilidades",
      icon: "/icons/tools.svg",
    },
  ];
  return (
    <div>
      <nav className="mr-4 p-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg h-full flex flex-col gap-4">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition 
              ${
                isActive
                  ? "text-green-400"
                  : "hover:text-green-400"
              }`}
            >
              <Image src={link.icon} alt={link.label} width={20} height={20} />
              {/* {link.label} */}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
