import { Container, InputContainer, StyleTextField } from "./styles";
import { FieldValues, UseFormRegister } from "react-hook-form";
// import { TextField } from "@material-ui/core";
// import { IconType } from "react-icons";

interface InputProps {
  error: string;
  label?: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  type?: string;
  placeholder?: string;
}

function Input({ label, register, error, name, ...rest }: InputProps) {
  return (
    <Container>
      <div>{!!error && <span> - {error}</span>}</div>
      <InputContainer isErrored={!!error}>
        <StyleTextField
          id="outlined-secondary"
          label={label}
          variant="outlined"
          {...register(name)}
          {...rest}
        />
      </InputContainer>
    </Container>
  );
}
export default Input;
