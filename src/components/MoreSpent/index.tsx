import { top5 } from "../../mock/top5Spending";

import { MoreSpentContainer, Image } from "./styles";

const MoreSpent = () => {
  return (
    <MoreSpentContainer>
      <h2>
        Quem mais <br />
        gastou 😡
      </h2>
      <div>
        {top5.map((item, key) => (
          <section key={key}>
            <span>
              <Image src={item.img} alt="foto deputado" />
            </span>
            <p>{item.name.slice(4)}</p>
            <div style={{ height: `${item.expense * 2}px` }}></div>
            <p>{item.expense} mil</p>
          </section>
        ))}
      </div>
    </MoreSpentContainer>
  );
};
export default MoreSpent;
