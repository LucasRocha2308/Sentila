import { StyledCarousel, ProposalsContainer } from "./styles";

import { useProposals } from "../../provider/proposals";
import { ImPlay2 } from "react-icons/im";

const Proposals = () => {
  const { proposals } = useProposals();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
        autoPlay={false}
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
                ? `${item.ementa.substring(0, 150)}...`
                : item.ementa}
            </p>

            <a href="/proposals">
              <span>
                Saiba mais <ImPlay2 />
              </span>
            </a>
          </section>
        ))}
      </StyledCarousel>
      <div className="carousel__spacing"></div>
    </ProposalsContainer>
  );
};
export default Proposals;
