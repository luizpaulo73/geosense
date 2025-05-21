import FormCadastroMoto from "../../components/FormCadastroMoto/FormCadastroMoto";
import BaseTelas from "../../components/BaseTelas/BaseTelas";

export default function cadastro() {
    return (
        <BaseTelas titulo="Cadastro de Moto" botaoVoltar="/dashboard">
            <FormCadastroMoto />
        </BaseTelas>
    )
}