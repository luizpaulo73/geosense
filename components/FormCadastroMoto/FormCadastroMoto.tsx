import { Link } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native"
import DropDownPicker from "react-native-dropdown-picker"
import { Checkbox } from "react-native-paper";
import setores from "../../data/options/tipoProblema.json";
import modelo from "../../data/options/modeloMoto.json";

export default function FormCadastroMoto() {

    const [isSelected, setSelection] = useState(false);
    const [openMoto, setOpenMoto] = useState(false);
    const [valueMoto, setValueMoto] = useState(null);
    const [itemsMoto, setItemsMoto] = useState(modelo);
    
    const [openProblema, setOpenProblema] = useState(false);
    const [valueProblema, setValueProblema] = useState(null);
    const [itemsProblema, setItemsProblema] = useState(setores);

    return (
        <View style={{gap: 10, width: "100%", alignItems: "center"}}>
            <View style={{flexDirection: "row", alignItems: "center", gap: 5, width: "90%"}}>
                <Text style={style.labelInput}>Selecione o Modelo da Moto</Text>
            </View>
            <DropDownPicker
                open={openMoto}
                value={valueMoto}
                items={itemsMoto}
                setOpen={setOpenMoto}
                setValue={setValueMoto}
                setItems={setItemsMoto}
                placeholder="Selecione o Modelo"
                style={style.dropdown}
                dropDownContainerStyle={style.dropdownContainer}
                textStyle={style.text}
                zIndex={2000}
            />
            <View style={{flexDirection: "row", justifyContent: "space-between", width: "90%"}}>
                <Text style={[style.labelInput, {width: "50%"}]}>Placa</Text>
                <View style={{flexDirection: "row", width: "50%", justifyContent: "flex-end", alignItems: "center"}}>
                   <Text style={style.semPlacaText}>Moto sem Placa</Text>
                   <Checkbox
                        status={isSelected ? 'checked' : 'unchecked'}
                        onPress={() => {
                        setSelection(!isSelected);
                        }}
                        color="#00CCCF"
                    />
                </View>
            </View>
            <TextInput placeholder="ABC-1234" style={style.searchBar} placeholderTextColor={"#94A3B8"}/>
            
            {isSelected ? <>
                <Text style={style.labelInput}>Número de Chassi</Text>
                <TextInput placeholder="XXXYYYYYYZ1234567" style={style.searchBar} placeholderTextColor={"#94A3B8"}/>
            </> : null}

            <Text style={style.labelInput}>Selecione o Problema da Moto</Text>
            <DropDownPicker
                open={openProblema}
                value={valueProblema}
                items={itemsProblema}
                setOpen={setOpenProblema}
                setValue={setValueProblema}
                setItems={setItemsProblema}
                placeholder="Selecione o Problema"
                style={style.dropdown}
                dropDownContainerStyle={style.dropdownContainer}
                textStyle={style.text}
                zIndex={1000}
            />
            <Link href={"/selecionarMapa/Motor"} style={style.btnLogin}>
                <Text style={style.btnLoginText}>Selecionar Vaga</Text>
            </Link>
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
        fontFamily: "K2D_700Bold",
        width: "90%",
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
    },
    semPlacaText: {
        color: "#94A3B8",
        fontSize: 14,
        fontFamily: "K2D_700Bold",
    },
    arrow: {
        width: 25,
        height: 15
    }
})