import { top5 } from "../../mock/top5Spending";
import formatValue from "../../utils/formatValue";
import { Container } from "./styles";

const MoreSpent = () => {
  return (
    <Container>
      <div>
        <h2>QUEM MAIS GASTOU 😡</h2>
        {top5.map((item) => (
          <>
            <img src={item.img} alt="foto deputado" />
            <p>{item.name}</p>
            <div style={{ width: `${item.expense / 500}px` }}>pix</div>
            <p>{formatValue(item.expense)} </p>
          </>
        ))}
      </div>
    </Container>
  );
};
export default MoreSpent;
