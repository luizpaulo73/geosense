import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";

export default function NavBarDashboard() {
    const { theme } = useTheme();

    return (
        <View style={style.container}>
            <Link
                href="/cadastro"
                style={style.novaEntrada}>
                    + Nova Entrada
            </Link>
            <Link 
                href="/mapa" 
                style={[style.verMapa, { backgroundColor: theme.subBackground, color: theme.text }]}>
                    Ver Mapa
            </Link>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        alignItems: "center",
    },
    novaEntrada: {
        backgroundColor: "#00CCCF",
        width: "47%",
        height: 49,
        fontSize: 16,
        borderRadius: 5,
        verticalAlign: "middle",
        textAlign: "center",
        fontFamily: "K2D_700Bold",
    },
    verMapa: {
        width: "47%",
        height: 50,
        borderRadius: 5,
        verticalAlign: "middle",
        textAlign: "center",
        fontSize: 16,
        fontFamily: "K2D_700Bold",
        borderWidth: 0.5,
        borderColor: "#94A3B8",
    }
})