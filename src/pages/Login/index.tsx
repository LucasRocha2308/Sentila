import { ContainerFormAll, ContainerForm, ContainerRegister } from "./style";

import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { toast } from "react-toastify";

const Login = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório!"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos!")
      .required("Campo obrigatório!"),
  });
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  interface Auth {
    id?: number;
    username: string;
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
    <ContainerFormAll>
      <ContainerRegister>
        <a href="/">
          <span>
            Home <a href="login"> {">"}Login </a>
          </span>
        </a>
        <ContainerForm>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h2>LOGIN</h2>
            <Input
              register={register}
              name="username"
              label="Usuário"
              // error={errors.username?.message}
              placeholder="Username"
            />
            <div>
              <Input
                type="password"
                name="password"
                label="Senha"
                register={register}
                // error={errors.password?.message}
                placeholder="Password"
              />
            </div>

            <button>Login</button>
            <h4>
              Ainda não possui cadastro? <a href="login">Cadastrar</a>
              {/* Já tem conta? <Link to="/login">Faça o login!</Link> */}
            </h4>
          </form>
        </ContainerForm>
      </ContainerRegister>
    </ContainerFormAll>
  );
};
export default Login;
