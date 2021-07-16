import React from "react";
import { Link } from "react-router-dom";
import Filter from "../../components/Filter";
import Header from "../../components/Header";

const Expenses = () => {
  return (
    <>
      <Header />
      <p
        style={{
          margin: "5rem auto 1rem",
          maxWidth: "1180px",
          padding: "0 1rem",
        }}
      >
        <Link to="/" style={{ color: "#444548" }}>
          Home
        </Link>
        <span> {">"} </span>
        <Link to="/expenses" style={{ color: " #4DBFF6", fontWeight: "bold" }}>
          Despesas
        </Link>
      </p>
      <Filter title={"Busque pelas despesas de um deputado"} />
    </>
  );
};

export default Expenses;
