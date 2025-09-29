import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { useTheme } from "../context/ThemeContext";
import ErrorText from "../components/ErrorText/ErrorText";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function TelaInicial() {
    const { theme } = useTheme();
    const [login, setLogin] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [errorLogin, setErrorLogin] = useState<string>("");
    const [errorSenha, setErrorSenha] = useState<string>("");
    const router = useRouter();

    const handleLogin = () => {
        if (!login) {
            setErrorLogin("Mínimo de 3 letras!");
            return;
        }
        if (!senha) {
            setErrorSenha("Senha inválida!");
            return;
        }
        setErrorSenha("");
        setErrorLogin("");
        router.push("/dashboard");
    };

    return (
        <View style={[{backgroundColor: theme.background}, style.container]}>
            <Image source={require("../assets/logos/logo.png")} style={style.logo}/>
            <Text style={[style.welcomeText, { color: theme.text }]}>Bem Vindo</Text>

            <Text style={[style.labelInput, { color: theme.text }]} >Login</Text>
            <TextInput
                placeholder="Digite seu Login"
                style={[style.input, { color: theme.text, backgroundColor: theme.subBackground }]}
                placeholderTextColor={theme.subText}
                value={login}
                onChangeText={setLogin}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <ErrorText error={errorLogin && !login ? errorLogin : ""}/>

            <Text style={[style.labelInput, { color: theme.text }]} >Senha</Text>
            <TextInput
                placeholder="Digite sua Senha"
                style={[style.input, { color: theme.text, backgroundColor: theme.subBackground }]}
                placeholderTextColor={theme.subText}
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />
            <ErrorText error={errorSenha && !senha ? errorSenha : ""}/>

            <TouchableOpacity style={style.btnLogin} onPress={handleLogin}>
                <Text style={style.btnLoginText}>Entrar</Text>
            </TouchableOpacity>
        </View>
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
        justifyContent: "center",
        alignItems: "center",
    },
    btnLoginText: {
        color: "#000",
        fontSize: 20,
        textAlign: "center",
        fontFamily: "K2D_700Bold",
        textAlignVertical: "center",
    }
});