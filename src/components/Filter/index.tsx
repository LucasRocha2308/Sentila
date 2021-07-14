import api from "../../services/api";
import Button from "../Button";
import { FilterContainer, AutoCompleteStyle, ContainerDate } from "./styles";
import { useDeputies } from "../../provider/ deputies";
import { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import { month, year } from "../../mock/date";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Contacts from "../Contacts";
// import { number } from "yup/lib/locale";

interface Title {
  title: string;
}
const Filter = ({ title }: Title) => {
  const { deputies } = useDeputies();
  const [valueInput, setValueInput] = useState("");
  const [valueDataYear, setValueDataYear] = useState("");
  const [valueDataMonth, setValueDataMonth] = useState("");
  const [valueId, setValueId] = useState();
  const [dataDeputies, setdataDeputies] = useState("");
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    api
      .get(`deputados?nome=${valueInput}&ordem=ASC&ordenarPor=nome`)
      .then((res) => {
        setValueId(res.data.dados[0].id);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueInput]);

  const handleDeputeis = () => {
    api
      .get(
        `deputados/${valueId}/despesas?ano=${parseInt(
          valueDataYear
        )}&mes=${parseInt(
          valueDataMonth
        )}&pagina=1&itens=100&ordem=ASC&ordenarPor=ano`
      )
      .then((res) =>
        setChartData(
          res.data.dados.map((item: any, index: any) => ({
            name: index,
            uv: item.valorLiquido,
            pv: 2400,
            amt: 2400,
          }))
        )
      );

    api.get(`deputados/${valueId}`).then((res) => {
      setdataDeputies(res.data.dados.ultimoStatus.gabinete);
      console.log(res.data.dados.ultimoStatus.gabinete);
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
            onChange={(e) => setValueInput(e.target.value)}
            label="Deputado"
            margin="normal"
            variant="outlined"
          />
        )}
      />
      <ContainerDate>
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
      </ContainerDate>
      <Button onClick={handleDeputeis} value="Pesquisar" />

      <div style={{ width: "100%", height: "200px", margin: "2rem 0" }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={200}
            data={chartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="var(--light-blue)"
              fill="var(--dark-blue)"
            />
          </AreaChart>
        </ResponsiveContainer>
        <p>
          Total:{" "}
          <span style={{ font: "2rem bold", color: "red" }}>
            R${" "}
            {chartData
              .map((item: any) => item.uv)
              .reduce((acc, current): number => acc + current, 0)
              .toFixed(2)}{" "}
          </span>
        </p>
        <Contacts data={dataDeputies} />
      </div>
    </FilterContainer>
  );
};
export default Filter;
