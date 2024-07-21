import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import image from "../../../assets/configElektron/elektron2.jpg";

export default function Page2() {
  const next = () => {
    navigation.navigate("Materi/Pages2/Page3");
  };
  const previous = () => {
    navigation.navigate("Materi/Pages2/Page1");
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
            <Text style={styles.text}>Icon Next</Text>
          </Pressable>
          <Pressable style={styles.buttonPrevious} onPress={previous}>
            <Text style={styles.text}>Icon Back</Text>
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
