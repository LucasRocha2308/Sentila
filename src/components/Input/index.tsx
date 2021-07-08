import { Container, InputContainer } from "./styles";
import { FieldValues, UseFormRegister } from "react-hook-form";
// import { IconType } from "react-icons";

interface InputProps {
  error: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  type?: string;
  // icon: IconType;
  placeholder: string;
}

function Input({
  error = "",
  // label,
  // icon: Icon,
  register,
  name,
  ...rest
}: InputProps) {
  return (
    <Container>
      <div>
        {/* {label} */}
        {!!error && <span> - {error}</span>}
      </div>
      <InputContainer isErrored={!!error}>
        {/* {Icon && <Icon size={20} />} */}
        <input {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
}
export default Input;
