import { useEffect, useState } from "react";
import { ImPlay2 } from "react-icons/im";
import { Link } from "react-router-dom";
import FilterProposals from "../../components/FilterProposals";
import Header from "../../components/Header";
import { useProposals } from "../../provider/proposals";
import api from "../../services/api";
import {
  ProposalsContainer,
  ProposalsDeputeiContainer,
  ProposalsCarouselContainer,
} from "./style";

const Proposals = () => {
  const { idProposals, showProposals, proposalsDeputei, setIdProposals } =
    useProposals();
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
        <ProposalsContainer>
          {!!proposalsDeputei.length && (
            <>
              <h2>Propostas do Deputado</h2>
              {proposalsDeputei.map((item, i) => (
                <ProposalsDeputeiContainer key={i}>
                  <section>
                    <h4>Proposta {item.codTipo}</h4>
                    <h5>{item.siglaTipo}</h5>
                    <p>{item.ementa}</p>
                    <Link
                      to="/proposals"
                      onClick={() => setIdProposals(item.id)}
                    >
                      Saiba mais <ImPlay2 />
                    </Link>
                  </section>
                </ProposalsDeputeiContainer>
              ))}
            </>
          )}
          {!proposalsDeputei.length && hasSearched && "Proposta sem"}
          {!hasSearched && (
            <>
              <h2>Detalhes da Proposta</h2>
              {proposalsCarousel.map((item, key) => (
                <ProposalsCarouselContainer key={key}>
                  <section>
                    <h4>Proposta {item.codTipo}</h4>
                    <h5>{item.siglaTipo}</h5>
                    <h5>{item.descricaoTipo}</h5>
                    <p>{item.statusProposicao?.despacho}</p>
                    <p>{item.statusProposicao?.descricaoTramitacao}</p>
                    <p>{item.statusProposicao?.descricaoSituacao}</p>
                    <p>{item.ementa}</p>
                  </section>
                </ProposalsCarouselContainer>
              ))}
            </>
          )}
        </ProposalsContainer>
      </div>
    </>
  );
};

export default Proposals;
