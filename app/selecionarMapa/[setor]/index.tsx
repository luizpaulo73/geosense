import { StyleSheet, View } from 'react-native'
import Setor from '../../../components/Setor/Setor'
import Cabecalho from '../../../components/Cabecalho/Cabecalho'
import { useLocalSearchParams } from 'expo-router';

export default function index() {

    const { setor } = useLocalSearchParams();
    const setorString = Array.isArray(setor) ? setor[0] : setor || '';

    return (
        <View style={style.container}>
            <Cabecalho />
            <Setor area={setorString}/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#020817"
    }
})