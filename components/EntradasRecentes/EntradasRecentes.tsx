import { FlatList, View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useTheme } from "../../context/ThemeContext";
import { useState, useEffect } from "react";

export default function EntradasRecentes() {
    const { theme } = useTheme();
    const [dados, setDados] = useState<Moto[] | null>(null);

    // Função para fazer o fetch dos dados
    const fetchEntradas = async () => {
        try {
            const response = await fetch('http://localhost:3000/entradas'); // Altere para a URL real
            const data = await response.json();
            setDados(data);
        } catch (error) {
            console.error("Erro ao buscar as entradas: ", error);
        }
    };

    useEffect(() => {
        fetchEntradas();
    }, []);

    return (
        <View style={style.container}>
            <FlatList
                style={style.lista}
                data={dados}
                renderItem={({ item }) => (
                    <View style={[style.item, { backgroundColor: theme.subBackground }]} key={item.id}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", width: "95%" }}>
                            <Text style={[style.title, { color: theme.text }]}>
                                {item.vaga} - {item.placa} - id: {item.id}
                            </Text>
                            <Text style={[style.textCategoria, { color: theme.subText }]}>
                                {item.situacao.tipoProblema} - {item.situacao.status}
                            </Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", width: "95%" }}>
                            <Text style={[style.textEntrada, { color: theme.subText }]}>
                                Entrada: {new Date(item.dataEntrada).toLocaleString()}
                            </Text>
                            <Text style={[style.textEntrada, { color: theme.subText }]}>
                                Saída: {new Date(item.dataSaida).toLocaleString()}
                            </Text>
                            <Link href={"/mottu"} style={style.textDetalhes}>
                                Detalhes
                            </Link>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        width: "100%",
        paddingBottom: 20,
    },
    lista: {
        width: "90%",
        marginTop: 10,
        marginHorizontal: "auto",
    },
    item: {
        width: "100%",
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        borderTopWidth: 0.5,
        borderRightWidth: 0.5,
        borderBottomWidth: 0.5,
        borderLeftWidth: 5,
        borderRightColor: "#94A3B8",
        borderBottomColor: "#94A3B8",
        borderTopColor: "#94A3B8",
        borderLeftColor: "#00CCCF",
    },
    title: {
        fontSize: 16,
        color: "#fff",
        width: "90%",
        fontFamily: "K2D_700Bold",
    },
    textEntrada: {
        fontSize: 12,
        fontFamily: "K2D_400Regular",
        paddingLeft: 10,
    },
    textCategoria: {
        fontSize: 10,
        fontFamily: "K2D_400Regular",
        borderWidth: 0.5,
        borderColor: "#94A3B8",
        borderRadius: 100,
        width: 70,
        height: 20,
        verticalAlign: "middle",
        textAlign: "center",
    },
    textDetalhes: {
        color: "#00CCCF",
        fontSize: 14,
        fontFamily: "K2D_700Bold",
    }
});
