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
        <BaseTelas titulo='Dashboard'>
            <VisaoGeral />
            <NavBarDashboard />
            <ToggleTabs />
            <EntradasRecentes />
        </BaseTelas>
    )
}