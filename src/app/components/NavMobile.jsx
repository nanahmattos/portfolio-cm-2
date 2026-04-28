"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DynamicIcon } from "lucide-react/dynamic";
export default function MobileNav() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/about", label: "Sobre", icon: "user" },
    {
      href: "/about/experience",
      label: "Experiência",
      icon: "briefcase-business",
    },
    {
      href: "/about/certificados",
      label: "Certificados",
      icon: "graduation-cap",
    },
    { href: "/about/skills", label: "Habilidades", icon: "wrench" },
    { href: "/about/projects", label: "Projetos", icon: "folder-open-dot" },
  ];

  return (
    <div className="md:hidden">
      <nav className="fixed bottom-1 left-0 right-0 z-50 bg-white/10 rounded-xl backdrop-blur-md border border-white/20 shadow-lg p-2 mx-1 md:mx-2  flex justify-around items-center">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return(
          <Link
            key={link.href}
            href={link.href}
            className={`flex flex-col items-center justify-center text-xs transition-all text-white`}
          >
           <DynamicIcon name={link.icon} color={isActive ? "#3FF186" : "white"} size={20}  />
            {link.label}
          </Link>
          );
        })}
      </nav>
    </div>
  );
}
