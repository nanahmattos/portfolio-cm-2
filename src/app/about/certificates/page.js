const Certificates = () => {
  const content = [
    {
      duracao: "2024 - Atualmente",
      curso: "Engenharia de Software",
      formacao: "Pós Graduação Lato Sensu",
      instituicao: "Faculdade Descomplica",
      type: "graduacao",
    },
    {
      duracao: "2024 - Atualmente",
      curso: "Curso Livre de UI/UX",
      formacao: "Curso Livre",
      instituicao: "Plataforma XYZ",
      type: "livre",
    },
    {
      duracao: "2024 - Atualmente",
      curso: "Engenharia de Software",
      formacao: "Pós Graduação Lato Sensu",
      instituicao: "Faculdade Descomplica",
      type: "graduacao",
    },
    {
      duracao: "2024 - Atualmente",
      curso: "Engenharia de Software",
      formacao: "Pós Graduação Lato Sensu",
      instituicao: "Faculdade Descomplica",
      type: "livre",
    },
    {
      duracao: "2024 - Atualmente",
      curso: "Curso Livre de UI/UX",
      formacao: "Curso Livre",
      instituicao: "Plataforma XYZ",
      type: "livre",
    },
    {
      duracao: "2024 - Atualmente",
      curso: "Engenharia de Software",
      formacao: "Pós Graduação Lato Sensu",
      instituicao: "Faculdade Descomplica",
      type: "graduacao",
    },
  ];

  return (
    <div className="h-full flex flex-col">
      <h3 className="title-primary">Educação</h3>
      <p className="subtitle-primary">Certificados</p>

      <div className="overflow-y-auto flex-1 mt-4 pr-2">
        {content.map((item, index) => {
          const isLivre = item.type === "livre";

          return (
            <div key={index} className="grid grid-cols-4 items-stretch">
              <div className="text-center flex items-center col-span-1 justify-center px-2">
                <p className={isLivre ? "text-green-400" : "text-white"}>
                  {item.duracao}
                </p>
              </div>

              <div className="flex justify-center col-span-1 relative">
                <div className="w-[1px] bg-white h-full relative">
                  <div
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-10 ${
                      isLivre ? "w-2 h-2 bg-green-400" : "w-3 h-3 bg-white"
                    }`}
                  />
                </div>
              </div>

              <div
                className={`col-span-2 flex flex-col py-4 px-2 ${
                  isLivre ? "text-green-400" : "text-white"
                }`}
              >
                <p className={isLivre ? "text-xl" : "text-2xl"}>{item.curso}</p>
                <p className="font-thin">
                  {item.formacao} - {item.instituicao}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificates;
