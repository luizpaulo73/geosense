import Setor from '../../../components/Setor/Setor';
import { Link, useLocalSearchParams } from 'expo-router';
import BaseTelas from '../../../components/BaseTelas/BaseTelas';
import { StyleSheet, Text, View } from 'react-native';

export default function SelecionarMapa() {

    const { setor } = useLocalSearchParams();
    const setorString = Array.isArray(setor) ? setor[0] : setor || '';

    return (
        <BaseTelas titulo='Selecione a Vaga' botaoVoltar="/cadastro">
            <View style={style.container}>
            <Setor area={setorString}/>
            <Link href="/dashboard" style={style.btnLogin}>
                <Text style={style.btnLoginText}>Cadastrar</Text>
            </Link></View>
        </BaseTelas>
    )
}

const style = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: "center",
        width: "100%",
        marginTop: 20
    },
    btnLogin: {
        backgroundColor: "#00CCCF",
        borderRadius: 5,
        width: "50%",
        height: 40,
        marginTop: 20,
    },
    btnLoginText: {
        flex: 1,
        color: "#000",
        fontSize: 20,
        textAlign: "center",
        fontFamily: "K2D_700Bold",
        textAlignVertical: "center",
    }
})