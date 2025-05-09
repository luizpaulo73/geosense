import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import vagas from "../../data/vagas.json"

export default function Setor(props: { area: string }) {
  const { area } = props
  return (
    <View style={style.setor}>
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
            <Text style={style.textSetor}>Setor - {area}</Text>
            <Text style={style.textDisponiveis}>12 Disponíveis</Text>
        </View>
        <View style={style.viewVagas}>
            {vagas.map((vaga) => (
                <View key={vaga.idVaga} style={[style.vaga, { backgroundColor: vaga.ocupada ? "#00CCCF" : "#FF0000"}]}>
                    <Text style={style.nrVaga}>{vaga.idVaga}</Text>
                </View>
            ))}
        </View>
        
    </View>
  )
}

const style = StyleSheet.create({
    setor: {
        backgroundColor: "#030C20",
        borderWidth: 0.5,
        borderColor: "#94A3B8",
        width: "90%",
        borderRadius: 5,
    },
    textSetor: {
        color: "#fff",
        fontSize: 18,
        fontFamily: "K2D_700Bold",
        padding: 5,
    },
    textDisponiveis: {
        color: "#fff",
        fontSize: 14,
        fontFamily: "K2D_400Regular",
        borderWidth: 0.5,
        borderColor: "#94A3B8",
        borderRadius: 100,
        width: 110,
        height: 25,
        margin: 10,
        verticalAlign: "middle",
        textAlign: "center",
    },
    viewVagas: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 20,
        gap: 5,
    },
    vaga: {
        backgroundColor: "#FF0000",
        width: 50,
        height: 50,
        borderWidth: 0.5,
        borderColor: "#94A3B8",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 5,
    },
    nrVaga: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "K2D_700Bold",
    }
})