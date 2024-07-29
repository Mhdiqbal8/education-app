import React from "react";
import { useNavigation } from "@react-navigation/native";
import image from "../../../assets/configElektron/elektron1.png";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  SafeAreaView,
} from "react-native";

export default function Page1() {
  const link = () => {
    navigation.navigate("Materi/Pages2/Page2");
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
          <Text style={styles.text}>Click Image </Text>
        </Pressable>
      </ImageBackground>
    </SafeAreaView>
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
    position: "absolute",
    top: "50%",
    right: "39%",
    backgroundColor: "#eee",
    padding: 5,
    borderRadius: 5,
  },
  text: {
    color: "#000",
    fontSize: 12,
  },
});
