import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import image from "../../../assets/penerapan/penerapanKesehatan3.png";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Ionicons } from "@expo/vector-icons";
// gambar slide setelah cervical change

export default function Page4() {
  const home = () => {
    navigation.navigate("Materi/Pages8/Page1");
  };
  const previous = () => {
    navigation.navigate("Materi/Pages8/Page3");
  };
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <ImageBackground
        source={image}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.flex}>
          <Pressable style={styles.button} onPress={home}>
            <Ionicons name="home" size={24} color="black" />
          </Pressable>
          <Pressable style={styles.buttonPrevious} onPress={previous}>
            <FontAwesome6 name="arrow-left" size={30} color="black" />
          </Pressable>
        </View>
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
  flex: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  button: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 5,
  },
  buttonPrevious: {
    position: "absolute",
    left: 0,
    padding: 10,
    borderRadius: 5,
  },

  text: {
    color: "white",
    fontSize: 16,
  },
});
