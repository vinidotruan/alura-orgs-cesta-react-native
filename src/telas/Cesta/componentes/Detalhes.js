import React from "react";
import Texto from "../../../componentes/Texto";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";

export default function Detalhes({
  nome,
  logoFazenda,
  nomeFazenda,
  descricao,
  preco,
  botao,
}) {
  return (
    <>
      <Texto style={style.nome}>{nome} </Texto>
      <View style={style.fazenda}>
        <Image source={logoFazenda} style={style.imagemFazenda}></Image>
        <Texto style={style.nomeFazenda}>{nomeFazenda} </Texto>
      </View>
      <Texto style={style.descricao}>{descricao}</Texto>
      <Texto style={style.preco}>{preco}</Texto>
      <TouchableOpacity style={style.botao}>
        <Texto style={style.textoBotao}>{botao}</Texto>
      </TouchableOpacity>
    </>
  );
}

const style = StyleSheet.create({
  nome: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2a9f85",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
    marginTop: 8,
  },

  imagemFazenda: {
    height: 32,
    width: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontFamily: "MontserratRegular",
  },
  botao: {
    marginTop: 16,
    backgroundColor: "#2a9f85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});
