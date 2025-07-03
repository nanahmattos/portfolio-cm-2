"use client";
import Image from "next/image";
const AboutPage = () => {
  const mediaLinks = [
    {
      icon: "/icons/linkedin.svg",
      alt: "LinkedIn",
      label: "carolinamattos98",
      href: "https://www.linkedin.com/in/carolinamattos98/",
    },
    {
      icon: "/icons/github.svg",
      alt: "GitHub",
      label: "nanahmattos",
      href: "https://github.com/nanahmattos",
    },
    {
      icon: "/icons/gmail.svg",
      alt: "Gmail",
      label: "mattos.carolina98@gmail.com",
      href: "mailto:mattos.carolina98@gmail.com",
    },
  ];
  return (
  <div className="flex justify-center items-center w-full h-full overflow-y-auto max-h-[80vh] p-4 sm:p-0">
    <div className="text-center flex flex-col justify-center items-center w-full max-w-2xl">
      <Image
        src="/images/nanahmattos.png"
        alt="Foto de Carolina Mattos"
        width={250}
        height={250}
        className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 object-cover mb-4"
      />
      <h3 className="title-secondary">
        Carolina Mattos, 27 anos
      </h3>
      <p className="subtitle-primary">
        Desenvolvedora Front-end
      </p>
      <p className="text-primary">
        Destaco-me pela criatividade, proatividade e trabalho em equipe, além da
        organização e aprendizado ágil. Tenho experiência com HTML, CSS, React,
        TypeScript, Vue.js e JavaScript, sempre priorizando código limpo e
        documentação eficiente.
      </p>

      <div className="mt-6 w-full">
        <ul className="flex flex-col sm:flex-row justify-center items-center gap-2">
          {mediaLinks.map((media) => (
            <li key={media.alt}>
              <a
                href={media.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 button-media px-2 py-[5px]"
              >
                <Image
                  src={media.icon}
                  alt={media.alt}
                  width={20}
                  height={20}
                  className="invert"
                />
                <span className="text-sm sm:text-base">{media.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

};

export default AboutPage;
