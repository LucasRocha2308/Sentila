import { BackgroundWrapper, Container } from "./styles";
import MoreSpent from "../../components/MoreSpent";
import MoreSaved from "../../components/WhoSavedTheMost";
import Footer from "../../components/Footer";
import SectionHero from "../../components/SectionHero";
import CarouselProposals from "../../components/CarouselProposals";
import Header from "../../components/Header";
import useWindowDimensions from "../../provider/windowDimensions";

const Home = () => {
    const { width } = useWindowDimensions();

    return (
        <Container>
            <Header />
            {Number(width) < 768 ? (
                <>
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
                    <MoreSaved />{" "}
                </>
            ) : (
                <>
                    {" "}
                    <BackgroundWrapper>
                        <div className="background1">
                            <div className="background2" />
                        </div>
                        <div className="background3" />
                        <div className="background4" />
                    </BackgroundWrapper>
                    <SectionHero />
                    <div className="flex">
                        <MoreSpent />
                        <MoreSaved />
                    </div>
                </>
            )}
            <CarouselProposals />
            <Footer />
        </Container>
    );
};

export default Home;
