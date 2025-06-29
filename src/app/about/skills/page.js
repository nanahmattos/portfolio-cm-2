"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Skills = () => {
  const content = [
    { ferramenta: "HTML", porcentagem: 90, icon: "/icons/linkedin.svg" },
    { ferramenta: "CSS", porcentagem: 80, icon: "/icons/linkedin.svg" },
    { ferramenta: "JavaScript", porcentagem: 70, icon: "/icons/linkedin.svg" },
    { ferramenta: "React", porcentagem: 60, icon: "/icons/linkedin.svg" },
    { ferramenta: "Vue", porcentagem: 75, icon: "/icons/linkedin.svg" },
    { ferramenta: "TypeScript", porcentagem: 65, icon: "/icons/linkedin.svg" },
    { ferramenta: "HTML", porcentagem: 90, icon: "/icons/linkedin.svg" },
    { ferramenta: "CSS", porcentagem: 80, icon: "/icons/linkedin.svg" },
    { ferramenta: "JavaScript", porcentagem: 70, icon: "/icons/linkedin.svg" },
    { ferramenta: "React", porcentagem: 60, icon: "/icons/linkedin.svg" },
    { ferramenta: "Vue", porcentagem: 75, icon: "/icons/linkedin.svg" },
    { ferramenta: "TypeScript", porcentagem: 65, icon: "/icons/linkedin.svg" },
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
    }, 20); // velocidade da animação

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3 className="text-6xl leading-[1.2] text-white">Habilidades</h3>
      <p className="text-2xl tracking-[0.2em] font-thin text-white" >Skills</p>

      <div className="max-h-[60vh] mt-4 pr-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
          {content.map((item, index) => {
            const grau = `${progress[index] * 3.6}deg`; // porcentagem em graus

            return (
              <div key={index} className="flex flex-col items-center gap-2">
                <div
                  className="w-24 h-24 rounded-full relative flex items-center justify-center transition-all duration-500"
                  style={{
                    background: `conic-gradient(#22c55e ${grau}, #1f2937 0deg)`,
                  }}
                >
                  <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.ferramenta}
                      width={40}
                      height={40}
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
