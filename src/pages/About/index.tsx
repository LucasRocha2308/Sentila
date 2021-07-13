import Header from "../../components/Header";
import { Container, ContainerAbout } from "./styles";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGitlab } from "react-icons/ai";
import { Link } from "react-router-dom";

import imgAmanda from "../../assets/img/amandaMendeiros.jpeg";
import imgIoane from "../../assets/img/ioane.jpeg";
import imgItallo from "../../assets/img/itallo.jpeg";
import imgJoao from "../../assets/img/joao.jpeg";
import imgLucas from "../../assets/img/lucas.jpeg";
import imgRafael from "../../assets/img/rafael.jpeg";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <Container>
        <p style={{ margin: "5rem 1rem 0" }}>
          <Link to="/" style={{ color: "#444548" }}>
            Home
          </Link>
          <span> {">"} </span>
          <Link to="/about" style={{ color: " #4DBFF6" }}>
            Sobre nós
          </Link>
        </p>
        <h1>APLICATIVO</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna sed do eiusmo
          daliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmo
          daliqua. sed do eiusmod tempor incididunt ut labore et dolore magna
          sed do eiusmo daliqua.
        </p>
      </Container>
      <ContainerAbout>
        <div>
          <h3>Amanda Medeiros</h3>
          <h4>Desenvolvedora Front-end</h4>
          <div>
            <a
              href="https://www.linkedin.com/in/amanda-medeiros-193a36b2/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://gitlab.com/medeirosamandas"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGitlab />
            </a>
          </div>
        </div>
        <div>
          <img src={imgAmanda} alt="imagem Amanda" />
        </div>
      </ContainerAbout>
      <ContainerAbout>
        <div>
          <img src={imgIoane} alt="imagem Ioane" />
        </div>
        <div>
          <h3>Ioane Faumui</h3>
          <h4>Desenvolvedor Front-end</h4>
          <div>
            <a
              href="https://www.linkedin.com/in/ioanefaumui/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://gitlab.com/ioanefaumui"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGitlab />
            </a>
          </div>
        </div>
      </ContainerAbout>
      <ContainerAbout>
        <div>
          <h3>Itallo Dornelas</h3>
          <h4>Desenvolvedor Front-end</h4>
          <div>
            <a
              href="https://www.linkedin.com/in/itallo-dornelas/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://gitlab.com/ItalloDornelas"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGitlab />
            </a>
          </div>
        </div>
        <div>
          <img src={imgItallo} alt="imagem Itallo" />
        </div>
      </ContainerAbout>
      <ContainerAbout>
        <div>
          <img src={imgJoao} alt="imagem João" />
        </div>
        <div>
          <h3>João Alves</h3>
          <h4>Desenvolvedor Front-end</h4>
          <div>
            <a
              href="http://www.linkedin.com/in/jo%C3%A3o-alves-da-silva-junior"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://gitlab.com/JoaoJr"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGitlab />
            </a>
          </div>
        </div>
      </ContainerAbout>
      <ContainerAbout>
        <div>
          <h3>Lucas Rocha</h3>
          <h4>Desenvolvedor Front-end</h4>
          <div>
            <a
              href="https://www.linkedin.com/in/lucas-rocha-da-silva-530618149/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://gitlab.com/LucasRocha2308"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGitlab />
            </a>
          </div>
        </div>
        <div>
          <img src={imgLucas} alt="imagem Lucas" />
        </div>
      </ContainerAbout>
      <ContainerAbout>
        <div>
          <img src={imgRafael} alt="imagem Rafael" />
        </div>
        <div>
          <h3>Rafael Monteiro</h3>
          <h4>Desenvolvedor Front-end</h4>
          <div>
            <a
              href="https://www.linkedin.com/in/rafael-menezes-monteiro-38a5a656/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://gitlab.com/rafamenemont"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGitlab />
            </a>
          </div>
        </div>
      </ContainerAbout>
      <Footer />
    </>
  );
};

export default About;
