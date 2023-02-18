import React from "react";

import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import Itens from "./componentes/Itens";
import Texto from "../../componentes/Texto";

export function Cesta({ topo, detalhes, itens }) {
  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={Itens}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...topo}></Topo>
              <View style={style.cesta}>
                <Detalhes {...detalhes} />
              </View>
              <Texto style={style.titulo}> {itens.titulo}</Texto>
            </>
          );
        }}
      />
    </>
  );
}

const style = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
});
