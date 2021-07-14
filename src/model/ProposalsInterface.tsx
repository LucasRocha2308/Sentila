export default interface Proposals {
  ano: number;
  siglaTipo: string;
  numero: number;
  codTipo: number;
  ementa: string;
  id: number;
  descricaoTipo?: string;
  statusProposicao?: {
    descricaoTramitacao: string;
    descricaoSituacao: string;
    dataHora: string;
    despacho: string;
  };
}
