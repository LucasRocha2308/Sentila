import { BackgroundWrapper, Container } from "./styles";
import MoreSpent from "../../components/MoreSpent";
import MoreSaved from "../../components/WhoSavedTheMost";
import Footer from "../../components/Footer";
import SectionHero from "../../components/SectionHero";
import CarouselProposals from "../../components/CarouselProposals";
import Header from "../../components/Header";

const Home = () => {
  return (
    <Container>
      <Header />
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
      <CarouselProposals />
      <Footer />
    </Container>
  );
};

export default Home;
