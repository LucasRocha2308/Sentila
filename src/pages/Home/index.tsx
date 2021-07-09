import { BackgroundWrapper, Container } from "./styles";
import MoreSpent from "../../components/MoreSpent";
import MoreSaved from "../../components/WhoSavedTheMost";
import Footer from "../../components/Footer";
import SectionHero from "../../components/SectionHero";

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
      <SectionHero />
      <div className="g1">
        <MoreSpent />
      </div>
      <MoreSaved />
      <Footer />
    </Container>
  );
};

export default Home;
