import { View, StyleSheet } from "react-native"
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import FormCadastroMoto from "../../components/FormCadastroMoto/FormCadastroMoto";

export default function cadastro() {
    return (
        <View style={style.container}>
            <Cabecalho />
            <FormCadastroMoto />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#020817"
    },
});