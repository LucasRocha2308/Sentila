import { SetStateAction, Dispatch } from "react";
import { useEffect } from "react";

import { createContext, ReactNode, useContext, useState } from "react";
import Proposals from "../../pages/Proposals";
import api from "../../services/api";

// eslint-disable-next-line @typescript-eslint/no-redeclare
interface Proposals {
  ano: number;
  siglaTipo: string;
  numero: number;
  codTipo: number;
  ementa: string;
  id: number;
  descricaoTipo?: string;
  statusProposicao?: {
    descricaoTramitacao: string;
    descricaoSituacao: string;
    dataHora: string;
    despacho: string;
  };
}
interface ProposalsProviderData {
  proposals: Proposals[];
  setProposals: Dispatch<SetStateAction<Proposals[]>>;
  setIdProposals: Dispatch<SetStateAction<number>>;
  idProposals: number;
  showProposals: Proposals[];
  setProposalsDeputei: Dispatch<SetStateAction<Proposals[]>>;
  proposalsDeputei: Proposals[];
}

interface ProposalsProviderProps {
  children: ReactNode;
}

export const ProposalsContext = createContext<ProposalsProviderData>(
  {} as ProposalsProviderData
);

export const ProposalsProvider = ({ children }: ProposalsProviderProps) => {
  const [proposals, setProposals] = useState<Proposals[]>([] as Proposals[]);
  const [showProposals] = useState<Proposals[]>([] as Proposals[]);
  const [idProposals, setIdProposals] = useState(Number);
  const [proposalsDeputei, setProposalsDeputei] = useState<Proposals[]>(
    [] as Proposals[]
  );

  useEffect(() => {
    api
      .get(
        "proposicoes?dataApresentacaoInicio=2021-06-25&dataApresentacaoFim=2021-06-30&itens=6&ordem=ASC&ordenarPor=id"
      )
      .then((res) => setProposals([...res.data.dados]));
  }, []);

  return (
    <ProposalsContext.Provider
      value={{
        proposals,
        setProposals,
        setIdProposals,
        idProposals,
        showProposals,
        setProposalsDeputei,
        proposalsDeputei,
      }}
    >
      {children}
    </ProposalsContext.Provider>
  );
};

export const useProposals = () => useContext(ProposalsContext);
