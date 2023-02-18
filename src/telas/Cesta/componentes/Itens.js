import React from "react";
import Texto from "../../../componentes/Texto";
import { FlatList, Image, StyleSheet, View } from "react-native";

export default function Itens({ item: { nome, imagem } }) {
  return (
    <View key={nome} style={style.item}>
      <Image source={imagem} style={style.imagem}></Image>
      <Texto style={style.nome}> {nome} </Texto>
    </View>
  );
}

const style = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: "center",
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646",
  },
  imagem: {
    width: 46,
    height: 46,
  },
});
