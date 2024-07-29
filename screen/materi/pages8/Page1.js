import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import image from "../../../assets/penerapan/penerapan_kesehatan.png";
// import buttonImage from "../../../assets/button/button_material.png";
// Gambar penerapan aplikasi di bidang kesehatan

export default function Page1() {
  const next = () => {
    navigation.navigate("Materi/Pages8/BidangMaterial");
  };
  const nextSelect1 = () => {
    navigation.navigate("Materi/Pages8/Page2");
  };
  const nextSelect2 = () => {
    navigation.navigate("Materi/Pages8/PageSelect2_1");
  };
  const nextSelect3 = () => {
    navigation.navigate("Materi/Pages8/PageSelect3_1");
  };
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <ImageBackground
        source={image}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Button Next */}
        <Pressable style={styles.buttonNext} onPress={next}>
          <Text style={styles.text}>Nanoteknologi bidang material 2</Text>
        </Pressable>
        {/* Button Next */}

        {/* Button select */}
        <Pressable style={styles.buttonSelect1} onPress={nextSelect1}>
          <Text style={styles.text}>Select </Text>
        </Pressable>
        <Pressable style={styles.buttonSelect2} onPress={nextSelect2}>
          <Text style={styles.text}>Select </Text>
        </Pressable>
        <Pressable style={styles.buttonSelect3} onPress={nextSelect3}>
          <Text style={styles.text}>Select </Text>
        </Pressable>
        {/* Button select */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    position: "relative",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    zIndex: -99,
  },
  buttonNext: {
    margin: 10,
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#e27efb",
    // padding: 10 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonSelect1: {
    position: "absolute",
    top: "37%",
    left: "22%",
    backgroundColor: "#eee",
    paddingVertical: 3,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  buttonSelect2: {
    position: "absolute",
    bottom: "2%",
    left: "40%",
    backgroundColor: "#eee",
    paddingVertical: 3,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  buttonSelect3: {
    position: "absolute",
    top: "33%",
    right: "23%",
    backgroundColor: "#eee",
    paddingVertical: 3,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  text: {
    color: "#000",
    fontSize: 12,
  },
});
