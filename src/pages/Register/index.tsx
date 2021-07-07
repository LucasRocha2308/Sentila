// import "./style";

import { Container, ContainerForm, ContainerRegister } from "./style";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

import { useHistory } from "react-router-dom";
import * as yup from "yup";
// import { FiUser, FiLock } from "react-icons/fi";
import { yupResolver } from "@hookform/resolvers/yup";
// import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { toast } from "react-toastify";

const Register = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório!"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos!")
      .required("Campo obrigatório!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Obrigatório!"),
    // email: yup.string().required("Campo obrigatório!").email("E-mail invalido"),
  });
  const {
    // register,
    handleSubmit,
    // formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  interface Auth {
    id?: number;
    username: string;
    // email: string;
    password: string;
  }

  const history = useHistory();
  const onSubmitFunction = ({ username, password }: Auth) => {
    const user = { username, password };
    api
      .post("users/", user)
      .then((_) => {
        toast.success("Sucesso ao criar a conta");
        return history.push("/login");
      })
      .catch((_) => {
        toast.error(" Este usuário já está cadastrado");
      });
  };

  return (
    <Container>
      <ContainerRegister>
        <ContainerForm>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h2>CADASTRO</h2>
            <div>
              <TextField
                margin="normal"
                variant="outlined"
                label="Username"
                name="username"
                size="small"
                color="primary"
                // inputRef={register}
                // error={!!errors.username}
                // helperText={errors.username?.message}
              ></TextField>
            </div>

            <div>
              <TextField
                margin="normal"
                variant="outlined"
                label="Password"
                name="password"
                size="small"
                color="primary"
                // inputRef={register}
                // error={!!errors.password}
                // helperText={errors.password?.message}
              ></TextField>
            </div>

            <div>
              <TextField
                margin="normal"
                variant="outlined"
                label="Password Confirm"
                name=" passwordConfirm"
                size="small"
                color="primary"
                // inputRef={register}
                // error={!!errors.password}
                // helperText={errors.password?.message}
              ></TextField>
            </div>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              Cadastrar
            </Button>
            <h4>
              Já tem conta? <a href="#">Login</a>
              {/* Já tem conta? <Link to="/login">Faça o login!</Link> */}
            </h4>
          </form>
        </ContainerForm>
      </ContainerRegister>
    </Container>
  );
};
export default Register;
