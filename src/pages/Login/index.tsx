import {
    ContainerFormAll,
    ContainerForm,
    ContainerRegister,
    Container,
    ContainerOut,
    Background,
} from "./style";

import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import apiAuth from "../../services/api-auth";

import { useIsLogin } from "../../provider/isLogin";
import Header from "../../components/Header";

const Login = () => {
    const schema = yup.object().shape({
        email: yup
            .string()
            .email("E-mail inválido")
            .required("Campo obrigatório!"),
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
        email: string;
        password: string;
    }

    const history = useHistory();
    const { setIsLogin } = useIsLogin();
    const onSubmitFunction = ({ email, password }: Auth) => {
        const user = { email, password };
        apiAuth
            .post("login/", user)
            .then((response) => {
                console.log(response);
                toast.info("Bem vindo");
                localStorage.clear();
                localStorage.setItem(
                    "@Sentinela/token",
                    JSON.stringify(response.data.accessToken)
                );
            })
            .then((_) => {
                history.push("/expenses");
                setIsLogin(true);
            })
            .catch((err) => {
                console.log(err);
                toast.error("Login e senha não encontrado");
            });
    };

    return (
        <ContainerOut>
            <Header />
            <Background />
            <Container>
                <p style={{ margin: "5rem 1rem 0" }}>
                    <Link to="/" style={{ color: "#444548" }}>
                        Home
                    </Link>
                    <span> {">"} </span>
                    <Link to="/login" style={{ color: " #4DBFF6" }}>
                        Login
                    </Link>
                </p>
                <ContainerFormAll>
                    <ContainerRegister>
                        <ContainerForm>
                            <form onSubmit={handleSubmit(onSubmitFunction)}>
                                <h2>LOGIN</h2>
                                <Input
                                    register={register}
                                    name="email"
                                    label="E-mail"
                                    // error={errors.username?.message}
                                    placeholder="E-mail"
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
                                <Button value="Entrar" />
                                <h4>
                                    Ainda não possui cadastro?
                                    <Link to="/register">Cadastrar</Link>
                                </h4>
                            </form>
                        </ContainerForm>
                    </ContainerRegister>
                </ContainerFormAll>
            </Container>
        </ContainerOut>
    );
};
export default Login;
