import { View, Text, StyleSheet } from "react-native";
import BaseTelas from "../../components/BaseTelas/BaseTelas";
import EntradasRecentes from "../../components/EntradasRecentes/EntradasRecentes";
import { Link } from "expo-router";

export default function conta() {
    return (
        <BaseTelas titulo='Conta'>
            <View style={style.infoConta}>
                <Text style={style.info}>João Silva</Text>
                <Text style={style.cargo}>Mecanico</Text>
            </View>
            <Text style={style.title}>Motos a reparar</Text>
            <EntradasRecentes />
            <Link href={"/participantes"} style={style.btnLogin}>
                <Text style={style.btnLoginText}>Participantes</Text>
            </Link>
        </BaseTelas>
    )
}

const style = StyleSheet.create({
    infoConta: {
        width: "90%",
        height: 90,
        backgroundColor: "#030C20",
        borderRadius: 5,
        padding: 10,
        textAlignVertical: "center",
        marginTop: 5,
        fontSize: 15,
        borderColor: "#94A3B8",
        borderWidth: 0.5,
        fontFamily: "K2D_400Regular",
    },
    info: {
        fontSize: 20,
        color: "#fff",
        fontFamily: "K2D_700Bold",
    },
    cargo: {
        fontSize: 15,
        color: "#94A3B8",
        fontFamily: "K2D_700Bold",
        paddingLeft: 5
    },
    title: {
        fontSize: 24,
        color: "#fff",
        width: "90%",
        fontFamily: "K2D_700Bold",
        marginTop: 5
    },
    btnLogin: {
        backgroundColor: "#00CCCF",
        borderRadius: 5,
        width: "50%",
        height: 40,
        marginBottom: 10
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