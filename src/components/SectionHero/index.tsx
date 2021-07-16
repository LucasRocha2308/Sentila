import { Container } from "./styles";
import { ImPlay2 } from "react-icons/im";
import { Link } from "react-router-dom";

const SectionHero = () => {
  return (
    <Container>
      <h1>Sentinela</h1>
      <p>
        Uma aplicação web, onde serão dispostas informações dos deputados
        federais de forma descomplicada e intuitiva. Você poderá visualizar
        informações como despesas e proposições de cada deputado.
      </p>
      <Link to="/about">
        Saiba mais <ImPlay2 />
      </Link>
    </Container>
  );
};

export default SectionHero;
