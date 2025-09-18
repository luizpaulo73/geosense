import { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";

export default function ToggleTabs() {
    const { theme } = useTheme();

    const [selectedTab, setSelectedTab] = useState<boolean>(true);

    const handleTabPress = () => {
        setSelectedTab(!selectedTab);
    }

  return (
    <View style={[style.container, { backgroundColor: theme.toggleTabBackground }]}>
        <TouchableOpacity style={[style.tab, {backgroundColor: selectedTab ? theme.subBackground : theme.toggleTabBackground}]} onPress={handleTabPress}>
            <Text style={[style.tabText, { color: theme.text }]}>Entradas Recentes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[style.tab, {backgroundColor: !selectedTab ? theme.subBackground : theme.toggleTabBackground}]} onPress={handleTabPress}>
            <Text style={[style.tabText, { color: theme.text }]}>Problemas</Text>
        </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        width: "90%",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        borderRadius: 5,
    },
    tab: {
        padding: 5,
        borderRadius: 3,
        margin: 5,
        width: "45%",
    },
    tabText: {
        fontSize: 16,
        textAlign: "center",
        fontFamily: "K2D_700Bold",
    },
})