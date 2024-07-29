import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import image from "../../../assets/penerapan/panganSelect1.png";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

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
        {/* <Pressable style={styles.buttonNext} onPress={next}>
          <Text style={styles.text}>Next</Text>
        </Pressable> */}
        <View style={styles.flex}>
          <Pressable style={styles.buttonPrevious} onPress={next}>
            <FontAwesome6 name="arrow-right" size={30} color="black" />
          </Pressable>
        </View>

        {/* Button Next */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    position: "relative",
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
  buttonPrevious: {
    position: "absolute",
    right: 0,
    padding: 10,
    borderRadius: 5,
  },

  text: {
    color: "white",
    fontSize: 12,
  },
});
