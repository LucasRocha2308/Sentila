import { ReactNode } from "react";
import { ProposalsProvider } from "./proposals";

interface ProvidersProps {
  children: ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {
  return <ProposalsProvider>{children}</ProposalsProvider>;
};

export default Providers;
