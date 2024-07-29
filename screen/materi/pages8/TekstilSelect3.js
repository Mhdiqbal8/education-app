import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import image from "../../../assets/penerapan/tekstilSelect3.png";
import { Ionicons } from "@expo/vector-icons";
export default function Page1() {
  const home = () => {
    navigation.navigate("Materi/Pages8/BidangTekstil");
  };
  const navigation = useNavigation();
  return (
    // <Te
    <View style={styles.Container}>
      <ImageBackground
        source={image}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <Pressable style={styles.button} onPress={home}>
          <Ionicons name="home" size={24} color="black" />
        </Pressable>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
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
