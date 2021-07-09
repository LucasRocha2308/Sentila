import { SetStateAction, Dispatch } from "react";

import { createContext, ReactNode, useContext, useState } from "react";
import api from "../../services/api";

interface Proposals {
  ano: number;
  siglaTipo: string;
  numero: number;
  codTipo: number;
  ementa: string;
  id: number;
}
interface ProposalsProviderData {
  proposals: Proposals[];
  setProposals: Dispatch<SetStateAction<Proposals[]>>;
}

interface ProposalsProviderProps {
  children: ReactNode;
}

export const ProposalsContext = createContext<ProposalsProviderData>(
  {} as ProposalsProviderData
);

export const ProposalsProvider = ({ children }: ProposalsProviderProps) => {
  const [proposals, setProposals] = useState<Proposals[]>([] as Proposals[]);

  api
    .get(
      "https://dadosabertos.camara.leg.br/api/v2/proposicoes?dataApresentacaoInicio=2021-06-25&dataApresentacaoFim=2021-06-30&itens=6&ordem=ASC&ordenarPor=id"
    )
    .then((res) => setProposals([...res.data.dados]));
  api
    .get(
      `https://dadosabertos.camara.leg.br/api/v2/proposicoes/${proposals.map(
        (item) => item.id
      )}`
    )
    .then((res) => console.log(res.data.dados));
  return (
    <ProposalsContext.Provider value={{ proposals, setProposals }}>
      {children}
    </ProposalsContext.Provider>
  );
};

export const useProposals = () => useContext(ProposalsContext);
