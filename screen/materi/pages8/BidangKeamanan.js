import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import image from "../../../assets/penerapan/bidangKeamanan.png";
import ButtonSelect from "../../../components/ButtonSelect";
// Gambar penerapan aplikasi di bidang material

export default function Bidangtekstil() {
  const next = () => {
    navigation.navigate("Materi/Pages8/BidangAgrikultur");
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
        <Pressable style={styles.buttonNext} onPress={next}>
          <Text style={styles.text}>Nanoteknologi bidang Agrikultur 2</Text>
        </Pressable>
        {/* Button Next */}

        {/* Button select */}
        <View style={styles.buttonSelect1}>
          <View style={styles.text}>
            <ButtonSelect url="Materi/Pages8/PageKeamanan1_1" />
          </View>
        </View>
        <View style={styles.buttonSelect2}>
          <View style={styles.text}>
            <ButtonSelect url="Materi/Pages8/PageKeamanan2_1" />
          </View>
        </View>
        <View style={styles.buttonSelect3}>
          <View style={styles.text}>
            <ButtonSelect url="Materi/Pages8/PageKeamanan3_1" />
          </View>
        </View>
        {/* Button select */}
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
  buttonNext: {
    margin: 10,
    position: "absolute",
    backgroundColor: "#e27efb",
    bottom: 0,
    right: 0,
    padding: 10,
    borderRadius: 5,
  },
  buttonSelect1: {
    position: "absolute",
    top: "32%",
    left: "17%",
    padding: 10,
    borderRadius: 5,
  },
  buttonSelect2: {
    position: "absolute",
    bottom: "0.5%",
    left: "31%",
    padding: 10,
    borderRadius: 5,
  },
  buttonSelect3: {
    position: "absolute",
    top: "30%",
    right: "15%",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "#000",
    fontSize: 12,
  },
});
