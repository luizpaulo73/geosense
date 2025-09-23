import { ScrollView, StyleSheet, TextInput, View } from "react-native"
import Setor from "../../components/Setor/Setor"
import Disponibilidade from "../../components/Disponibilidade/Disponibilidade"
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import BaseTelas from "../../components/BaseTelas/BaseTelas";
import setores from "../../data/options/tipoProblema.json";
import estadoMoto from "../../data/options/estadoMoto.json";
import { useTheme } from "../../context/ThemeContext";

export default function Mapa() {
    const { theme } = useTheme();
    const [openSetor, setOpenSetor] = useState(false);
    const [valueSetor, setValueSetor] = useState(null);
    const [itemsSetor, setItemsSetor] = useState(setores);

    const [openEstado, setOpenEstado] = useState(false);
    const [valueEstado, setValueEstado] = useState(null);
    const [itemsEstado, setItemsEstado] = useState(estadoMoto);

    return (
        <BaseTelas titulo="Mapa do Pátio" botaoVoltar="">
            <View style={{gap: 10, width: "100%", alignItems: "center"}}>
                <TextInput placeholder="Buscar Por ID ou Placa" style={[style.searchBar, { backgroundColor: theme.subBackground, color: theme.text}]} placeholderTextColor={theme.subText}/>
                <DropDownPicker
                    open={openSetor}
                    value={valueSetor}
                    items={itemsSetor}
                    setOpen={setOpenSetor}
                    setValue={setValueSetor}
                    setItems={setItemsSetor}
                    placeholder="Todos os Setores"
                    style={[style.dropdown, { backgroundColor: theme.subBackground}]}
                    dropDownContainerStyle={[style.dropdownContainer, { backgroundColor: theme.subBackground }]}
                    textStyle={[style.text, { color: theme.subText }]}
                    zIndex={2000}
                />

                <DropDownPicker
                    open={openEstado}
                    value={valueEstado}
                    items={itemsEstado}
                    setOpen={setOpenEstado}
                    setValue={setValueEstado}
                    setItems={setItemsEstado}
                    placeholder="Estado"
                    style={[style.dropdown, { backgroundColor: theme.subBackground}]}
                    dropDownContainerStyle={[style.dropdownContainer, { backgroundColor: theme.subBackground }]}
                    textStyle={[style.text, { color: theme.subText }]}
                    zIndex={1000}
                />
            </View>
            

            <ScrollView
                style={style.mapa}
                contentContainerStyle={[style.scrollContent, { alignItems: "center" }]}
                showsVerticalScrollIndicator={false}>
            
            
                <Disponibilidade />
                <Setor area="IOT" />
                <Setor area="Motor Defeituoso" />
                <Setor area="Placa" />
            </ScrollView>
        </BaseTelas>
  )
}

const style = StyleSheet.create({
    mapa: {
        width: "100%",
        height: "100%",
        marginTop: 10,
        paddingBottom: 20,
    },
    scrollContent: {
        paddingBottom: 40,
        alignItems: "center",
        gap: 15,
    },
    searchBar: {
        width: "90%",
        height: 45,
        borderRadius: 5,
        paddingHorizontal: 10,
        textAlignVertical: "center",
        fontSize: 15,
        borderColor: "#94A3B8",
        borderWidth: 0.5,
        fontFamily: "K2D_400Regular",
    },
    dropdown: {
        borderColor: '#94A3B8',
        borderWidth: 0.5,
        width: "90%",
        marginHorizontal: "auto"
      },
      
      dropdownContainer: {
        borderColor: '#94A3B8',
        width: "100%",
        borderWidth: 0.5,
        marginHorizontal: "auto"
      },
      text: {
        fontSize: 15,
      }
})