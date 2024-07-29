import {
  View,
  StyleSheet,
  ImageBackground,
  Pressable,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import backgroundImage from "../assets/menu_materi.png";
import ButtonSelect from "../components/ButtonSelect";
import { Ionicons } from "@expo/vector-icons";

export default function MateriNanoTeknologi() {
  const navigation = useNavigation();
  const home = () => {
    navigation.navigate("HomeScreen");
  };
  return (
    <SafeAreaView style={styles.Container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.select}>
          <View style={styles.smallButton}>
            <ButtonSelect url="Materi/Pages7/Page1" />
          </View>
        </View>
        <View style={styles.select1}>
          <View style={styles.smallButton}>
            <ButtonSelect url="Materi/Pages1/Page1" />
          </View>
        </View>
        <View style={styles.select2}>
          <View style={styles.smallButton}>
            <ButtonSelect url="Materi/Pages2/Page1" />
          </View>
        </View>
        <View style={styles.select3}>
          <View style={styles.smallButton}>
            <ButtonSelect url="Materi/Pages3/Page1" />
          </View>
        </View>
        <View style={styles.select4}>
          <View style={styles.smallButton}>
            <ButtonSelect url="Materi/Pages4/Page1" />
          </View>
        </View>
        <View style={styles.select5}>
          <View style={styles.smallButton}>
            <ButtonSelect url="Materi/Pages5/Page1" />
          </View>
        </View>
        <View style={styles.select6}>
          <View style={styles.smallButton}>
            <ButtonSelect url="Materi/Pages6/Page1" />
          </View>
        </View>
        <View style={styles.selectPenerapan}>
          <View style={styles.smallButton}>
            <ButtonSelect url="Materi/Pages8/Page1" />
          </View>
        </View>

        <View style={styles.flex}>
          <Pressable style={styles.iconHome} onPress={home}>
            <Ionicons name="home" size={24} color="black" />
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Text: {
    fontSize: 40,
    textAlign: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "relative",
    zIndex: 0,
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
  select: {
    position: "absolute",
    top: "50%",
    right: "48%",
    zIndex: 999,
  },
  select1: {
    position: "absolute",
    top: "36%",
    right: "33%",
    zIndex: 999,
  },
  select2: {
    position: "absolute",
    bottom: "20%",
    right: "48%",
    zIndex: 999,
  },
  select3: {
    position: "absolute",
    bottom: "24%",
    right: "31.7%",
    zIndex: 999,
  },
  select4: {
    position: "absolute",
    top: "52%",
    right: "22.5%",
    zIndex: 999,
  },
  select5: {
    position: "absolute",
    top: "40%",
    left: "25%",
    zIndex: 999,
  },
  select6: {
    position: "absolute",
    bottom: "30%",
    left: "20.5%",
    zIndex: 999,
  },
  selectPenerapan: {
    position: "absolute",
    bottom: "15%",
    left: "7.5%",
    zIndex: 999,
  },
});
