import ProposalsInterface from "../../model/ProposalsInterface";
import { useProposals } from "../../provider/proposals";
import { ProposalsCarouselContainer, ModalStyle } from "./styles";

interface PropsInfo {
  proposalsInfo: ProposalsInterface[];
}

const ProposalsInfo = ({ proposalsInfo }: PropsInfo) => {
  const { show, setShow } = useProposals();
  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <ModalStyle open={show} onClose={handleClose}>
        <>
          {proposalsInfo.map((item, key) => (
            <ProposalsCarouselContainer key={key}>
              <section>
                <h4>Proposta {item.numero}</h4>
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
      </ModalStyle>
    </>
  );
};
export default ProposalsInfo;
