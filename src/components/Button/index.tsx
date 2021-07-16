import { ButtonStyle } from "./styles";

interface Valeu {
  value?: string;
  onClick?: () => void;
  disabled?: true;
}

const Button = ({ value, onClick, disabled }: Valeu) => {
  return (
    <ButtonStyle disabled={disabled} onClick={onClick}>
      {value}
    </ButtonStyle>
  );
};
export default Button;
