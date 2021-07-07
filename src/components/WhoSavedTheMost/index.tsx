import { top3 } from "../../mock/top3MoreSaved";
import formatValue from "../../utils/formatValue";
import { Container, Image } from "./styles";

const MoreSaved = () => {
  return (
    <Container>
      <h2>
        Quem mais <br />
        economizou <br />
        👍
      </h2>
      <div>
        {top3.map((item, index) => (
          <section key={index}>
            <span>
              <Image src={item.img} alt="img deputado" />
            </span>
            <p>{item.name}</p>
            <div style={{ height: `${(1 / item.expense) * 1000}px` }}>
              {item.id}
            </div>
            <p>{formatValue(item.expense)}</p>
          </section>
        ))}
      </div>
    </Container>
  );
};

export default MoreSaved;
