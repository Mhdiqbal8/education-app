import React from "react";
import { useNavigation } from "@react-navigation/native";
import image from "../../../assets/tabelPeriodik/periodik2.png";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
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
            <FontAwesome6 name="arrow-right" size={30} color="black" />
          </Pressable>
          <Pressable style={styles.buttonPrevious} onPress={previous}>
            <FontAwesome6 name="arrow-left" size={30} color="black" />
          </Pressable>
        </View>

        <View style={styles.selectPeriode}>
          <Pressable style={styles.selectOne} onPress={nextPeriode1}>
            <Text style={styles.textSelect}>Select </Text>
          </Pressable>
          <Pressable style={styles.SelectTwo} onPress={nextPeriode2}>
            <Text style={styles.textSelect}>Select </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    position: "relative",
    backgroundColor: "white",
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
    padding: 10,
  },
  buttonPrevious: {
    padding: 10,
  },
  selectPeriode: {
    position: "absolute",
    zIndex: 999,
    left: "15%",
    top: "28%",
    gap: 90,
  },
  selectOne: {
    backgroundColor: "#eee",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
    margin: 10,
  },
  SelectTwo: {
    backgroundColor: "#eee",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
    margin: 10,
    left: "-10%",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  textSelect: {
    color: "black",
    fontSize: 12,
  },
});
