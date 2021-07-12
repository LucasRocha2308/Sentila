import { useEffect, useState } from "react";
import FilterProposals from "../../components/FilterProposals";
import Header from "../../components/Header";
import { useProposals } from "../../provider/proposals";
import api from "../../services/api";

const Proposals = () => {
  const { idProposals, showProposals, proposalsDeputei } = useProposals();
  const [proposalsCarousel, setProposalsCarousel] = useState(showProposals);
  useEffect(() => {
    api
      .get(`proposicoes/${idProposals}`)
      .then((res) =>
        setProposalsCarousel([...proposalsCarousel, res.data.dados])
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idProposals]);

  return (
    <>
      <Header />
      <FilterProposals title={"Busque pelas propostas de um deputado"} />
      {proposalsDeputei.length
        ? proposalsDeputei.map((item) => item.ementa)
        : proposalsCarousel.map((item, key) => (
            <section key={key}>
              <h4>Proposta {item.codTipo}</h4>
              <h5>{item.siglaTipo}</h5>
              <h6>{item.descricaoTipo}</h6>
              <p>{item.statusProposicao?.despacho}</p>
              <p>{item.statusProposicao?.descricaoTramitacao}</p>
              <p>{item.statusProposicao?.descricaoSituacao}</p>
              <p>{item.ementa}</p>
            </section>
          ))}
    </>
  );
};
export default Proposals;
