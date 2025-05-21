import { View, Text, Image, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import InfoMoto from "../../components/InfoMoto/InfoMoto";
import InfoDatasMoto from "../../components/InfoDatasMoto/InfoDatasMoto";
import BaseTelas from "../../components/BaseTelas/BaseTelas";

const { width } = Dimensions.get("window");

export default function mottu() {
    return (
        <BaseTelas titulo="" botaoVoltar="/motos">
            <View style={{justifyContent: "center", alignItems: "center"}}>
                <Text style={[style.title, {marginBottom: -100}]}>Mottu Sport</Text>
                <Image
                    source={require("../../assets/motos/mottu-sport.png")}
                    style={style.image}
                />
            </View>
            <View style={{gap: 20, width: "100%", alignItems: "center"}}>
                <InfoMoto />
                <InfoDatasMoto />
            </View>
        </BaseTelas>
    );
}

const style = StyleSheet.create({
    title: {
        fontSize: 50,
        color: "#fff",
        width: "90%",
        fontFamily: "K2D_700Bold",
    },
    image: {
        width: width / 1.1,
        height: width / 1.1,
    },
});
