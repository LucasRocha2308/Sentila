import React from "react";
import Filter from "../../components/Filter";
import Header from "../../components/Header";

const Expenses = () => {
  return (
    <>
      <Header />
      <p style={{ margin: "5rem 1rem 1rem" }}>
        <a href="/" style={{ color: "#444548" }}>
          Home
        </a>
        <span> {">"} </span>
        <a href="register" style={{ color: " #4DBFF6", fontWeight: "bold" }}>
          Despesas
        </a>
      </p>
      <Filter title={"Busque pelas despesas de um deputado"} />
    </>
  );
};

export default Expenses;
