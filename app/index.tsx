import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { useTheme } from "../context/ThemeContext";
import ErrorText from "../components/ErrorText/ErrorText";
import { useState } from "react";
import { Link, useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TelaInicial() {
    const { theme } = useTheme();
    const [login, setLogin] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [errorLogin, setErrorLogin] = useState<string>("");
    const [errorSenha, setErrorSenha] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleLogin = async () => {
        if (!login) {
            setErrorLogin("Digite seu e-mail!");
            return;
        }
        if (!senha) {
            setErrorSenha("Digite sua senha!");
            return;
        }
        setErrorLogin("");
        setErrorSenha("");
        setLoading(true);
        try {
            const BASE_URL = "http://10.0.2.2:5194";
            const response = await fetch(`${BASE_URL}/api/Usuario/${login}`);

            if (response.status === 404) {
                setErrorLogin("Usuário não encontrado!");
                setLoading(false);
                return;
            }
            const user = await response.json();
            if (user.senha !== senha) {
                setErrorSenha("Senha incorreta!");
                setLoading(false);
                return;
            }
            
            await AsyncStorage.setItem('usuario', JSON.stringify(user));
            
            setErrorLogin("");
            setErrorSenha("");
            setLoading(false);
            router.push("/dashboard");
        } catch (error) {
            setLoading(false);
            setErrorLogin("Erro ao conectar ao servidor.");
        }
    };

    // FUNÇÃO PARA LOGIN OFFLINE
    const handleOfflineLogin = async () => {
        const usuarioDefault = {
            id: 0,
            nome: "Usuário Offline",
            email: "offline@geosense.com",
            senha: "123456",
            tipo: 1
        };
        await AsyncStorage.setItem('usuario', JSON.stringify(usuarioDefault));
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
                onChangeText={text => {
                    setLogin(text);
                    setErrorLogin("");
                }}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <ErrorText error={errorLogin}/>

            <Text style={[style.labelInput, { color: theme.text }]} >Senha</Text>
            <TextInput
                placeholder="Digite sua Senha"
                style={[style.input, { color: theme.text, backgroundColor: theme.subBackground }]}
                placeholderTextColor={theme.subText}
                value={senha}
                onChangeText={text => {
                    setSenha(text);
                    setErrorSenha("");
                }}
                secureTextEntry
            />
            <ErrorText error={errorSenha}/>

            <TouchableOpacity style={style.btnLogin} onPress={handleLogin} disabled={loading}>
                <Text style={style.btnLoginText}>{loading ? "Entrando..." : "Entrar"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[style.btnLogin, {backgroundColor: "#94A3B8"}]} onPress={() => router.push("/cadastroUsuario")} disabled={loading}>
                <Text style={style.btnLoginText}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[style.btnLogin, {backgroundColor: "#aaa"}]} onPress={handleOfflineLogin} disabled={loading}>
                <Text style={style.btnLoginText}>Logar - API offline</Text>
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
        opacity: 1
    },
    btnLoginText: {
        color: "#000",
        fontSize: 20,
        textAlign: "center",
        fontFamily: "K2D_700Bold",
        textAlignVertical: "center",
    }
});