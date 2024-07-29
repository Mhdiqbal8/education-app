import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import image from "../../../assets/penerapan/penerapanKesehatan1.png";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
// Page select 1: gambar cervical change

export default function Page2() {
  const next = () => {
    navigation.navigate("Materi/Pages8/Page3");
  };
  const previous = () => {
    navigation.navigate("Materi/Pages8/Page1");
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
          <Pressable style={styles.buttonNext} onPress={next}>
            <FontAwesome6 name="arrow-right" size={30} color="black" />
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
  buttonNext: {
    padding: 10,
    borderRadius: 5,
  },
  buttonPrevious: {
    padding: 10,
    borderRadius: 5,
  },

  text: {
    color: "white",
    fontSize: 16,
  },
});
