import { Slot } from "expo-router";
import { ThemeProvider } from "../context/ThemeContext";
import { useFonts, K2D_400Regular, K2D_700Bold } from "@expo-google-fonts/k2d"

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        K2D_400Regular,
        K2D_700Bold,
    });
      
    if (!fontsLoaded) {
        return null;
    }

    return (
        <ThemeProvider>
            <Slot />
        </ThemeProvider>
    );
}
