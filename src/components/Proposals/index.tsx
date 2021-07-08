import { ProposalsContainer } from "./styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useProposals } from "../../provider/proposals";

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
      items: 1,
    },
  };

  return (
    <ProposalsContainer>
      <h2>
        Propostas <br />
        📝
      </h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        customTransition="all .5"
        autoPlaySpeed={10000}
      >
        {proposals.map((item, key) => (
          <section key={key}>
            <h4>Proposta {item.codTipo}</h4>
            <h5>{item.siglaTipo}</h5>
            <p>{item.ementa}</p>

            <a href="/proposals">
              <span>Saiba mais</span>
            </a>
          </section>
        ))}
      </Carousel>
    </ProposalsContainer>
  );
};
export default Proposals;
