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
    <div className="hidden md:block">
      <nav className="mr-2 justify-center flex p-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg h-full flex-col gap-4 z-50 relative ">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <div key={link.href} className="group">
              <Link
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition `}
              > 
                <Image
                  src={link.icon}
                  alt={link.label}
                  width={30}
                  height={30}
                
                />
                <span className="menu-icone  opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                  <Image
                    src={link.icon}
                    alt={link.label}
                    width={25}
                    height={25}
                    className="invert mr-1"
                  />
                  {link.label}
                </span>
              </Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
