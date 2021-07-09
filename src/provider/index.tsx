import { ReactNode } from "react";
import { ProposalsProvider } from "./proposals";
import { DeputiesProvider } from "./ deputies";

interface ProvidersProps {
  children: ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {
  return (
    <ProposalsProvider>
      <DeputiesProvider>{children}</DeputiesProvider>
    </ProposalsProvider>
  );
};

export default Providers;
