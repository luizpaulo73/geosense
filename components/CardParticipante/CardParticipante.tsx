import { StyleSheet, View, Text, Image, Linking, TouchableOpacity } from "react-native";

type tipoParticipantes = {
    nome: string;
    rm: string;
    linkedin: string;
    github: string;
    foto: string;
};

type CardParticipanteProps = {
    dados: tipoParticipantes;
};

export default function CardParticipante({dados} : CardParticipanteProps) {

    const abrirLink = (url: string) => {
        Linking.openURL(url)
    };    

    return (
        <View style={style.card}>
            <View style={{width: "60%"}}>
                <Text style={style.infos}>{dados.nome}</Text>
                <View style={style.viewRMRedes}>
                    <Text style={style.infoRm}>RM {dados.rm}</Text>
                    <View style={{flexDirection: "row", gap: 10}}>
                        <TouchableOpacity onPress={() => abrirLink(dados.linkedin)}>
                            <Image style={style.image} source={require('../../assets/redes/linkedin.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => abrirLink(dados.github)}>
                            <Image style={style.image} source={require('../../assets/redes/github.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Image style={style.imgParticipante} source={require('../../assets/tabs/conta.png')}/>
        </View>
    )
}

const style = StyleSheet.create({
    card: {
        backgroundColor: "#030C20",
        width: "90%",
        height: 150,
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        borderTopWidth: 0.5,
        borderRightWidth: 0.5,
        borderBottomWidth: 0.5,
        borderLeftWidth: 5,
        borderRightColor: "#94A3B8",
        borderBottomColor: "#94A3B8",
        borderTopColor: "#94A3B8",
        borderLeftColor: "#00CCCF",
        alignItems: "center",
        flexDirection: "row"
    },
    infos: {
        fontSize: 18,
        color: "#fff",
        fontFamily: "K2D_700Bold",
    },
    image: {
        width: 30,
        height: 30
    },
    viewRMRedes: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },
    infoRm: {
        color: "#94A3B8",
        fontSize: 16,
        paddingLeft: 5
    },
    imgParticipante: {
        width: "34%",
        height: "90%",
    }
})
