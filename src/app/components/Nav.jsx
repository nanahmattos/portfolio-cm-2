"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
      label: "Formação",
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
                className={`flex items-center gap-3 px-2 py-2 rounded-md text-sm font-medium transition `}
              > 
               <DynamicIcon name={link.icon} color={isActive ? "#3FF186" : "white"}  size={20} alt={link.label} />
                
                <span className="menu-icone gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                   <DynamicIcon name={link.icon} color="black" size={15} alt={link.label}  />
                  
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
