import React from "react";
import Texto from "../../../componentes/Texto";

import topo from "../../../../assets/topo.png";
import { Dimensions, Image, StyleSheet } from "react-native";

const width = Dimensions.get("screen").width;

export default function Topo({ titulo }) {
  return (
    <>
      <Image source={topo} style={style.topo} />
      <Texto style={style.titulo}>{titulo}</Texto>
    </>
  );
}

const style = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
    color: "#000",
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
});
