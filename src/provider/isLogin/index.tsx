import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IsLoginProviderData {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

interface IsLoginProviderProps {
  children: ReactNode;
}

export const isLoginContext = createContext<IsLoginProviderData>(
  {} as IsLoginProviderData
);

export const IsLoginProvider = ({ children }: IsLoginProviderProps) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <isLoginContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </isLoginContext.Provider>
  );
};

export const useIsLogin = () => useContext(isLoginContext);
