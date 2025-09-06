"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const ProjetosPage = () => {
  const projects = [
    {
      title: "BTMS-Labs",
      subtitle: "Vue • JS • Quasar • Sass",
      image: "/images/projetos/btmslab.png",
      description:
        "Projeto desenvolvido para uma empresa de tecnologia especializada em soluções de gerenciamento para o setor de turismo. Utilizei Vue, JavaScript, Quasar Framework e Sass para construção do sistema. Além do desenvolvimento do site, também criei a identidade visual e a logo da marca.",

      site: "https://pedrosoftsite.vercel.app/#/",
      github: "https://github.com/nanahmattos/pedrosoftsite",
    },
    {
      title: "El Montés Ginásio de Escalada",
      subtitle: "Vue.js • Bootstrap • JavaScript",
      image: "/images/projetos/elmontes.png",
      description:
        "Landing page desenvolvida para um ginásio de escalada indoor. A proposta era criar um site simples, com foco em imagens e informações introdutórias sobre escalada, um esporte ainda pouco conhecido na cidade. Utilizei Vue.js na construção da interface, Bootstrap para a estilização responsiva e JavaScript para adicionar interatividade.",

      site: "https://elmontes.com.br/",
      github: "",
    },
    {
      title: "Meu segundo Portfólio",
      subtitle: "Next.js • JS • React • Tailwind",
      image: "/images/projetos/portfolio.png",
      description:
        "Este é meu segundo portfólio, desenvolvido com foco em performance e design responsivo. Utilizei Next.js para renderização otimizada, Tailwind CSS para estilização moderna e JavaScript para interatividade.",

      site: "https://pedrosoftsite.vercel.app/#/",
      github: "https://github.com/nanahmattos/pedrosoftsite",
    },
    {
      title: "Centro Automotivo",
      subtitle: "Vue • JS • Quasar • SASS",
      image: "/images/projetos/cam.png",

      description:
        "Landing page criada para um comércio de oficina mecânica, com foco em apresentar serviços de forma direta e visual. O projeto foi desenvolvido com Vue, Quasar Framework, JavaScript e estilização em Sass.",

      site: "https://pedrosoftsite.vercel.app/#/",
      github: "https://github.com/nanahmattos/pedrosoftsite",
    },
    {
      title: "E-Food",
      subtitle: "React • TS • AJAX/API • Redux",
      image: "/images/projetos/efood.png",
      description:
        "Nesse projeto pessoal desenvolvi um site de compras utilizando React, TypeScript, React Router, Redux para dinâmica, Styled Components para estilização e AJAX para a integração da API.",
      site: "https://projetct6-e-food.vercel.app/",
      github: "https://github.com/nanahmattos/projetct6_eFood",
    },
    {
      title: "Rayman Legends",
      subtitle: "Bootstrap",
      description:
        "Para esta landing page dedicada ao jogo Rayman Legends, concentrei-me em estudos do bootstrap e responsividade. O resultado é uma interface adaptativa e eficiente.",
      image: "/images/projetos/raymanLegends.png",
      site: "https://rayman-legends-game.vercel.app/",
      git: "https://github.com/nanahmattos/landingPage_rayman_legends.git",
    },
    {
      title: "Netflix Barbie",
      subtitle: "HTML • CSS • SASS • JS",
      description:
        "Neste projeto, desenvolvi um clone da página inicial de compra da Netflix, incorporando o tema da Barbie. A landing page foi criada por meio de estudos em SASS, JavaScript, HTML e CSS, destacando também a utilização eficaz das ferramentas do DevTools.",
      image: "/images/projetos/barbie_vercel.png",
      site: "https://netflix-barbie.vercel.app/",
      git: "https://github.com/nanahmattos/ebac_task_netflix_barbie.git",
    },
    {
      title: "Clone Disney+",
      subtitle: "HTML • CSS • SASS • JS",
      description:
        "Realizei o clone da página inicial de compra da DisneyPlus, estabelecendo-a como uma referência essencial para o projeto Netflix Barbie-verso. Assim como no primeiro projeto, empreguei SASS, JavaScript, HTML e boas práticas de CSS para garantir uma experiência de usuário consistente.",
      image: "/images/projetos/cloneydisney.png",
      site: "https://clone-disneyplus-hazel-delta.vercel.app/",
      git: "https://github.com/nanahmattos/clone_disneyplus.git",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const activeProject = projects[activeIndex];

  const scrollToActive = (index) => {
    const container = containerRef.current;
    if (container) {
      const activeItem = container.children[index];
      if (activeItem) {
        // Faz o scroll horizontal para que o item ativo fique visível
        activeItem.scrollIntoView({ behavior: "smooth", inline: "center" });
      }
    }
  };
  const handlePrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -250, behavior: "smooth" }); 
    }
    if (activeIndex > 0) setActiveIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
    if (activeIndex < projects.length - 1) setActiveIndex((prev) => prev + 1);
  };

  useEffect(() => {
    scrollToActive(activeIndex);
  }, [activeIndex]);

  return (
    <div className="h-full flex flex-col">
      <div className="h-full w-full p-2 md:p-6 mb-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg justify-center flex">
        <div className="overflow-y-auto flex-1 flex justify-center items-center">
          <div className="grid md:grid-cols-2 items-center max-w-5xl w-full gap-4">
            <div className="flex justify-center items-center ">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                width={600}
                height={400}
                className="object-cover rounded-md"
              />
            </div>
            <div className="p-2">
              <h3 className="text-3xl text-white font-semibold mb-2">
                {activeProject.title}
              </h3>
              <p className="text-white text-xl tracking-[0.2em] font-thin">
                {activeProject.subtitle}
              </p>
              <p className="text-white"> {activeProject.description}</p>

              <div className="flex w-full max-w-md mt-2">
                <a
                  href={activeProject.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center w-1/2 rounded-l-[25px] px-4 py-2 cursor-pointer bg-black text-white hover:bg-green-400 hover:text-black transition-colors"
                >
                  Ver Site
                </a>

                <a
                  href={activeProject.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-center w-1/2 rounded-r-[25px] px-4 py-2 transition-colors
    ${
      !activeProject.github
        ? "bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none"
        : "bg-white text-black hover:bg-green-400 cursor-pointer"
    }`}
                >
                  &lt;/&gt; GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg w-full ">
        <div className="flex justify-end p-2">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className={`mr-2  bg-white rounded-full  ${
              activeIndex === 0
                ? "opacity-30 cursor-not-allowed"
                : "hover:scale-110"
            }`}
          >
            <div>
              <Image
                src="/icons/chevron_left.svg"
                alt="left"
                width={30}
                height={30}
                className="invert"
              />
            </div>
          </button>
          <button
            onClick={handleNext}
            disabled={activeIndex === projects.length - 1}
            className={` rounded-full bg-white   ${
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
        </div>
        <div
          ref={containerRef}
          className="overflow-x-auto overflow-y-hidden px-4 pr-0 py-2"
        >
          <div className="flex gap-4 w-fit max-w-full">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`min-w-[150px] cursor-pointer rounded-lg border-2 transition-all ${
                  index === activeIndex
                    ? "border-green-400 scale-105"
                    : "border-transparent hover:border-white/50"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={150}
                  height={100}
                  className="rounded-lg object-cover w-full h-[100px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjetosPage;
