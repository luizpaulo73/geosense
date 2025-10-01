import React, { useState } from 'react'
import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { useRouter } from 'expo-router';
import ErrorText from '../../components/ErrorText/ErrorText';

export default function Cadastro() {
    const { theme } = useTheme();
    const [login, setLogin] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [nome, setNome] = useState<string>("");
    const [errorLogin, setErrorLogin] = useState<string>("");
    const [errorSenha, setErrorSenha] = useState<string>("");
    const [errorNome, setErrorNome] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleCadastro = async () => {
        if (!nome) {
            setErrorNome("Digite seu nome!");
            return;
        }
        if (!login) {
            setErrorLogin("Digite seu e-mail!");
            return;
        }
        if (!senha) {
            setErrorSenha("Digite sua senha!");
            return;
        }
        setErrorNome("");
        setErrorLogin("");
        setErrorSenha("");
        setLoading(true);

        try {
            const BASE_URL = "http://10.0.2.2:5194";
            const novoUsuario = {
                id: null,
                nome,
                email: login,
                senha,
                tipo: 0
            };
            const response = await fetch(`${BASE_URL}/api/Usuario`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(novoUsuario)
            });

            if (response.ok) {
                Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
                router.push("/");
            } else {
                const erro = await response.text();
                Alert.alert("Erro", erro || "Erro ao cadastrar usuário.");
            }
        } catch (error) {
            Alert.alert("Erro", "Erro ao conectar ao servidor.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={[{backgroundColor: theme.background}, style.container]}>
            <Image source={require("../../assets/logos/logo.png")} style={style.logo}/>
            <Text style={[style.welcomeText, { color: theme.text }]}>Cadastro</Text>

            <Text style={[style.labelInput, { color: theme.text }]} >Nome</Text>
            <TextInput
                placeholder="Digite seu Nome"
                style={[style.input, { color: theme.text, backgroundColor: theme.subBackground }]}
                placeholderTextColor={theme.subText}
                value={nome}
                onChangeText={text => {
                    setNome(text);
                    setErrorNome("");
                }}
                autoCapitalize="words"
                autoCorrect={false}
            />
            <ErrorText error={errorNome}/>

            <Text style={[style.labelInput, { color: theme.text }]} >E-mail</Text>
            <TextInput
                placeholder="Digite seu E-mail"
                style={[style.input, { color: theme.text, backgroundColor: theme.subBackground }]}
                placeholderTextColor={theme.subText}
                value={login}
                onChangeText={text => {
                    setLogin(text);
                    setErrorLogin("");
                }}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
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

            <TouchableOpacity style={style.btnLogin} onPress={handleCadastro} disabled={loading}>
                <Text style={style.btnLoginText}>{loading ? "Cadastrando..." : "Cadastrar"}</Text>
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