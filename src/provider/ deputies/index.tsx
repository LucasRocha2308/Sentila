import { SetStateAction, Dispatch } from "react";
import { useEffect } from "react";

import { createContext, ReactNode, useContext, useState } from "react";
import api from "../../services/api";

interface Deputies {
  id: number;
  nome: string;
  siglaPartido: string;
  email: string;
}
interface DeputiesProviderData {
  deputies: Deputies[];
  setDeputies: Dispatch<SetStateAction<Deputies[]>>;
}

interface DeputiesProviderProps {
  children: ReactNode;
}

export const DeputiesContext = createContext<DeputiesProviderData>(
  {} as DeputiesProviderData
);

export const DeputiesProvider = ({ children }: DeputiesProviderProps) => {
  const [deputies, setDeputies] = useState<Deputies[]>([] as Deputies[]);
  useEffect(() => {
    api.get("deputados").then((res) => setDeputies(res.data.dados));
  }, []);

  return (
    <DeputiesContext.Provider value={{ deputies, setDeputies }}>
      {children}
    </DeputiesContext.Provider>
  );
};

export const useDeputies = () => useContext(DeputiesContext);
