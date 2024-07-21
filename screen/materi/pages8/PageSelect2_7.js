import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import image from "../../../assets/penerapan/aplikasiKesehatan2_7.jpg";

export default function Page7() {
  const home = () => {
    navigation.navigate("Materi/Pages8/Page1");
  };
  const previous = () => {
    navigation.navigate("Materi/Pages8/PageSelect2_6");
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
          <Pressable style={styles.buttonNext} onPress={home}>
            <Text style={styles.text}>icon Home </Text>
          </Pressable>
          <Pressable style={styles.buttonPrevious} onPress={previous}>
            <Text style={styles.text}>Back </Text>
          </Pressable>
        </View>
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
  flex: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  buttonNext: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },
  buttonPrevious: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },

  text: {
    color: "white",
    fontSize: 16,
  },
});
