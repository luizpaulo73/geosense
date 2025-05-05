import { StyleSheet, Text, View } from "react-native";
import { useFonts, K2D_700Bold } from "@expo-google-fonts/k2d"
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import VisaoGeral from "../../components/VisaoGeral/VisaoGeral";
import NavBarDashboard from "../../components/NavBarDashboard/NavBarDashboard";

export default function Dashboard() {

  const [fontsLoaded] = useFonts({
    K2D_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={style.container}>
        <Cabecalho />
        <Text style={style.title}>Dashboard</Text>
        <VisaoGeral />
        <NavBarDashboard />
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