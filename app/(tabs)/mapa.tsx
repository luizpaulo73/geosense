import { ScrollView, StyleSheet, Text, View } from "react-native"
import Setor from "../../components/Setor/Setor"
import Cabecalho from "../../components/Cabecalho/Cabecalho"

export default function Mapa() {
  return (
    <View style={style.container}>
      <Cabecalho />
      <Text style={style.title}>Mapa do Pátio</Text>
      <ScrollView
        style={style.mapa}
        contentContainerStyle={[style.scrollContent, { alignItems: "center" }]}
        showsVerticalScrollIndicator={false}
>

        <Setor area={"IOT"}/>
        <Setor area={"Motor Defeituoso"}/>
        <Setor area={"Danos Estruturais"}/>
      </ScrollView>
      
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#020817",
        flex: 1,
        alignItems: "center",
    },
    title: {
      fontSize: 24,
      color: "#fff",
      width: "90%",
      fontFamily: "K2D_700Bold",
    },
    mapa: {
      width: "100%",
      height: "100%",
      marginTop: 20,
      paddingBottom: 20,
    },
    scrollContent: {
      paddingBottom: 40,
      alignItems: "center",
      gap: 15,
    }    
})