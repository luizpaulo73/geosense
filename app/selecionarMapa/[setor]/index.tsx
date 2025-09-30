import Setor from '../../../components/Setor/Setor';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import BaseTelas from '../../../components/BaseTelas/BaseTelas';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SelecionarMapa() {
    const router = useRouter();
    const { setor, modelo, placa, chassi, problema } = useLocalSearchParams();
    const setorString = Array.isArray(setor) ? setor[0] : setor || '';

    const handleCadastrar = async () => {
        const novaVaga = {
            idVaga: "M-" + Math.floor(Math.random() * 1000),
            ocupada: true,
            setor: setorString,
            moto: {
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
            },
        };

        try {
            await fetch("http://10.0.2.2:3000/vagas", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(novaVaga),
            });
            router.push("/dashboard");
        } catch (error) {
            console.error("Erro ao cadastrar vaga:", error);
        }
    };

    return (
        <BaseTelas titulo="Selecione a Vaga" botaoVoltar="/cadastro">
            <View style={style.container}>
                <Setor area={setorString} />
                <TouchableOpacity style={style.btnLogin} onPress={handleCadastrar}>
                    <Text style={style.btnLoginText}>Cadastrar</Text>
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