interface Situacao {
    status: string;
    tipoProblema: string;
}

interface Moto {
    id: string;
    vaga: string;
    placa: string;
    situacao: Situacao;
    dataEntrada: string;
    dataSaida: string;
}
