import {
    ContainerFormAll,
    ContainerForm,
    ContainerRegister,
    Background,
    Container,
    ContainerOut,
} from "./style";

import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import apiAuth from "../../services/api-auth";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import Header from "../../components/Header";

const Register = () => {
    const schema = yup.object().shape({
        name: yup.string().required("Campo obrigatório!"),
        email: yup
            .string()
            .email("E-mail inválido")
            .required("Campo obrigatório!"),
        password: yup
            .string()
            .min(5, "Mínimo de 5 dígitos!")
            .required("Campo obrigatório!"),
        passwordConfirm: yup
            .string()
            .oneOf([yup.ref("password")], "Senhas diferentes")
            .required("Obrigatório!"),
    });
    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    interface Auth {
        id?: number;
        name: string;
        password: string;
        email: string;
    }

    const history = useHistory();
    const onSubmitFunction = ({ name, password, email }: Auth) => {
        const user = { name, password, email };
        apiAuth
            .post("register/", user)
            .then((response) => {
                console.log(response);
                toast.info("Conta criada com sucesso");
                return history.push("/login");
            })
            .catch((_) => {
                console.log("erro");
                toast.error(" Este usuário já está cadastrado");
            });
    };

    return (
        <ContainerOut>
            <Header />
            <Container>
                <p style={{ margin: "5rem 1rem 1rem" }}>
                    <Link to="/" style={{ color: "#444548" }}>
                        Home
                    </Link>
                    <span> {">"} </span>
                    <Link to="/register" style={{ color: " #4DBFF6" }}>
                        Cadastro
                    </Link>
                </p>

                <ContainerFormAll>
                    <ContainerRegister>
                        <ContainerForm>
                            <form onSubmit={handleSubmit(onSubmitFunction)}>
                                <h2>CADASTRO</h2>
                                <Input
                                    register={register}
                                    name="name"
                                    label="Usuário"
                                    // error={errors.username?.message}
                                    placeholder="Username"
                                />
                                <div>
                                    <Input
                                        type="email"
                                        name="email"
                                        label="E-mail"
                                        register={register}
                                        // error={errors.passwordConfirm?.message}
                                        placeholder="E-mail"
                                    />
                                    <Input
                                        type="password"
                                        name="password"
                                        label="Senha"
                                        register={register}
                                        // error={errors.password?.message}
                                        placeholder="Password"
                                    />
                                    <Input
                                        type="password"
                                        name="passwordConfirm"
                                        label="Confirme senha"
                                        register={register}
                                        // error={errors.passwordConfirm?.message}
                                        placeholder="Password Confirm"
                                    />
                                </div>

                                <Button value="Cadastrar" />
                                <p>
                                    Já possui conta?{" "}
                                    <Link to="/login">Login</Link>
                                </p>
                            </form>
                        </ContainerForm>
                    </ContainerRegister>
                </ContainerFormAll>
            </Container>
            <Background />
        </ContainerOut>
    );
};
export default Register;
