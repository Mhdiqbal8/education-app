import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import image from "../../../assets/penerapan/penerapan_kesehatan.jpg";
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
          <Text style={styles.text}>bidang Material </Text>
        </Pressable>
        {/* Button Next */}

        {/* Button select */}
        <Pressable style={styles.buttonSelect1} onPress={nextSelect1}>
          <Text style={styles.text}>Select 1 </Text>
        </Pressable>
        <Pressable style={styles.buttonSelect2} onPress={nextSelect2}>
          <Text style={styles.text}>Select 2 </Text>
        </Pressable>
        <Pressable style={styles.buttonSelect3} onPress={nextSelect3}>
          <Text style={styles.text}>Select 3 </Text>
        </Pressable>
        {/* Button select */}
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
  },
  buttonNext: {
    margin: 10,
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },
  buttonSelect1: {
    position: "absolute",
    top: "35%",
    left: "22%",
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },
  buttonSelect2: {
    position: "absolute",
    bottom: 0,
    left: "40%",
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },
  buttonSelect3: {
    position: "absolute",
    top: "33%",
    right: "23%",
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 12,
  },
});
