"use client";

import { useState } from "react";
import Image from "next/image";

const ProjetosPage = () => {
  const projects = [
    {
      title: "Clone Disney+",
      subtitle: "HTML • CSS • SASS • JS",
      image: "/images/nanahmattos.png",
      description:
        "Realizei o clone da página inicial de compra da DisneyPlus, estabelecendo-a como uma referência essencial para o projeto Netflix Barbie-verso. Assim como no primeiro projeto, empreguei SASS, JavaScript, HTML e boas práticas de CSS para garantir uma experiência de usuário consistente.",
      github: "https://github.com/nanahmattos",
      site: "https://nanahmattos-ecommerce.vercel.app/",
    },
    {
      title: "Clone Disney+",
      subtitle: "HTML • CSS • SASS • JS",
      image: "/images/nanahmattos.png",
      description:
        "Realizei o clone da página inicial de compra da DisneyPlus, estabelecendo-a como uma referência essencial para o projeto Netflix Barbie-verso. Assim como no primeiro projeto, empreguei SASS, JavaScript, HTML e boas práticas de CSS para garantir uma experiência de usuário consistente.",
      github: "https://github.com/nanahmattos/nanahmattos-ecommerce",
      site: "https://nanahmattos-ecommerce.vercel.app/",
    },
    {
      title: "Clone Disney+",
      subtitle: "HTML • CSS • SASS • JS",
      image: "/images/nanahmattos.png",
      description:
        "Realizei o clone da página inicial de compra da DisneyPlus, estabelecendo-a como uma referência essencial para o projeto Netflix Barbie-verso. Assim como no primeiro projeto, empreguei SASS, JavaScript, HTML e boas práticas de CSS para garantir uma experiência de usuário consistente.",
      github: "https://github.com/nanahmattos/nanahmattos-ecommerce",
      site: "https://nanahmattos-ecommerce.vercel.app/",
    },
    {
      title: "Clone Disney+",
      subtitle: "HTML • CSS • SASS • JS",
      image: "/images/nanahmattos.png",
      description:
        "Realizei o clone da página inicial de compra da DisneyPlus, estabelecendo-a como uma referência essencial para o projeto Netflix Barbie-verso. Assim como no primeiro projeto, empreguei SASS, JavaScript, HTML e boas práticas de CSS para garantir uma experiência de usuário consistente.",
      github: "https://github.com/nanahmattos/nanahmattos-ecommerce",
      site: "https://nanahmattos-ecommerce.vercel.app/",
    },
    {
      title: "Clone Disney+",
      subtitle: "HTML • CSS • SASS • JS",
      image: "/images/nanahmattos.png",
      description:
        "Realizei o clone da página inicial de compra da DisneyPlus, estabelecendo-a como uma referência essencial para o projeto Netflix Barbie-verso. Assim como no primeiro projeto, empreguei SASS, JavaScript, HTML e boas práticas de CSS para garantir uma experiência de usuário consistente.",
      github: "https://github.com/nanahmattos/nanahmattos-ecommerce",
      site: "https://nanahmattos-ecommerce.vercel.app/",
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
      <div className="justify-center w-full relative p-10 mb-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg h-[calc(100vh-125px)] md:h-[calc(80vh-104px)]">
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
        <div className="h-full flex flex-col">
          <div className="grid md:grid-cols-2 items-center overflow-y-auto flex-1">
            <div className="flex justify-center">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                width={200}
                height={200}
                className="object-cover"
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
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center w-1/2 rounded-r-[25px] px-4 py-2 cursor-pointer bg-white text-black hover:bg-green-400 transition-colors"
                >
                  &lt;/&gt; GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg w-full h-fit">
        <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(120px,1fr))] ">
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
                width={150}
                height={100}
                className="rounded-lg object-cover w-full h-[100px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjetosPage;
