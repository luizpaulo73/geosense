import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFonts, K2D_400Regular, K2D_700Bold } from '@expo-google-fonts/k2d';

export default function VisaoGeral() {
    const [fontsLoaded] = useFonts({
        K2D_400Regular,
        K2D_700Bold,
      });
    
      if (!fontsLoaded) {
        return null;
      }

  return (
    <View style={style.container}>
        <View style={style.infoBox}>
            <Text style={style.titleBox}>Vagas Disponíveis</Text>
            <Text style={style.numberBox}>12</Text>
        </View>
        <View style={style.infoBox}>
            <Text style={style.titleBox}>Motos no Pátio</Text>
            <Text style={style.numberBox}>28</Text>
        </View>
        <View style={style.infoBox}>
            <Text style={style.titleBox}>Problemas Críticos</Text>
            <Text style={style.numberBox}>5</Text>
        </View>
        <View style={style.infoBox}>
            <Text style={style.titleBox}>Tempo Médio</Text>
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
        backgroundColor: '#020817',
      },      
    infoBox: {
        width: '48%',
        height: 90,
        backgroundColor: '#030C20',
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 5,
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#94A3B8',
    },
    titleBox: {
        color: '#94A3B8',
        fontSize: 14,
        fontFamily: 'K2D_400Regular',
    },
    numberBox: {
        color: '#00CCCF',
        fontSize: 45,
        fontFamily: 'K2D_700Bold',
        marginTop: -15,
    },
  });
  