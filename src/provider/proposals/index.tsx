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
    .get("/proposicoes?pagina=573&itens=15")
    .then((res) => setProposals([...res.data.dados]));

  return (
    <ProposalsContext.Provider value={{ proposals, setProposals }}>
      {children}
    </ProposalsContext.Provider>
  );
};

export const useProposals = () => useContext(ProposalsContext);
