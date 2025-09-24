interface Situacao {
  status: string;
  tipoProblema: string;
}

interface Moto {
  id: string;
  placa: string;
  modelo: string;
  situacao: Situacao;
  dataEntrada: string;
  dataSaida: string;
}

interface Vaga {
  idVaga: string;
  ocupada: boolean;
  setor: string;
  moto: Moto;
}
