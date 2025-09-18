import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useTheme } from '../../context/ThemeContext';

export default function VisaoGeral() {
    const { theme } = useTheme();

    return (
        <View style={style.container}>
            <View style={[style.infoBox, { backgroundColor: theme.subBackground }]}>
                <Text style={[style.titleBox, { color: theme.subText }]}>Vagas Disponíveis</Text>
                <Text style={style.numberBox}>12</Text>
            </View>
            <View style={[style.infoBox, { backgroundColor: theme.subBackground }]}>
                <Text style={[style.titleBox, { color: theme.subText }]}>Motos no Pátio</Text>
                <Text style={style.numberBox}>28</Text>
            </View>
            <View style={[style.infoBox, { backgroundColor: theme.subBackground }]}>
                <Text style={[style.titleBox, { color: theme.subText }]}>Problemas Críticos</Text>
                <Text style={style.numberBox}>5</Text>
            </View>
            <View style={[style.infoBox, { backgroundColor: theme.subBackground }]}>
                <Text style={[style.titleBox, { color: theme.subText }]}>Tempo Médio</Text>
                <Text style={style.numberBox}>2h</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      },      
    infoBox: {
        width: '48%',
        height: 90,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 5,
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#94A3B8',
    },
    titleBox: {
        fontSize: 14,
        fontFamily: 'K2D_700Bold',
        
    },
    numberBox: {
        color: '#00CCCF',
        fontSize: 45,
        fontFamily: 'K2D_700Bold',
        marginTop: -15,
    },
});
  