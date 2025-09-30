import { View, Text, StyleSheet } from "react-native";
import BaseTelas from "../../components/BaseTelas/BaseTelas";
import EntradasRecentes from "../../components/EntradasRecentes/EntradasRecentes";
import { Link } from "expo-router";
import { useTheme } from "../../context/ThemeContext";
import ToggleThemeBtn from "../../components/ToggleThemeBtn/ToggleThemeBtn";

export default function conta() {
    const { theme } = useTheme();

    return (
        <BaseTelas titulo='Conta' botaoVoltar="">
            <View style={[style.infoConta, { backgroundColor: theme.subBackground}]}>
                <View>
                    <Text style={[style.info, { color: theme.text }]}>João Silva</Text>
                    <Text style={[style.cargo, { color: theme.subText} ]}>Mecanico</Text>
                </View>
                <ToggleThemeBtn />
            </View>
            <Text style={[style.title, { color: theme.text }]}>Motos a reparar</Text>
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
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 90,
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
        fontFamily: "K2D_700Bold",
    },
    cargo: {
        fontSize: 15,
        fontFamily: "K2D_700Bold",
        paddingLeft: 5
    },
    title: {
        fontSize: 24,
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