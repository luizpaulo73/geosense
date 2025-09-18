import { createContext, useContext, useState, ReactNode } from "react";

type Theme = {
    background: string;
    text: string;
    font400: string;
    font700: string;
};

const lightTheme: Theme = {
    background: "#FFFFFF",
    text: "#000000",
    font400: "K2D_400Regular",
    font700: "K2D_700Regular"
};

const darkTheme: Theme = {
    background: "#020817",
    text: "#FFFFFF",
    font400: "K2D_400Regular",
    font700: "K2D_700Regular"
};

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => setIsDark((prev) => !prev);

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
