import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import image from "../../../assets/nanoMaterial/nanomaterial2.png";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Ionicons } from "@expo/vector-icons";

export default function Page2() {
  const home = () => {
    navigation.navigate("MateriNanoTeknologi");
  };
  const previous = () => {
    navigation.navigate("Materi/Pages4/Page1");
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.Container}>
      <ImageBackground
        source={image}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.flex}>
          <Pressable style={styles.iconHome} onPress={home}>
            <Ionicons name="home" size={24} color="black" />
          </Pressable>
          <Pressable style={styles.buttonPrevious} onPress={previous}>
            <FontAwesome6 name="arrow-left" size={30} color="black" />
          </Pressable>
        </View>
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
  flex: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  iconHome: {
    position: "absolute",
    backgroundColor: "#eee",
    top: 10,
    right: 10,
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
