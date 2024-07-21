import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import image from "../../../assets/penerapan/panganSelect1.jpg";

export default function Page1() {
  const next = () => {
    navigation.navigate("Materi/Pages8/PanganSelect1_2");
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
          <Text style={styles.text}>Next</Text>
        </Pressable>
        {/* Button Next */}
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
    bottom: "50%",
    right: 0,
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 12,
  },
});
