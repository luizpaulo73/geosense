import { StyleSheet, View } from "react-native";
import Cabecalho from "../Cabecalho/Cabecalho";

interface BaseTelasProps {
    children: React.ReactNode;
}

export default function BaseTelas({children}: BaseTelasProps) {
    return (
        <View style={style.container}>
            <Cabecalho/>
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
})