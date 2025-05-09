import { Text, View, StyleSheet } from "react-native"

export default function InfoMoto() {
    return (
        <View style={style.container}>
            <View style={style.viewInfoEsquerda}>
                <Text style={style.info}>Id: 0845</Text>
                <Text style={style.info}>Vaga: M-12-231</Text>
                <Text style={style.info}>Placa: ABC-1234</Text>
            </View>
            <View style={style.viewInfoDireita}>
                <View style={{flexDirection: 'row', alignItems:"center", gap: 5}}>
                    <View style={{backgroundColor: '#ff0000', height: 18, width: 18, borderRadius: 5}}/>
                    <Text style={style.info}>Em manutenção</Text>
                </View>
                <Text style={style.textCategoria}>Motor</Text>
            </View>
    </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: "90%",
        backgroundColor: "#030C20",
        borderWidth: 0.5,
        borderColor: "#94A3B8",
        borderRadius: 5,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    info: {
        fontSize: 16,
        color: "#fff",
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
        color: "#fff",
        fontSize: 15,
        fontFamily: "K2D_400Regular",
        borderWidth: 0.5,
        borderColor: "#94A3B8",
        borderRadius: 100,
        width: 60,
        height: 30,
        verticalAlign: "middle",
        textAlign: "center",
    }
});