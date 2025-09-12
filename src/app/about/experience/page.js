const Experience = () => {
  const content = [
    {
      duracao: "Jan/2024 - Atual",
      empresa: "PedroSoft",
      cargo: "Desenvolvedora Front-end",
      descricao:
        "Campo Grande/MS • Desenvolvo softwares de gerenciamento financeiro, rotas de transporte e reservas em atrativos destinados a agências de turismo. Integrei pagamentos Mercado pago e Cielo, além de emissão de nota fiscal eletrônica de serviços. Experiência em ferramentas como HTML, CSS, JavaScript, Vue.js, SASS, Figma, Pinia, Vuex, Cypress, MySQL e Quasar Framework.",
    },
    {
      duracao: "Jan/2022 - Dez/2023",
      empresa: "TK7 Marketing",
      cargo: "Diretora de arte",
      descricao:
        "São Paulo/SP • Encarreguei-me da gestão de projetos artísticos, incluindo Branding e Campanhas. Liderei a criação e configuração de sites e-commerce em plataformas como Loja Integrada, Wix e Nuvem Shop. Experiência em ferramentas como Adobe Photoshop, Adobe Illustrator, Adobe After Effects e Adobe Premiere.",
    },
    {
      duracao: "Abr/2020 - Dez/2021",
      empresa: "C.A.M (Centro Automotivo)",
      cargo: "Auxiliar Administrativo",
      descricao:
        "Campo Grande/MS • Gerenciei operações financeiras com destaque na organização e administração eficaz através do Microsoft Excel. Responsável pela emissão de notas fiscais eletrônicas, elaboração de orçamentos e atendimento ao cliente. Experiência em ferramentas: Google Docs, Pacote Microsoft Office e Emissor NF-e Sebrae.",
    },
  ];
  return (
    <div className="h-full flex flex-col">
      <h3 className="title-primary">Experiência</h3>
      <p className="subtitle-primary">Profissional</p>

      <div className="overflow-y-auto flex-1 mt-4 md:pr-2">
        {content.map((item, index) => {
          return (
            <div key={index} className="grid grid-cols-6 items-stretch">
              <div className="text-center flex items-center col-span-1 justify-center md:px-2">
                <p className="text-xs sm:text-md text-white">{item.duracao}</p>
              </div>

              <div className="flex justify-center col-span-1 relative">
                <div className="w-[1px] bg-white h-full relative">
                  <div className=" w-3 h-3 bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-10 " />
                </div>
              </div>

              <div className="col-span-4 flex flex-col py-4 md:px-2 ">
                <p className="title-secondary">{item.empresa}</p>
                <p className="subtitle-secondary">{item.cargo}</p>
                <p className="text-secondary">{item.descricao}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
