import React from "react";
import { useNavigation } from "@react-navigation/native";
import image from "../../../assets/nanoMaterial/nanomaterial1.png";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
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
    navigation.navigate("Materi/Pages4/Page2");
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.Container}>
      <ImageBackground
        source={image}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <Pressable style={styles.iconHome} onPress={link}>
          <FontAwesome6 name="arrow-right" size={30} color="black" />
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
  iconHome: {
    flex: 1,
    position: "absolute",
    // alignItems: "center
    bottom: "50%",
    right: 0,
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
