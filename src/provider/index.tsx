import { ReactNode } from "react";
import { ProposalsProvider } from "./proposals";
import { DeputiesProvider } from "./ deputies";
import { IsLoginProvider } from "./isLogin";

interface ProvidersProps {
  children: ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {
  return (
    <IsLoginProvider>
      <ProposalsProvider>
        <DeputiesProvider>{children}</DeputiesProvider>
      </ProposalsProvider>
    </IsLoginProvider>
  );
};

export default Providers;
