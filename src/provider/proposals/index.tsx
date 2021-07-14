import { SetStateAction, Dispatch } from "react";
import { useEffect } from "react";

import { createContext, ReactNode, useContext, useState } from "react";
import ProposalsInterface from "../../model/ProposalsInterface";
import api from "../../services/api";

// eslint-disable-next-line @typescript-eslint/no-redeclare

interface ProposalsProviderData {
  proposals: ProposalsInterface[];
  setProposals: Dispatch<SetStateAction<ProposalsInterface[]>>;
  setIdProposals: Dispatch<SetStateAction<number>>;
  idProposals: number;
  setProposalsDeputei: Dispatch<SetStateAction<ProposalsInterface[]>>;
  proposalsDeputei: ProposalsInterface[];
}

interface ProposalsProviderProps {
  children: ReactNode;
}

export const ProposalsContext = createContext<ProposalsProviderData>(
  {} as ProposalsProviderData
);

export const ProposalsProvider = ({ children }: ProposalsProviderProps) => {
  const [proposals, setProposals] = useState<ProposalsInterface[]>(
    [] as ProposalsInterface[]
  );
  const [idProposals, setIdProposals] = useState(Number);
  const [proposalsDeputei, setProposalsDeputei] = useState<
    ProposalsInterface[]
  >([] as ProposalsInterface[]);

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
        setProposalsDeputei,
        proposalsDeputei,
      }}
    >
      {children}
    </ProposalsContext.Provider>
  );
};

export const useProposals = () => useContext(ProposalsContext);
