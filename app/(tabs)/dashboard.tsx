import { StyleSheet, Text, View } from "react-native";
import { useFonts, K2D_700Bold } from "@expo-google-fonts/k2d"
import VisaoGeral from "../../components/VisaoGeral/VisaoGeral";
import NavBarDashboard from "../../components/NavBarDashboard/NavBarDashboard";
import ToggleTabs from "../../components/ToggleTabs/ToggleTabs";
import EntradasRecentes from "../../components/EntradasRecentes/EntradasRecentes";
import BaseTelas from "../../components/BaseTelas/BaseTelas";

export default function Dashboard() {

    const [fontsLoaded] = useFonts({
        K2D_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <BaseTelas>
            <Text style={style.title}>Dashboard</Text>
            <VisaoGeral />
            <NavBarDashboard />
            <ToggleTabs />
            <EntradasRecentes />
        </BaseTelas>
    )
}


const style = StyleSheet.create({
    title: {
      fontSize: 24,
      color: "#fff",
      width: "90%",
      fontFamily: "K2D_700Bold",
    }
})