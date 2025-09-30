import { StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { Ionicons } from "@expo/vector-icons";

export default function ToggleThemeBtn() {
    const { theme, toggleTheme } = useTheme();
    const isLightTheme = theme.background === "#EDEDED";

  return (
    <TouchableOpacity onPress={toggleTheme}>
        <Ionicons
        name={isLightTheme ? "sunny" : "moon"}
        size={32}
        color={theme.text}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})