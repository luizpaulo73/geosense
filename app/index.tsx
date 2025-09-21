import { Text, View, Image, StyleSheet, TextInput } from "react-native";
import { Link } from "expo-router";
import { useTheme } from "../context/ThemeContext";

export default function TelaInicial() {
    const { theme } = useTheme();

    return (
        <>
            <View style={[{backgroundColor: theme.background},style.container]}>
                <Image source={require("../assets/logos/logo.png")} style={style.logo}/>
                <Text style={[style.welcomeText, { color: theme.text }]}>Bem Vindo</Text>

                <Text style={[style.labelInput, { color: theme.text }]} >Login</Text>
                <TextInput placeholder="Digite seu Login" style={[style.input, { color: theme.text, backgroundColor: theme.subBackground }]} placeholderTextColor={theme.subText}/>

                <Text style={[style.labelInput, { color: theme.text }]} >Senha</Text>
                <TextInput placeholder="Digite sua Senha" style={[style.input, { color: theme.text, backgroundColor: theme.subBackground }]} placeholderTextColor={theme.subText}/>

                <Link href="/dashboard" style={style.btnLogin}>
                    <Text style={style.btnLoginText}>Entrar</Text>
                </Link>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 50,
    },
    logo: {
        width: 300,
        height: 300,
    },
    welcomeText: {
        fontSize: 30,
        fontFamily: "K2D_700Bold",
    },
    input: {
        width: "90%",
        height: 45,
        borderRadius: 5,
        paddingHorizontal: 10,
        textAlignVertical: "center",
        marginTop: 5,
        fontSize: 15,
        borderColor: "#94A3B8",
        borderWidth: 0.5,
        fontFamily: "K2D_400Regular",
    },
    labelInput: {
        width: "90%",
        fontSize: 18,
        marginTop: 10,
        fontFamily: "K2D_700Bold",
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
