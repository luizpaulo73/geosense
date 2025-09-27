import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Theme = {
    background: string;
    subBackground: string;
    toggleTabBackground: string;
    text: string;
    subText: string;
    font400: string;
    font700: string;
};

const lightTheme: Theme = {
    background: "#EDEDED",
    subBackground: "#FFFDF9",
    toggleTabBackground: "#CCC",
    text: "#000000",
    subText: "#4B5563",
    font400: "K2D_400Regular",
    font700: "K2D_700Regular",
};

const darkTheme: Theme = {
    background: "#020817",
    subBackground: "#030C20",
    toggleTabBackground: "#1E293B",
    text: "#FFF",
    subText: "#94A3B8",
    font400: "K2D_400Regular",
    font700: "K2D_700Regular",
};

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const loadTheme = async () => {
            try {
                const savedTheme = await AsyncStorage.getItem("theme");
                if (savedTheme !== null) {
                    setIsDark(savedTheme === "dark");
                }
            } catch (error) {
                console.error("Erro ao carregar tema:", error);
            }
        };
        loadTheme();
    }, []);

    const toggleTheme = async () => {
        try {
            const newTheme = !isDark ? "dark" : "light";
            await AsyncStorage.setItem("theme", newTheme);
            setIsDark((prev) => !prev);
        } catch (error) {
            console.error("Erro ao salvar tema:", error);
        }
    };

    return (
        <ThemeContext.Provider
            value={{ theme: isDark ? darkTheme : lightTheme, toggleTheme }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme precisa estar dentro de ThemeProvider");
    }
    return context;
};
