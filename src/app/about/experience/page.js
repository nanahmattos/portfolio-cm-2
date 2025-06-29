const Experience = () => {
  const content = [
    {
      duracao: "2024 - Atualmente",
      empresa: "PedroSoft",
      cargo: "Front-end Developer",
      descricao:
        "Campo Grande/MS • Desenvolvimento web softwares de gerenciamento financeiro, rotas de transporte e reservas em atrativos destinados a agências de turismo. Experiência em ferramentas como HTML, CSS, JavaScript, Vue.js, SASS, Figma, Pinia, Vuex, Cypress e Quasar Framework.",
    },
    {
      duracao: "2023 - Atualmente",
      empresa: "PedroSoft",
      cargo: "Front-end Developer",
      descricao:
        "Campo Grande/MS • Desenvolvimento web softwares de gerenciamento financeiro, rotas de transporte e reservas em atrativos destinados a agências de turismo. Experiência em ferramentas como HTML, CSS, JavaScript, Vue.js, SASS, Figma, Pinia, Vuex, Cypress e Quasar Framework.",
    },
    {
      duracao: "2023 - Atualmente",
      empresa: "PedroSoft",
      cargo: "Front-end Developer",
      descricao:
        "Campo Grande/MS • Desenvolvimento web softwares de gerenciamento financeiro, rotas de transporte e reservas em atrativos destinados a agências de turismo. Experiência em ferramentas como HTML, CSS, JavaScript, Vue.js, SASS, Figma, Pinia, Vuex, Cypress e Quasar Framework.",
    },
  ];
 return (
    <div>
      <h3 className="text-6xl leading-[1.2]">Experiência</h3>
      <p className="text-2xl tracking-[0.2em] font-thin">Profissional</p>

      <div className="overflow-y-scroll max-h-[60vh] mt-4 pr-2">
        {content.map((item, index) => {
          return (
            <div key={index} className="grid grid-cols-3 items-center p-4">
              <div className="text-center col-span-1">
                <p>{item.duracao}</p>
              </div>
              <div className="col-span-2">
                <p className="text-2xl">{item.empresa}</p>
                <p className="text-2xl">{item.cargo}</p>
                <p className="font-thin">{item.descricao}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
