import { FlatList, View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useTheme } from "../../context/ThemeContext";
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

type Vaga = {
    idVaga: string;
    ocupada: boolean;
    setor: string;
    moto: {
        id: string;
        placa: string;
        modelo: string;
        situacao: {
            status: string;
            tipoProblema: string;
        };
        dataEntrada: string;
        dataSaida: string | null;
        chassi?: string | null;
    } | null;
    id: string;
};

export default function EntradasRecentes() {
    const { theme } = useTheme();
    const [dados, setDados] = useState<Vaga[] | null>(null);

    useEffect(() => {
        async function fetchEntradas() {
            try {
                const storedData = await AsyncStorage.getItem("vagas");
                if (storedData) {
                    const parsedData = JSON.parse(storedData);
                    if (parsedData.vagas) {
                        setDados(parsedData.vagas.filter((item: Vaga) => !!item.moto));
                    } else {
                        console.error("Estrutura inesperada no storedData:", parsedData);
                    }
                }
            } catch (error) {
                console.error("Erro ao buscar as entradas:", error);
            }
        }
        fetchEntradas();
    }, []);

    return (
        <View style={style.container}>
            <FlatList
                style={style.lista}
                data={dados}
                renderItem={({ item }) => (
                    <View style={[style.item, { backgroundColor: theme.subBackground }]} key={item.moto!.id}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", width: "95%" }}>
                            <Text style={[style.title, { color: theme.text }]}>
                                {item.moto!.modelo} - {item.moto!.id} - {item.idVaga}
                            </Text>
                            <Text style={[style.textCategoria, { color: theme.subText }]}>
                                {item.moto!.situacao.tipoProblema}
                            </Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", width: "95%" }}>
                            <Text style={[style.textEntrada, { color: theme.subText }]}>
                                Entrada: {new Date(item.moto!.dataEntrada).toLocaleString()}
                            </Text>
                            <Link
                                href={{
                                    pathname: "/mottu",
                                    params: { moto: JSON.stringify(item.moto) }
                                }}
                                style={style.textDetalhes}
                            >
                                Detalhes
                            </Link>
                        </View>
                    </View>
                )}
                keyExtractor={item => item.moto!.id}
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
        paddingHorizontal: 10,
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