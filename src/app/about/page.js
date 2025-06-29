"use client";
import Image from "next/image";
const AboutPage = () => {
  const mediaLinks = [
    {
      icon: "/icons/linkedin.svg",
      alt: "LinkedIn",
      label: "Carolina Mattos",
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
    <div className="text-center flex flex-col" style={{margin: "0 auto", maxWidth: "600px"}}>
        
      <Image
        src="/images/nanahmattos.png"
        alt="Foto de Carolina Mattos"
        width={300}
        height={300}
        style={{margin: "0 auto"}}
      />
      <h3 className="text-3xl text-white leading-[1.2]">Carolina Mattos, 27 anos</h3>
      <p className="text-2xl text-white tracking-[0.2em] font-thin">Desenvolvedora Front-end</p>
      <p className="text-lg text-white mt-4">
        Destaco-me pela criatividade, proatividade e trabalho em equipe, além da
        organização e aprendizado ágil. Tenho experiência com HTML, CSS, React,
        TypeScript, Vue.js e JavaScript, sempre priorizando código limpo e
        documentação eficiente.
      </p>

      <div className="mt-6">
        <ul className="flex justify-center items-center gap-2">
          {mediaLinks.map((media) => (
            <li  key={media.alt}>
              <a
                href={media.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 button-media"
              >
                <Image
                  src={media.icon}
                  alt={media.alt}
                  width={20}
                  height={20}
                  style={{ filter: "invert(1)" }}
                />
                {media.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
