import { ButtonStyle } from "./styles";

interface Valeu {
  value: string;
  onClick?: () => void;
}

const Button = ({ value, onClick }: Valeu) => {
  return <ButtonStyle onClick={onClick}>{value}</ButtonStyle>;
};
export default Button;
