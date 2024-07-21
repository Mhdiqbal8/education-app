import React from "react";
import { useNavigation } from "@react-navigation/native";
import image from "../../../assets/tabelPeriodik/periodik2.jpg";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";

export default function Page2() {
  const nextPeriode1 = () => {
    navigation.navigate("Materi/Pages3/Page4");
  };
  const nextPeriode2 = () => {
    navigation.navigate("Materi/Pages3/Page4");
  };
  const next = () => {
    navigation.navigate("Materi/Pages3/Page3");
  };
  const previous = () => {
    navigation.navigate("Materi/Pages3/Page1");
  };
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <ImageBackground
        source={image}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.flex}>
          <Pressable style={styles.buttonNext} onPress={next}>
            <Text style={styles.text}>Next </Text>
          </Pressable>
          <Pressable style={styles.buttonPrevious} onPress={previous}>
            <Text style={styles.text}>Back </Text>
          </Pressable>
        </View>

        <View style={styles.selectPeriode}>
          <Pressable style={styles.selectOne} onPress={nextPeriode1}>
            <Text style={styles.textSelect}>Select 1 </Text>
          </Pressable>
          <Pressable style={styles.SelectTwo} onPress={nextPeriode2}>
            <Text style={styles.textSelect}>Select 2 </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    margin: 10,
    position: "relative",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  flex: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    zIndex: 1,
  },
  buttonNext: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonPrevious: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  selectPeriode: {
    position: "absolute",
    zIndex: 999,
    left: "15%",
    top: "28%",
    gap: 80,
  },
  selectOne: {
    backgroundColor: "#2196F3",
    padding: 5,
    borderRadius: 5,
    margin: 10,
  },
  SelectTwo: {
    backgroundColor: "#2196F3",
    padding: 5,
    borderRadius: 5,
    margin: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  textSelect: {
    color: "white",
    fontSize: 12,
  },
});
