import { top5 } from "../../mock/top5Spending";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { MoreSpentContainer, Image } from "./styles";

const MoreSpent = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <MoreSpentContainer>
      <h2>
        Quem mais
        <br />
        gastou
        <br />
        😡
      </h2>
      <div data-aos="fade-up" data-aos-easing="linear">
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
