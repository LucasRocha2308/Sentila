import React from "react";
import Filter from "../../components/Filter";

const Expenses = () => {
  return (
    <>
      <p style={{ marginTop: 20, marginLeft: 20 }}>
        <a href="/" style={{ color: "#444548" }}>
          Home
        </a>
        <span> {">"} </span>
        <a href="register" style={{ color: " #4DBFF6" }}>
          Despesas
        </a>
      </p>
      <Filter title={"Busque pelas despesas de um deputado"} />
    </>
  );
};

export default Expenses;
