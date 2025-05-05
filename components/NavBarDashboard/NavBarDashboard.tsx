import { K2D_700Bold, useFonts } from "@expo-google-fonts/k2d";
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function NavBarDashboard() {

    const [fontsLoaded] = useFonts({
        K2D_700Bold,
      });

  return (
    <View style={style.container}>
        <Link href="/dashboard" style={style.novaEntrada}>+ Nova Entrada</Link>
        <Link href="/dashboard" style={style.verMapa}>Ver Mapa</Link>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        alignItems: "center",
    },
    novaEntrada: {
        backgroundColor: "#00CCCF",
        width: "47%",
        height: 49,
        fontSize: 16,
        borderRadius: 5,
        verticalAlign: "middle",
        textAlign: "center",
        fontFamily: "K2D_700Bold",
    },
    verMapa: {
        backgroundColor: "#030C20",
        width: "47%",
        height: 50,
        borderRadius: 5,
        verticalAlign: "middle",
        textAlign: "center",
        fontSize: 16,
        fontFamily: "K2D_700Bold",
        borderWidth: 0.5,
        borderColor: "#94A3B8",
        color: "#fff",
    }
})