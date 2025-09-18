import { StyleSheet, View, Text, Image } from "react-native";
import Cabecalho from "../Cabecalho/Cabecalho";
import { Link } from "expo-router";
import { useTheme } from "../../context/ThemeContext";

interface BaseTelasProps {
    children: React.ReactNode;
    titulo: string;
    botaoVoltar: string
}

export default function BaseTelas({children, titulo, botaoVoltar}: BaseTelasProps) {
    const { theme } = useTheme();

    return (
        <View style={[style.container, { backgroundColor: theme.background }]}>
            <Cabecalho/>
            <View style={{flexDirection: "row", alignItems: "center", gap: 5, width: "90%"}}>
                {botaoVoltar.length > 0 ? 
                    <Link href={botaoVoltar}>
                        <Image source={require('../../assets/logos/voltar.png')} style={style.arrow} />
                    </Link> :
                    <></>}
                {titulo.length > 0 ?
                    <Text style={[style.title, { color: theme.text }]}>{titulo}</Text> :
                    <></>}
            </View>
            {children}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        width: "90%",
        fontFamily: "K2D_700Bold",
    },
    arrow: {
        width: 25,
        height: 15
    }
})