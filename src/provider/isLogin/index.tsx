import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
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
  const local = localStorage.getItem("@Sentinela/token");
  useEffect(() => {
    local ? setIsLogin(true) : setIsLogin(false);
  }, [local]);
  console.log("loginProvider", isLogin);

  return (
    <isLoginContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </isLoginContext.Provider>
  );
};

export const useIsLogin = () => useContext(isLoginContext);
