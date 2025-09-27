import { View, Text, Image, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import InfoMoto from "../../components/InfoMoto/InfoMoto";
import InfoDatasMoto from "../../components/InfoDatasMoto/InfoDatasMoto";
import BaseTelas from "../../components/BaseTelas/BaseTelas";
import { useLocalSearchParams } from "expo-router";

const { width } = Dimensions.get("window");

const motoImages: Record<string, any> = {
    "Mottu Sport": require("../../assets/motos/mottu-sport.png"),
    "Mottu Pop": require("../../assets/motos/mottu-pop.png"),
    "Mottu E": require("../../assets/motos/mottu-e.png"),
};

function ImagemMoto({modelo}: {modelo: string}) {
    const source = motoImages[modelo] ?? motoImages["Mottu Sport"];
    return <Image source={source} style={style.image} />;
}

export default function mottu() {
    const params = useLocalSearchParams<{ moto: string }>();
    const moto = JSON.parse(params.moto);

    return (
        <BaseTelas titulo="" botaoVoltar="/motos">
            <View style={{justifyContent: "center", alignItems: "center"}}>
                <Text style={[style.title, {marginBottom: -100}]}>{moto.modelo}</Text>
                <ImagemMoto modelo={moto.modelo} />
            </View>
            <View style={{gap: 20, width: "100%", alignItems: "center"}}>
                <InfoMoto moto={moto} />
                <InfoDatasMoto moto={moto} />
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
