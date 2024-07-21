import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import image from "../../../assets/nanoteknologi/nano2.jpg";

export default function Page2() {
  const link = () => {
    navigation.navigate("MateriNanoTeknologi");
  };
  const navigation = useNavigation();
  return (
    // <View style={styles.Container}>
    //   <Text style={styles.Text}>Gambar Mario tauchi</Text>
    //   <Button
    //     title="Icon Home"
    //     onPress={() => navigation.navigate("MateriNanoTeknologi")}
    //   >
    //     /
    //   </Button>
    //   <Button
    //     title="Icon Back"
    //     onPress={() => navigation.navigate("Materi/Pages7/Page1")}
    //   >
    //     /
    //   </Button>
    // </View>

    <View style={styles.Container}>
      <ImageBackground
        source={image}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <Pressable style={styles.button} onPress={link}>
          <Text style={styles.text}>icon home</Text>
        </Pressable>
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
  button: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
