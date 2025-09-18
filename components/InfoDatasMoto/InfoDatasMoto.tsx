import { View, Text, Image, StyleSheet } from "react-native"
import { useTheme } from "../../context/ThemeContext";

export default function InfoDatasMoto() {
    const { theme } = useTheme();

    return (
        <View style={[style.container, { backgroundColor: theme.subBackground }]}>
            <View style={style.viewEntradaSaida}>
                <Text style={[style.info, { color: theme.text }]}>Data de Entrada</Text>
                <Text style={[style.info, { color: theme.text }]}>12:00 12/04/2026</Text>
            </View>
            <Image source={require('../../assets/logos/caminho.png')} style={style.icone} />
            <View style={style.viewEntradaSaida}>
                <Text style={[style.info, { color: theme.text }]}>Data de Saída</Text>
                <Text style={[style.info, { color: theme.text }]}>12:00 12/04/2026</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: "90%",
        borderWidth: 0.5,
        borderColor: "#94A3B8",
        borderRadius: 5,
        padding: 10,
        justifyContent: "space-between",
    },
    info: {
        fontSize: 16,
        fontFamily: "K2D_700Bold",
    },
    viewEntradaSaida: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    icone: {
        width: 20,
        height: 30,
    }
});
