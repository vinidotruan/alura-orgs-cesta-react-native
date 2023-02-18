import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { Cesta } from "./src/telas/Cesta/Cesta";
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

import mock from "./src/mocks/cesta";

export default function App() {
  const [fonteCarregada] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <AppLoading />;
  }
  return (
    <View>
      <SafeAreaView>
        <StatusBar />
        <Cesta {...mock} />
      </SafeAreaView>
    </View>
  );
}
