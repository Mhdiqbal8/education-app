import React from "react";
import { useNavigation } from "@react-navigation/native";
import image from "../../../assets/tabelPeriodik/periodik1.png";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";

export default function Page1() {
  const link = () => {
    navigation.navigate("Materi/Pages3/Page2");
  };
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <ImageBackground
        source={image}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* <Pressable style={styles.buttonNext} onPress={link}>
          <FontAwesome6 name="arrow-right" size={30} color="black" />
        </Pressable> */}
        <View style={styles.flex}>
          <Pressable style={styles.buttonNext} onPress={link}>
            <FontAwesome6 name="arrow-right" size={30} color="black" />
          </Pressable>
        </View>
      </ImageBackground>
    </View>
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
  flex: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    zIndex: 1,
  },
  buttonNext: {
    padding: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
