import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import image from "../../../assets/penerapan/bidangPangan.png";
import ButtonSelect from "../../../components/ButtonSelect";
// Gambar penerapan aplikasi di bidang material

export default function BidangPangan() {
  const next = () => {
    navigation.navigate("Materi/Pages8/BidangTekstil");
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
          <Text style={styles.text}>Nanoteknologi bidang Tekstil</Text>
        </Pressable>
        {/* Button Next */}

        {/* Button select */}
        <View style={styles.buttonSelect1}>
          <View style={styles.text}>
            <ButtonSelect url="Materi/Pages8/PanganSelect1_1" />
          </View>
        </View>
        <View style={styles.buttonSelect2}>
          <View style={styles.text}>
            <ButtonSelect url="Materi/Pages8/PanganSelect2_1" />
          </View>
        </View>
        <View style={styles.buttonSelect3}>
          <View style={styles.text}>
            <ButtonSelect url="Materi/Pages8/PanganSelect3" />
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
    bottom: 0,
    right: 0,
    backgroundColor: "#e27efb",
    padding: 10,
    borderRadius: 5,
  },
  buttonSelect1: {
    position: "absolute",
    bottom: "25%",
    left: "10%",
    padding: 10,
    borderRadius: 5,
  },
  buttonSelect2: {
    position: "absolute",
    bottom: "35%",
    left: "43%",
    padding: 10,
    borderRadius: 5,
  },
  buttonSelect3: {
    position: "absolute",
    top: "53%",
    right: "10%",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "#000",
    fontSize: 12,
  },
});
