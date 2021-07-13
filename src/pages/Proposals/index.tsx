import { useEffect, useState } from "react";
import FilterProposals from "../../components/FilterProposals";
import Header from "../../components/Header";
import { useProposals } from "../../provider/proposals";
import api from "../../services/api";

const Proposals = () => {
  const { idProposals, showProposals, proposalsDeputei } = useProposals();
  const [proposalsCarousel, setProposalsCarousel] = useState(showProposals);

  const [hasSearched, setHasSearched] = useState(false);

  const action = () => {
    setHasSearched(true);
  };

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

      <div style={{ margin: "5rem 1rem 0" }}>
        <FilterProposals
          action={action}
          title={"Busque pelas propostas de um deputado"}
        />

        {!!proposalsDeputei.length &&
          proposalsDeputei.map((item, i) => <p key={i}> {item.ementa} </p>)}
        {!proposalsDeputei.length && hasSearched && "Proposta sem"}
        {!hasSearched &&
          proposalsCarousel.map((item, key) => (
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
      </div>
    </>
  );
};

export default Proposals;
