import { ReactNode } from "react";
import { BackgroundWrapper } from "./styles";

interface BackgroundProps {
  children: ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
  return (
    <BackgroundWrapper>
      <div className="background1">
        <div className="background2" />
      </div>
      <div className="background3" />
      <div className="background4" />
    </BackgroundWrapper>
  );
};

export default Background;
