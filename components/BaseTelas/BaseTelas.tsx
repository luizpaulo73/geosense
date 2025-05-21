import { StyleSheet, View, Text } from "react-native";
import Cabecalho from "../Cabecalho/Cabecalho";

interface BaseTelasProps {
    children: React.ReactNode;
    titulo: string;
}

export default function BaseTelas({children, titulo}: BaseTelasProps,) {
    return (
        <View style={style.container}>
            <Cabecalho/>
            {titulo.length > 0 ?
                <Text style={style.title}>{titulo}</Text> :
                <></>}
            {children}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#020817"
    },
    title: {
        fontSize: 24,
        color: "#fff",
        width: "90%",
        fontFamily: "K2D_700Bold",
    }
})