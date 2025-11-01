import Setor from '../../../components/Setor/Setor';
import { useLocalSearchParams, useRouter } from 'expo-router';
import BaseTelas from '../../../components/BaseTelas/BaseTelas';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SelecionarMapa() {
    const router = useRouter();
    const { setor, modelo, placa, chassi, problema } = useLocalSearchParams();
    const setorString = Array.isArray(setor) ? setor[0] : setor || '';
    const [vagaSelecionada, setVagaSelecionada] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleCadastrar = async () => {
        if (!vagaSelecionada) {
            Alert.alert("Selecione uma vaga disponível primeiro!");
            return;
        }

        setLoading(true);
        const novaMoto = {
            id: Date.now().toString(),
            placa: placa || "",
            modelo: modelo || "Mottu Sport",
            chassi: chassi || null,
            situacao: {
                status: "Em Manutenção",
                tipoProblema: problema || "Motor",
            },
            dataEntrada: new Date().toISOString(),
            dataSaida: null,
        };

        try {
            const storedData = await AsyncStorage.getItem("vagas");
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                if (parsedData.vagas) {
                    const vagas = parsedData.vagas;

                    const vagaIndex = vagas.findIndex((vaga: any) => vaga.id === vagaSelecionada);
                    if (vagaIndex !== -1) {
                        vagas[vagaIndex] = {
                            ...vagas[vagaIndex],
                            ocupada: true,
                            moto: novaMoto,
                        };

                        await AsyncStorage.setItem("vagas", JSON.stringify({ vagas }));
                        router.push("/dashboard");
                    } else {
                        Alert.alert("Erro", "Vaga selecionada não encontrada.");
                    }
                } else {
                    Alert.alert("Erro", "A estrutura dos dados no AsyncStorage não contém a chave 'vagas'.");
                }
            } else {
                Alert.alert("Erro", "Nenhuma vaga disponível no armazenamento.");
            }
        } catch (error) {
            console.error("Erro ao cadastrar vaga:", error);
            Alert.alert("Erro ao cadastrar vaga:", String(error));
        } finally {
            setLoading(false);
        }
    };

    return (
        <BaseTelas titulo="Selecione a Vaga" botaoVoltar="/cadastro">
            <View style={style.container}>
                <Setor area={setorString} onSelecionarVaga={setVagaSelecionada} vagaSelecionada={vagaSelecionada || ""} />
                <TouchableOpacity style={style.btnLogin} onPress={handleCadastrar} disabled={loading}>
                    <Text style={style.btnLoginText}>{loading ? "Cadastrando..." : "Cadastrar"}</Text>
                </TouchableOpacity>
            </View>
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
        justifyContent: "center",
        alignItems: "center"
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