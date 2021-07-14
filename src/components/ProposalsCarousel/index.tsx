import ProposalsInterface from "../../model/ProposalsInterface";
import { ProposalsCarouselContainer } from "./styles";

interface PropsCarousel {
  proposalsCarousel: ProposalsInterface[];
}

const ProposalsCarousel = ({ proposalsCarousel }: PropsCarousel) => {
  return (
    <>
      <h2>Detalhes da Proposta</h2>
      {proposalsCarousel.map((item, key) => (
        <ProposalsCarouselContainer key={key}>
          <section>
            <h4>Proposta {item.codTipo}</h4>
            <h5>
              <b>Sigla do tipo de Proposta</b>: {item.siglaTipo}
            </h5>
            <p>
              <b>Descrição do Tipo</b>: <br />
              {item.descricaoTipo}
            </p>
            <p>
              {item.statusProposicao?.despacho && (
                <>
                  <b>Descrição do Despacho</b>:<br />
                  {item.statusProposicao?.despacho}
                </>
              )}
            </p>
            <p>
              {item.statusProposicao?.descricaoTramitacao && (
                <>
                  <b>Descrição da tramitação</b>:<br />
                  {item.statusProposicao?.descricaoTramitacao}
                </>
              )}
            </p>
            <p>
              {item.statusProposicao?.descricaoSituacao && (
                <>
                  <b>Descrição da sitação</b>:<br />
                  {item.statusProposicao?.descricaoSituacao}
                </>
              )}
            </p>
            <p>
              {item.ementa && (
                <>
                  <b>Descrição da ementa</b>:<br /> {item.ementa}
                </>
              )}
            </p>
          </section>
        </ProposalsCarouselContainer>
      ))}
    </>
  );
};
export default ProposalsCarousel;
