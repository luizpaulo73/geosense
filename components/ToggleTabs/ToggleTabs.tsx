import { useFonts, K2D_700Bold } from "@expo-google-fonts/k2d";
import { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default function ToggleTabs() {

    const [fontsLoaded] = useFonts({
        K2D_700Bold,
    });

    const [selectedTab, setSelectedTab] = useState<boolean>(true);

    const handleTabPress = () => {
        setSelectedTab(!selectedTab);
    }

  return (
    <View style={style.container}>
        <TouchableOpacity style={[style.tab, {backgroundColor: selectedTab ? "#030C20" : "transparent"}]} onPress={handleTabPress}>
            <Text style={style.tabText}>Entradas Recentes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[style.tab, {backgroundColor: !selectedTab ? "#030C20" : "transparent"}]} onPress={handleTabPress}>
            <Text style={style.tabText}>Problemas</Text>
        </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#1E293B",
        width: "90%",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    tab: {
        padding: 10,
        borderRadius: 5,
        margin: 5,
        width: "45%",
    },
    tabText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
        fontFamily: "K2D_700Bold",
    },
})