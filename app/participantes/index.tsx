import { Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BaseTelas from "../../components/BaseTelas/BaseTelas";
import CardParticipante from "../../components/CardParticipante/CardParticipante";
import dados from "../../data/participantes.json"

export default function participantes() {

    const abrirLink = (url: string) => {
        Linking.openURL(url)
    };    

    return (
        <BaseTelas titulo="Participantes" botaoVoltar="/conta">
            {dados.map((dado, index) => (
                <CardParticipante dados={dado} key={index}/>
            ))}
            <TouchableOpacity onPress={() => abrirLink("https://github.com/luizpaulo73/geosense")} style={style.btnLogin}>
                <Text style={style.btnLoginText}>Repositório</Text>
            </TouchableOpacity>
        </BaseTelas>
    )
}

const style = StyleSheet.create({
    btnLogin: {
        backgroundColor: "#00CCCF",
        borderRadius: 5,
        width: "50%",
        height: 40,
        marginTop: 40
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