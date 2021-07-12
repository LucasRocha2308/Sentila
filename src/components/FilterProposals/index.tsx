import api from "../../services/api";
import Button from "../Button";
import { FilterContainer, AutoCompleteStyle } from "./styles";
import { useDeputies } from "../../provider/ deputies";
import { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import { year } from "../../mock/date";
import { toast } from "react-toastify";
import { useProposals } from "../../provider/proposals";
interface Title {
  title: string;
}
const FilterProposals = ({ title }: Title) => {
  const { deputies } = useDeputies();
  const { setProposalsDeputei } = useProposals();
  const [valueInput, setValueInput] = useState("");
  const [valueDataYear, setValueDataYear] = useState("");
  const [valueId, setValueId] = useState();
  useEffect(() => {
    api
      .get(`deputados?nome=${valueInput}&ordem=ASC&ordenarPor=nome`)
      .then((res) => setValueId(res.data.dados[0].id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueId]);

  const handleDeputeis = () => {
    api
      .get(
        `proposicoes?ano=${parseInt(
          valueDataYear
        )}&autor=${valueInput}&itens=5&ordem=ASC&ordenarPor=id`
      )
      .then((res) => setProposalsDeputei(res.data.dados))
      .catch((_) => {
        toast.error("Campos Obrigatorios");
      });
  };

  return (
    <FilterContainer>
      <h2>{title}</h2>
      <AutoCompleteStyle
        fullWidth={true}
        options={deputies.map((option) => option.nome)}
        onInputChange={(_event, newInputValue) => {
          setValueInput(newInputValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            value={valueInput}
            required
            onChange={(e) => setValueInput(e.target.value)}
            label="Deputado"
            margin="normal"
            variant="outlined"
          />
        )}
      />
      <AutoCompleteStyle
        fullWidth={true}
        options={year.map((option) => option.year)}
        onInputChange={(_event, newInputValue) => {
          setValueDataYear(newInputValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            value={valueDataYear}
            onChange={(e) => setValueDataYear(e.target.value)}
            label="Ano"
            margin="normal"
            variant="outlined"
          />
        )}
      />

      <Button onClick={handleDeputeis} value="Pesquisar" />
    </FilterContainer>
  );
};
export default FilterProposals;
