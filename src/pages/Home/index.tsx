import { BackgroundWrapper, Container } from "./styles";
import MoreSpent from "../../components/MoreSpent";

const Home = () => {
  return (
    <Container>
      <BackgroundWrapper>
        <div className="background1">
          <div className="background2" />
        </div>
        <div className="background3" />
        <div className="background4" />
      </BackgroundWrapper>
      <div className="g1">
        <MoreSpent />
      </div>
    </Container>
  );
};

export default Home;
