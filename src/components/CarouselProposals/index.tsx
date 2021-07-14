import { StyledCarousel, ProposalsContainer } from "./styles";
import { useProposals } from "../../provider/proposals";
import { ImPlay2 } from "react-icons/im";
import { Link } from "react-router-dom";

const CarouselProposals = () => {
    const { proposals, setIdProposals } = useProposals();
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1.8,
        },
    };

    return (
        <ProposalsContainer>
            <h2>
                Últimas Propostas <br />
                📝
            </h2>
            <StyledCarousel
                responsive={responsive}
                infinite={true}
                ssr={true}
                showDots={true}
                autoPlay={true}
                itemClass="carousel-item-padding-40-px"
                autoPlaySpeed={10000}
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                {proposals.map((item, key) => (
                    <section key={key}>
                        <h4>Proposta {item.codTipo}</h4>
                        <h5>{item.siglaTipo}</h5>
                        <p>
                            {item.ementa.length > 50
                                ? `${item.ementa.substring(0, 100)}...`
                                : item.ementa}
                        </p>

                        <Link
                            to="/proposals"
                            onClick={() => setIdProposals(item.id)}
                        >
                            Saiba mais <ImPlay2 />
                        </Link>
                    </section>
                ))}
            </StyledCarousel>
            <div className="carousel__spacing"></div>
        </ProposalsContainer>
    );
};
export default CarouselProposals;
