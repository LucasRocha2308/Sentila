import { Container } from "./styles";
import { ImPlay2 } from "react-icons/im";

const SectionHero = () => {
    return (
        <Container>
            <h1>APLICATIVO</h1>
            <p>
                Uma aplicação web, onde serão dispostas informações dos
                deputados federais de forma descomplicada e intuitiva. Você
                poderá visualizar informações como despesas e proposições de
                cada deputado.
            </p>
            <a href="/about">
                Saiba mais <ImPlay2 />
            </a>
        </Container>
    );
};

export default SectionHero;
