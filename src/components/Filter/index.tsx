import Input from "../Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import Button from "../Button";
import { FilterContainer } from "./styles";
import { useProposals } from "../../provider/proposals";

const Filter = () => {
  const { proposals } = useProposals();
  let idProposals: number[];
  const HandleIdProposals = () => {
    idProposals = proposals.map((item) => item.id);
  };
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório!"),
  });
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmitFunction = () => {
    api.get(`/deputados/${idProposals}/dispesas`).then((res) => res);
  };
  return (
    <FilterContainer>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Busque por um deputado</h2>
        <Input register={register} name="username" label="Nome deputado" />
        <input type="month" />
        <Button onClick={HandleIdProposals} value="Pesquisar" />
      </form>
    </FilterContainer>
  );
};
export default Filter;
