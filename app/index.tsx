import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { useFonts, K2D_400Regular, K2D_700Bold } from "@expo-google-fonts/k2d"

export default function TelaInicial() {
    const [fontsLoaded] = useFonts({
        K2D_400Regular,
        K2D_700Bold,
      });
    
      if (!fontsLoaded) {
        return null;
      }

  return (
    <>
        <View style={style.container}>
            <Image source={require("../assets/logos/logo-splash.png")} style={style.logo}/>
            <Text style={style.welcomeText}>Bem Vindo</Text>

            <Text style={style.labelInput} >Login</Text>
            <TextInput placeholder="Digite seu Login" style={style.input} placeholderTextColor={"#94A3B8"}/>

            <Text style={style.labelInput} >Senha</Text>
            <TextInput placeholder="Digite sua Senha" style={style.input} placeholderTextColor={"#94A3B8"}/>

            <TouchableOpacity style={style.btnLogin}>
                <Text style={style.btnLoginText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    </>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#020817",
        paddingTop: 50,
    },
    logo: {
        width: 300,
        height: 300,
    },
    welcomeText: {
        color: "#fff",
        fontSize: 30,
        fontFamily: "K2D_700Bold",
    },
    input: {
        width: "90%",
        height: 45,
        backgroundColor: "#030C20",
        borderRadius: 5,
        paddingHorizontal: 10,
        textAlignVertical: "center",
        marginTop: 5,
        fontSize: 15,
        borderColor: "#94A3B8",
        borderWidth: 0.5,
        fontFamily: "K2D_400Regular",
        color: "#fff",
    },
    labelInput: {
        width: "90%",
        color: "#fff",
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
