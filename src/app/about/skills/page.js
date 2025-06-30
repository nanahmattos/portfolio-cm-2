"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Skills = () => {
  const content = [
    { ferramenta: "HMTL5", porcentagem: 100, icon: "/icons/html5.svg" },
    { ferramenta: "CSS3", porcentagem: 100, icon: "/icons/css3.svg" },
    { ferramenta: "JavaScript", porcentagem: 100, icon: "/icons/javascript.svg" },
    { ferramenta: "TypeScript", porcentagem: 80, icon: "/icons/typescript.svg" },
    { ferramenta: "PHP", porcentagem: 20, icon: "/icons/php.svg" },
    { ferramenta: "SQL", porcentagem: 50, icon: "/icons/sql.svg" },
    { ferramenta: "React", porcentagem: 70, icon: "/icons/react.svg" },
    { ferramenta: "Vue", porcentagem: 100, icon: "/icons/vue.svg" },
    { ferramenta: "Next.js", porcentagem: 60, icon: "/icons/nextjs.svg" },
    { ferramenta: "Quasar", porcentagem: 100, icon: "/icons/quasar.svg" },
    { ferramenta: "Bootstrap", porcentagem: 80, icon: "/icons/bootstrap.svg" },
    { ferramenta: "Tailwind", porcentagem: 60, icon: "/icons/tailwind.svg" },
    { ferramenta: "Sass", porcentagem: 100, icon: "/icons/sass.svg" },
    { ferramenta: "Styled Components", porcentagem: 100, icon: "/icons/styledcomponents.svg" },
    { ferramenta: "Figma", porcentagem: 100, icon: "/icons/figma.svg" },
    { ferramenta: "Git", porcentagem: 70, icon: "/icons/git.svg" },
    { ferramenta: "Node.js", porcentagem: 40, icon: "/icons/nodejs.svg" },
    { ferramenta: "Cypress", porcentagem: 60, icon: "/icons/cypress.svg" },
    { ferramenta: "MySQL", porcentagem: 40, icon: "/icons/mysql.svg" },
  ];

  const [progress, setProgress] = useState(
    content.map(() => 0) // inicia com 0% para todos
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) =>
        prev.map((val, i) =>
          val < content[i].porcentagem ? val + 1 : val
        )
      );
    }, 10); // velocidade da animação

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full flex flex-col">
      <h3 className="title-primary">Habilidades</h3>
      <p className="subtitle-primary" >Skills</p>

      <div className="overflow-y-auto flex-1 mt-4 pr-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
          {content.map((item, index) => {
            const grau = `${progress[index] * 3.6}deg`; // porcentagem em graus

            return (
              <div key={index} className="flex flex-col items-center gap-2">
                <div
                  className="w-24 h-24 rounded-full relative flex items-center justify-center transition-all duration-500"
                  style={{
                    background: `conic-gradient(#22c55e ${grau}, #303231 0deg)`,
                  }}
                >
                  <div className="w-20 h-20 bg-gray-950 rounded-full flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.ferramenta}
                      width={40}
                      height={40}
                      className="invert"
                    />
                  </div>
                </div>
                <p className="text-white text-sm">{item.ferramenta}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
