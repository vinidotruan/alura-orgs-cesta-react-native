import React from "react";
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";

const width = Dimensions.get('screen').width;

export function Cesta() {
    return <>
        <Image source={topo} style={style.topo}/>
        <Text style={style.titulo}>Detalhe da cesta</Text>
        <View style={style.cesta}>
            <Text style={style.nome}>Cesta de Verduras </Text>
            <View style={style.fazenda}>
                <Image source={logo} style={style.imagemFazenda}></Image>
                <Text style={style.nomeFazenda}>Jenny Jack Farm </Text>
            </View>
            <Text style={style.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazendo direto para a sua cozinha </Text>
            <Text style={style.preco}> R$40,00 </Text>
        </View>
    </>
}

const style = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        fontFamily: "MontserratBold"
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemFazenda: {
        height: 32,
        width: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        // fontFamily: "MontserratRegular"
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2a9f85",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
        marginTop: 8
    }

})