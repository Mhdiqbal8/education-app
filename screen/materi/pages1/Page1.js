import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import image from "../../../assets/strukturAtom/atom1.png";
import { Ionicons } from "@expo/vector-icons";

export default function Quiz1() {
  const link = () => {
    navigation.navigate("MateriNanoTeknologi");
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.Container}>
      <ImageBackground
        source={image}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <Pressable style={styles.button} onPress={link}>
          <Ionicons name="home" size={24} color="black" />
        </Pressable>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // margin: 10,
    position: "relative",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  button: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
