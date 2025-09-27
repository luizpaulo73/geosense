import { Text, View, StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";

interface Situacao {
    status: string;
    tipoProblema: string;
}

interface Moto {
    id: string;
    vaga: string;
    placa: string;
    modelo: string;
    situacao: Situacao;
}

export default function InfoMoto({ moto }: { moto: Moto }) {
    const { theme } = useTheme();

    return (
        <View style={[style.container, { backgroundColor: theme.subBackground }]}>
            <View style={style.viewInfoEsquerda}>
                <Text style={[style.info, { color: theme.text }]}>Id: {moto.id}</Text>
                <Text style={[style.info, { color: theme.text }]}>Vaga: {moto.vaga}</Text>
                <Text style={[style.info, { color: theme.text }]}>Placa: {moto.placa}</Text>
            </View>
            <View style={style.viewInfoDireita}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                    <View
                        style={{
                        backgroundColor: "#ff0000",
                        height: 18,
                        width: 18,
                        borderRadius: 5,
                        }}
                    />
                    <Text style={[style.info, { color: theme.text }]}>
                        {moto.situacao.status}
                    </Text>
                </View>
                <Text style={[style.textCategoria, { color: theme.text }]}>
                    {moto.situacao.tipoProblema}
                </Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        width: "90%",
        borderWidth: 0.5,
        borderColor: "#94A3B8",
        borderRadius: 5,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    info: {
        fontSize: 16,
        fontFamily: "K2D_700Bold",
    },
    viewInfoEsquerda: {
        justifyContent: "space-between",
    },
    viewInfoDireita: {
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    textCategoria: {
        fontSize: 15,
        fontFamily: "K2D_400Regular",
        borderWidth: 0.5,
        borderColor: "#94A3B8",
        borderRadius: 100,
        width: 60,
        height: 30,
        verticalAlign: "middle",
        textAlign: "center",
    },
});
