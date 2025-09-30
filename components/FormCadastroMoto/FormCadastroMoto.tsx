import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import DropDownPicker from "react-native-dropdown-picker"
import { Checkbox } from "react-native-paper";
import setores from "../../data/options/tipoProblema.json";
import modelo from "../../data/options/modeloMoto.json";
import { useTheme } from "../../context/ThemeContext";
import ErrorText from "../ErrorText/ErrorText";
import { useRouter } from "expo-router";

export default function FormCadastroMoto() {
    const { theme } = useTheme();
    const router = useRouter();

    const [isSelected, setSelection] = useState(false);
    const [openMoto, setOpenMoto] = useState(false);
    const [valueMoto, setValueMoto] = useState(null);
    const [itemsMoto, setItemsMoto] = useState(modelo);

    const [openProblema, setOpenProblema] = useState(false);
    const [valueProblema, setValueProblema] = useState(null);
    const [itemsProblema, setItemsProblema] = useState(setores);

    const [placa, setPlaca] = useState("");
    const [chassi, setChassi] = useState("");

    // Estados de erro
    const [errorPlaca, setErrorPlaca] = useState("");
    const [errorChassi, setErrorChassi] = useState("");
    const [errorModelo, setErrorModelo] = useState("");
    const [errorProblema, setErrorProblema] = useState("");

    const validate = () => {
        let valid = true;
        if (!valueMoto) {
            setErrorModelo("Selecione o modelo");
            valid = false;
        } else {
            setErrorModelo("");
        }
        if (!valueProblema) {
            setErrorProblema("Selecione o problema");
            valid = false;
        } else {
            setErrorProblema("");
        }
        if (!isSelected) {
            if (!placa || placa.length < 7) {
                setErrorPlaca("Placa inválida!");
                valid = false;
            } else {
                setErrorPlaca("");
            }
            setErrorChassi("");
        } else {
            if (!chassi || chassi.length < 10) {
                setErrorChassi("Chassi inválido!");
                valid = false;
            } else {
                setErrorChassi("");
            }
            setErrorPlaca("");
        }
        return valid;
    };

    const handleSelecionarVaga = () => {
        if (validate()) {
            router.push({
                pathname: "/selecionarMapa/[setor]",
                params: {
                    setor: valueProblema || "Motor Defeituoso",
                    modelo: valueMoto || "Mottu Sport",
                    placa,
                    chassi,
                    problema: valueProblema || "Motor"
                }
            });
        }
    };

    return (
        <View style={{gap: 10, width: "100%", alignItems: "center"}}>
            <View style={{flexDirection: "row", alignItems: "center", gap: 5, width: "90%"}}>
                <Text style={[style.labelInput, { color: theme.text }]}>Selecione o Modelo da Moto</Text>
            </View>
            <DropDownPicker
                open={openMoto}
                value={valueMoto}
                items={itemsMoto}
                setOpen={setOpenMoto}
                setValue={setValueMoto}
                setItems={setItemsMoto}
                placeholder="Selecione o Modelo"
                style={[style.dropdown, { backgroundColor: theme.subBackground}]}
                dropDownContainerStyle={[style.dropdownContainer, { backgroundColor: theme.subBackground }]}
                textStyle={[style.text, { color: theme.subText }]}
                zIndex={2000}
            />
            <ErrorText error={errorModelo}/>

            <View style={{flexDirection: "row", justifyContent: "space-between", width: "90%"}}>
                <Text style={[[style.labelInput, { color: theme.text }], {width: "50%"}]}>{isSelected? "Número de Chassi" : "Placa"}</Text>
                <View style={{flexDirection: "row", width: "50%", justifyContent: "flex-end", alignItems: "center"}}>
                   <Text style={[style.semPlacaText, { color: theme.subText }]}>Moto sem Placa</Text>
                   <Checkbox
                        status={isSelected ? 'checked' : 'unchecked'}
                        onPress={() => {
                        setSelection(!isSelected);
                        }}
                        color="#00CCCF"
                    />
                </View>
            </View>

            {!isSelected && (
                <>
                    <TextInput
                        value={placa}
                        onChangeText={setPlaca}
                        placeholder="ABC-1234"
                        style={[style.searchBar, { backgroundColor: theme.subBackground }]}
                        placeholderTextColor={theme.subText}
                    />
                    <ErrorText error={errorPlaca}/>
                </>
            )}

            {isSelected && (
                <>
                    <TextInput
                        value={chassi}
                        onChangeText={setChassi}
                        placeholder="XXXYYYYYYZ1234567"
                        style={[style.searchBar, { backgroundColor: theme.subBackground }]}
                        placeholderTextColor={theme.subText}
                    />
                    <ErrorText error={errorChassi}/>
                </>
            )}

            <Text style={[style.labelInput, { color: theme.text }]}>Selecione o Problema da Moto</Text>
            <DropDownPicker
                open={openProblema}
                value={valueProblema}
                items={itemsProblema}
                setOpen={setOpenProblema}
                setValue={setValueProblema}
                setItems={setItemsProblema}
                placeholder="Selecione o Problema"
                style={[style.dropdown, { backgroundColor: theme.subBackground}]}
                dropDownContainerStyle={[style.dropdownContainer, { backgroundColor: theme.subBackground }]}
                textStyle={[style.text, { color: theme.subText }]}
                zIndex={1000}
            />
            <ErrorText error={errorProblema}/>

            <TouchableOpacity style={style.btnLogin} onPress={handleSelecionarVaga}>
                <Text style={style.btnLoginText}>Selecionar Vaga</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    dropdown: {
        borderColor: '#94A3B8',
        borderWidth: 0.5,
        width: "90%",
        marginHorizontal: "auto"
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
    dropdownContainer: {
        borderColor: '#94A3B8',
        width: "100%",
        borderWidth: 0.5,
        marginHorizontal: "auto",
        fontFamily: "K2D_400Regular",
    },
    text: {
        fontSize: 15,
    },
    labelInput: {
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
        justifyContent: "center",
        alignItems: "center",
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
        fontSize: 14,
        fontFamily: "K2D_700Bold",
    },
    arrow: {
        width: 25,
        height: 15
    }
})