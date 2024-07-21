import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import image from "../../../assets/configElektron/elektron3.jpg";

export default function Page3() {
  const navigation = useNavigation();
  const link = () => {
    navigation.navigate("MateriNanoTeknologi");
  };
  return (
    <View style={styles.Container}>
      <ImageBackground
        source={image}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <Pressable style={styles.iconHome} onPress={link}>
          <Text style={styles.text}>Icon Home</Text>
        </Pressable>
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
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    width: "100%",
  },
  iconHome: {
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
