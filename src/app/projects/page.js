"use client";

import { useState } from "react";
import Image from "next/image";

const ProjetosPage = () => {
  const projects = [
    {
      title: "Nanah Mattos",
      image: "/images/nanahmattos.png",
      description:
        "E-commerce desenvolvido para a marca Nanah Mattos com foco em UX e performance.",
    },
    {
      title: "Landing Page Spa",
      image: "/images/nanahmattos.png",
      description:
        "Página de apresentação com agendamento online e integração com Google Agenda.",
    },
    {
      title: "Dashboard Financeiro",
      image: "/images/nanahmattos.png",
      description:
        "Sistema de controle de receitas e despesas com gráficos dinâmicos.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < projects.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  return (
    <div>
      {/* Detalhes do projeto selecionado */}
      <div className="relative p-6 mb-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg  h-[calc(80vh-104px)]">
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className={`absolute p-2 top-1/2 left-[-24px] bg-white rounded-full transform -translate-y-1/2 ${
            activeIndex === 0
              ? "opacity-30 cursor-not-allowed"
              : "hover:scale-110"
          }`}
        >
          <Image
            src="/icons/chevron_left.svg"
            alt="left"
            width={30}
            height={30}
            className="invert"
          />
        </button>

        {/* Botão Próximo */}
        <button
          onClick={handleNext}
          disabled={activeIndex === projects.length - 1}
          className={`absolute p-2 top-1/2 right-[-24px] rounded-full bg-white transform -translate-y-1/2 ${
            activeIndex === projects.length - 1
              ? "opacity-30 cursor-not-allowed"
              : "hover:scale-110"
          }`}
        >
          <Image
            src="/icons/chevron_right.svg"
            alt="right"
            width={30}
            height={30}
            className="invert"
          />
        </button>
        <div className="grid md:grid-cols-2 items-center ">
          <div>
            <Image
              src={activeProject.image}
              alt={activeProject.title}
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-2">
              {activeProject.title}
            </h2>
            <p className="text-white text-lg">{activeProject.description}</p>
          </div>
        </div>
      </div>

      {/* Miniaturas clicáveis */}
      <div className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg h-20vh">
        <div className="flex gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`cursor-pointer rounded-lg border-2 transition-all ${
                index === activeIndex
                  ? "border-green-400 scale-105"
                  : "border-transparent hover:border-white/50"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={100}
                height={100}
                className="rounded-lg object-cover w-[100px] h-[100px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjetosPage;
