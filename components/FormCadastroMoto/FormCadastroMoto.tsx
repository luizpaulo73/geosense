import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import DropDownPicker from "react-native-dropdown-picker"

export default function FormCadastroMoto() {

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
        <View style={{gap: 10, width: "100%", alignItems: "center"}}>
            <Text style={style.labelInput}>Selecione o Modelo da Moto</Text>
            <DropDownPicker
                open={openSetor}
                value={valueSetor}
                items={itemsSetor}
                setOpen={setOpenSetor}
                setValue={setValueSetor}
                setItems={setItemsSetor}
                placeholder="Selecione o Modelo"
                style={style.dropdown}
                dropDownContainerStyle={style.dropdownContainer}
                textStyle={style.text}
                zIndex={2000}
            />
            <View style={{flexDirection: "row", justifyContent: "space-between", width: "90%"}}>
                <Text style={style.labelInput}>Placa</Text>
                <View>
                   <Text style={style.labelInput}>Moto sem Placa</Text>
                   <TouchableOpacity />
                </View>
            </View>
            <TextInput placeholder="ABC-1234" style={style.searchBar} placeholderTextColor={"#94A3B8"}/>

            <Text style={style.labelInput}>Número de Chassi</Text>
            <TextInput placeholder="XXXYYYYYYZ1234567" style={style.searchBar} placeholderTextColor={"#94A3B8"}/>

            <Text style={style.labelInput}>Selecione o Problema da Moto</Text>
            <DropDownPicker
                open={openEstado}
                value={valueEstado}
                items={itemsEstado}
                setOpen={setOpenEstado}
                setValue={setValueEstado}
                setItems={setItemsEstado}
                placeholder="Selecione o Problema"
                style={style.dropdown}
                dropDownContainerStyle={style.dropdownContainer}
                textStyle={style.text}
                zIndex={1000}
            />
            <TouchableOpacity style={style.btnLogin}>
                <Text style={style.btnLoginText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    dropdown: {
        backgroundColor: '#030C20',
        borderColor: '#94A3B8',
        borderWidth: 0.5,
        width: "90%",
        marginHorizontal: "auto"
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
    dropdownContainer: {
        backgroundColor: '#030C20',
        borderColor: '#94A3B8',
        width: "100%",
        borderWidth: 0.5,
        marginHorizontal: "auto",
        fontFamily: "K2D_400Regular",
    },
    text: {
        fontSize: 15,
        color: '#94A3B8',
    },
    labelInput: {
        color: "#fff",
        fontSize: 18,
        marginTop: 10,
        fontFamily: "K2D_700Bold",
    },
    btnLogin: {
        backgroundColor: "#00CCCF",
        borderRadius: 5,
        width: "50%",
        height: 40,
        marginTop: 20,
    },
    btnLoginText: {
        flex: 1,
        color: "#000",
        fontSize: 20,
        textAlign: "center",
        fontFamily: "K2D_700Bold",
        textAlignVertical: "center",
    }
})