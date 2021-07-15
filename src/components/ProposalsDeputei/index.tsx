import { ImPlay2 } from "react-icons/im";
import { Link } from "react-router-dom";
import { useProposals } from "../../provider/proposals";
import { ProposalsDeputeiContainer } from "./style";

const ProposalsDeputei = () => {
  const { setIdProposals, setShow, proposalsDeputei } = useProposals();
  const handleMore = (item: number) => {
    setIdProposals(item);
    setShow(true);
  };
  console.log(proposalsDeputei);
  return (
    <>
      <h2>Estas são as propostas mais recentes do Deputado</h2>
      {proposalsDeputei.map((item, i) => (
        <ProposalsDeputeiContainer key={i}>
          <section>
            <h4>Proposta {item.numero}</h4>
            <h5>{item.siglaTipo}</h5>
            <p>{item.ementa}</p>
            <Link to="/proposals" onClick={() => handleMore(item.id)}>
              Saiba mais <ImPlay2 />
            </Link>
          </section>
        </ProposalsDeputeiContainer>
      ))}
    </>
  );
};
export default ProposalsDeputei;
