import { Container } from "./styles";
import { ImPlay2 } from "react-icons/im";

const SectionHero = () => {
    return (
        <Container>
            <h1>APLICATIVO</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna sed do
                eiusmo daliqua.
            </p>
            <a href="https">
                Saiba mais <ImPlay2 />
            </a>
        </Container>
    );
};

export default SectionHero;
