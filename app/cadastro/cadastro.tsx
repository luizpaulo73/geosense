import { View, Text, Image, StyleSheet } from "react-native";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import { Dimensions } from "react-native";
import InfoMoto from "../../components/InfoMoto/InfoMoto";

const { width } = Dimensions.get("window");

export default function cadastro() {
    return (
        <View style={style.container}>
        <Cabecalho />
        <Text style={style.title}>Mottu Sport</Text>
        <Image
            source={require("../../assets/motos/mottu-sport.png")}
            style={style.image}
        />
        <InfoMoto />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#020817",
    },
    title: {
        fontSize: 24,
        color: "#fff",
        width: "90%",
        fontFamily: "K2D_700Bold",
    },
    image: {
        width: width / 1.1,
        height: width / 1.1,
    },
});
