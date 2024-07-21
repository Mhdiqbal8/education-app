import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import image from "../../../assets/penerapan/tekstilSelect3.jpg";

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
        <Pressable style={styles.buttonNext} onPress={home}>
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
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  buttonNext: {
    margin: 10,
    position: "absolute",
    bottom: "50%",
    right: 0,
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },

  text: {
    color: "white",
    fontSize: 16,
  },
});
