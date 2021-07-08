import api from "../../services/api";
import { ProposalsContainer } from "./styles";

const Proposals = () => {
  const proposicoes = api
    .get("/proposicoes?pagina=570&itens=15")
    .then((res) => res.data.dados);
  console.log(proposicoes);
  return (
    <ProposalsContainer>
      <h2>Propostas 📝</h2>
      <div></div>
    </ProposalsContainer>
  );
};
export default Proposals;
