import { View, Text, StyleSheet } from "react-native";


export default function Disponibilidade() {
  return (
    <View style={style.container}>
        <View style={style.viewAvailability}>
            <View style={[style.boxAvailability,{ backgroundColor: "#00CCCF"}]} />
            <Text style={style.textAvailability}>Disponível</Text>
        </View>
        <View style={style.viewAvailability}>
            <View style={[style.boxAvailability,{ backgroundColor: "#FF0000"}]} />
            <Text style={style.textAvailability}>Ocupada</Text>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#030C20",
        borderWidth: 0.5,
        borderColor: "#94A3B8",
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-around",
        borderRadius: 5,
    },
    viewAvailability: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    textAvailability: {
        color: "#fff",
        fontSize: 15,
        fontFamily: "K2D_700Bold",
        padding: 5,
    },
    boxAvailability: {
        width: 20,
        height: 20,
        borderRadius: 5,
    }
})