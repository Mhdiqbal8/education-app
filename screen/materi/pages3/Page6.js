import React from "react";
import { useNavigation } from "@react-navigation/native";
import image from "../../../assets/tabelPeriodik/periodik6.jpg";
// Gambar jari-jari atom sebagai sifat keperiodik unsur
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";

export default function Page1() {
  const link = () => {
    navigation.navigate("MateriNanoTeknologi");
  };
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <ImageBackground
        source={image}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <Pressable style={styles.button} onPress={link}>
          <Text style={styles.text}>Icon Home </Text>
        </Pressable>
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
  button: {
    flex: 1,
    position: "absolute",
    // alignItems: "center",
    top: "10%",
    right: 0,
    margin: 10,
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
