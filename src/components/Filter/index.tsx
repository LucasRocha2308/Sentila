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
  const [feedBack, setFeedBack] = useState(false);

  useEffect(() => {
    api
      .get(`deputados?nome=${valueInput}&ordem=ASC&ordenarPor=nome`)
      .then((res) => {
        valueInput !== "" && setValueId(res.data.dados[0].id);
      });
  }, [valueInput]);

  const handleDeputeis = () => {
    !valueInput || !valueDataYear || !valueDataMonth
      ? setFeedBack(true)
      : setFeedBack(false);

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

    api
      .get(`deputados/${valueId}`)
      .then((res) => setdataDeputies(res.data.dados.ultimoStatus.gabinete));
  };

  return (
    <FilterContainer>
      <div className="chart__columns">
        <div className="chart__column1">
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
          {feedBack && !valueInput && (
            <span style={{ color: "red" }}>Por favor digite um nome</span>
          )}

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
          {feedBack && !valueDataYear && (
            <p style={{ color: "red" }}>Selecione um ano</p>
          )}
          {feedBack && !valueDataMonth && (
            <p style={{ color: "red" }}>Selecione um mês</p>
          )}

          <Button onClick={handleDeputeis} value="Pesquisar" />
        </div>

        <div className="chart__column2">
          <div className="chart__father">
            <span
              style={{
                display: "block",
                right: "2.3rem",
                maxWidth: "1180px",
                margin: "2rem auto 0",
              }}
            >
              Valor
            </span>

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
            <span
              style={{
                textAlign: "right",
                display: "block",
                right: "2.3rem",
                maxWidth: "1180px",
                margin: "0 auto",
              }}
            >
              Vezes que utilizou verba
            </span>
            <p style={{ marginTop: "2rem" }}>
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
        </div>
      </div>
    </FilterContainer>
  );
};
export default Filter;
