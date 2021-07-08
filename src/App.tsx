import Background from "./components/Background";
import MoreSpent from "./components/MoreSpent";
import { Container } from "./styles";

function App() {
  return (
    <Container>
      <Background>
        <div></div>
      </Background>
      <div className="g1">
        <MoreSpent />
      </div>
    </Container>
  );
}

export default App;
