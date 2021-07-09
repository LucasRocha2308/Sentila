import api from "../../services/api";
import Button from "../Button";
import { FilterContainer, AutoCompleteStyle } from "./styles";
import { useDeputies } from "../../provider/ deputies";
import { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import { month, year } from "../../mock/date";

const Filter = () => {
  const { deputies } = useDeputies();
  const [valueInput, setValueInput] = useState("");
  const [valueDataYear, setValueDataYear] = useState("");
  const [valueDataMonth, setValueDataMonth] = useState("");
  const [valueId, setValueId] = useState();
  useEffect(() => {
    api
      .get(`deputados?nome=${valueInput}&ordem=ASC&ordenarPor=nome`)
      .then((res) => setValueId(res.data.dados[0].id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeputeis = () => {
    console.log(valueId);
    api
      .get(
        `deputados/${valueId}/despesas?ano=${valueDataYear}&mes=${valueDataMonth}&ordem=ASC&ordenarPor=ano`
      )
      .then((res) => console.log(res.data.dados));
  };

  return (
    <FilterContainer>
      <h2>Busque por um deputado</h2>
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
            onChange={(e) => setValueInput(e.target.value)}
            label="Deputado"
            margin="normal"
            variant="outlined"
          />
        )}
      />
      <h2>Busque pelo período das despesas</h2>
      <AutoCompleteStyle
        fullWidth={true}
        options={month.map((option) => option.month)}
        onInputChange={(_event, newInputValue) => {
          setValueDataMonth(newInputValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            value={valueDataMonth}
            onChange={(e) => setValueDataMonth(e.target.value)}
            label="Mes"
            margin="normal"
            variant="outlined"
          />
        )}
      />
      <AutoCompleteStyle
        fullWidth={true}
        options={year.map((option) => option.year)}
        onInputChange={(_event, newInputValue) => {
          setValueDataMonth(newInputValue);
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
export default Filter;
