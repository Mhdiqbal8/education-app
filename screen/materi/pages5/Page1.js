import React from "react";
import { useNavigation } from "@react-navigation/native";
import image from "../../../assets/fenomena/fenomena.png";
import { Ionicons } from "@expo/vector-icons";
// Gambar Fenomena & penerapan
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
          {/* <Text style={styles.text}>Icon Home </Text> */}
          <Ionicons name="home" size={24} color="black" />
        </Pressable>
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
  },
  button: {
    flex: 1,
    position: "absolute",
    // alignItems: "center",
    top: 0,
    right: 0,
    margin: 10,
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
