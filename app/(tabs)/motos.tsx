import { StyleSheet, View, TextInput } from "react-native";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import EntradasRecentes from "../../components/EntradasRecentes/EntradasRecentes";
import BaseTelas from "../../components/BaseTelas/BaseTelas";
import setores from "../../data/options/tipoProblema.json";
import estadoMoto from "../../data/options/estadoMoto.json";

export default function motos() {

    const [openSetor, setOpenSetor] = useState(false);
    const [valueSetor, setValueSetor] = useState(null);
    const [itemsSetor, setItemsSetor] = useState(setores);
    
    const [openEstado, setOpenEstado] = useState(false);
    const [valueEstado, setValueEstado] = useState(null);
    const [itemsEstado, setItemsEstado] = useState(estadoMoto);

    return (
        <BaseTelas titulo="Lista de Motos" botaoVoltar="">
            <View style={{gap: 10, width: "100%", alignItems: "center"}}>
            <TextInput placeholder="Buscar Por ID ou Placa" style={style.searchBar} placeholderTextColor={"#94A3B8"}/>
                <DropDownPicker
                    open={openSetor}
                    value={valueSetor}
                    items={itemsSetor}
                    setOpen={setOpenSetor}
                    setValue={setValueSetor}
                    setItems={setItemsSetor}
                    placeholder="Todos os Setores"
                    style={style.dropdown}
                    dropDownContainerStyle={style.dropdownContainer}
                    textStyle={style.text}
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
                    style={style.dropdown}
                    dropDownContainerStyle={style.dropdownContainer}
                    textStyle={style.text}
                    zIndex={1000}
                />
            </View>
            <EntradasRecentes />
        </BaseTelas>
    )
}

const style = StyleSheet.create({
    searchBar: {
        width: "90%",
        height: 45,
        backgroundColor: "#030C20",
        borderRadius: 5,
        paddingHorizontal: 10,
        textAlignVertical: "center",
        fontSize: 15,
        borderColor: "#94A3B8",
        borderWidth: 0.5,
        fontFamily: "K2D_400Regular",
        color: "#fff",
    },
    dropdown: {
        backgroundColor: '#030C20',
        borderColor: '#94A3B8',
        borderWidth: 0.5,
        width: "90%",
        marginHorizontal: "auto"
      },
      
      dropdownContainer: {
        backgroundColor: '#030C20',
        borderColor: '#94A3B8',
        width: "100%",
        borderWidth: 0.5,
        marginHorizontal: "auto"
      },
      text: {
        fontSize: 15,
        color: '#94A3B8',
      }
})