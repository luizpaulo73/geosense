import AsyncStorage from "@react-native-async-storage/async-storage";
import initialVagas from "../data/db.json";

export async function initializeAsyncStorage() {
    try {
        const storedData = await AsyncStorage.getItem("vagas");
        if (!storedData) {
            await AsyncStorage.setItem("vagas", JSON.stringify(initialVagas));
            console.log("Dados iniciais salvos no AsyncStorage.");
        } else {
            console.log("Dados já existem no AsyncStorage.");
        }
    } catch (error) {
        console.error("Erro ao inicializar o AsyncStorage:", error);
    }
}
