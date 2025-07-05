"use client";

import Link from "next/link";
//import Image from "next/image";
import { usePathname } from "next/navigation";
//import { Icon } from 'lucide-react';
import { DynamicIcon } from 'lucide-react/dynamic';

export default function Nav() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/about", label: "Sobre", icon: "user" },
    {
      href: "/about/experience",
      label: "Experiência",
      icon: "briefcase-business",
    },
    {
      href: "/about/certificates",
      label: "Certificados",
      icon: "graduation-cap",
    },
    {
      href: "/about/skills",
      label: "Habilidades",
      icon: "wrench",
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
               <DynamicIcon name={link.icon} color={isActive ? "#3FF186" : "white"} size={20} />
                
                <span className="menu-icone ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                   <DynamicIcon name={link.icon} color="black" size={15} />
                  
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
