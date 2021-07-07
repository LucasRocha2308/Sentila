const formatValue = (Value: number) =>
  Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Value);

export default formatValue;
