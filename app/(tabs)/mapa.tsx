import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import Setor from "../../components/Setor/Setor"
import Disponibilidade from "../../components/Disponibilidade/Disponibilidade"
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import BaseTelas from "../../components/BaseTelas/BaseTelas";

export default function Mapa() {

    const [openSetor, setOpenSetor] = useState(false);
    const [valueSetor, setValueSetor] = useState(null);
    const [itemsSetor, setItemsSetor] = useState([
    { label: 'JavaScript', value: 'js' },
    { label: 'Python', value: 'python' },
    { label: 'Java', value: 'java' }
    ]);

    const [openEstado, setOpenEstado] = useState(false);
    const [valueEstado, setValueEstado] = useState(null);
    const [itemsEstado, setItemsEstado] = useState([
        { label: 'Disponível', value: 'disponivel' },
        { label: 'Ocupado', value: 'ocupado' }
    ]);

    return (
        <BaseTelas>
            <Text style={style.title}>Mapa do Pátio</Text>
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
            

            <ScrollView
                style={style.mapa}
                contentContainerStyle={[style.scrollContent, { alignItems: "center" }]}
                showsVerticalScrollIndicator={false}>
            
            
                <Disponibilidade />
                <Setor area={"IOT"}/>
                <Setor area={"Motor Defeituoso"}/>
                <Setor area={"Danos Estruturais"}/>
            </ScrollView>
        </BaseTelas>
  )
}

const style = StyleSheet.create({
    title: {
        fontSize: 24,
        color: "#fff",
        width: "90%",
        fontFamily: "K2D_700Bold",
    },
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