import { View, Image } from "react-native";


export default function Cabecalho() {
  return (
    <View>
        <Image source={require("../../assets/logos/logo-splash.png")} style={{width: 100, height: 100}}/>
    </View>
  )
}