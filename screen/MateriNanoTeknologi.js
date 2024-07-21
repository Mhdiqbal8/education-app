import { View, StyleSheet, ImageBackground, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import backgroundImage from "../assets/menu_materi.png";

export default function MateriNanoTeknologi() {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* <View style={styles.buttonContainer}> */}
        <View style={styles.select}>
          <Button
            style={styles.smallButton}
            title="Select"
            onPress={() => navigation.navigate("Materi/Pages7/Page1")}
          ></Button>
        </View>
        <View style={styles.selectOne}>
          <Button
            style={styles.smallButton}
            title="1"
            onPress={() => navigation.navigate("Materi/Pages1/Page1")}
          ></Button>
        </View>
        <View style={styles.selectTwo}>
          <Button
            style={styles.smallButton}
            title="2"
            onPress={() => navigation.navigate("Materi/Pages2/Page1")}
          ></Button>
        </View>
        <View style={styles.selectThree}>
          <Button
            style={styles.smallButton}
            title="3"
            onPress={() => navigation.navigate("Materi/Pages3/Page1")}
          ></Button>
        </View>
        <View style={styles.selectFour}>
          <Button
            style={styles.smallButton}
            title="4"
            onPress={() => navigation.navigate("Materi/Pages4/Page1")}
          ></Button>
        </View>
        <View style={styles.selectFive}>
          <Button
            style={styles.smallButton}
            title="5"
            onPress={() => navigation.navigate("Materi/Pages5/Page1")}
          ></Button>
        </View>
        <View style={styles.selectSix}>
          <Button
            style={styles.smallButton}
            title="6"
            onPress={() => navigation.navigate("Materi/Pages6/Page1")}
          ></Button>
        </View>
        {/* button select penerapan aplikasi berbagai bidang */}
        <View style={styles.selectPenerapan}>
          <Button
            style={styles.smallButton}
            title="Penerapan"
            onPress={() => navigation.navigate("Materi/Pages8/Page1")}
          ></Button>
        </View>
        {/* </View> */}
        {/* <Button
            title="1"
            onPress={() => navigation.navigate("Materi/Pages1/Page1")}
          ></Button>
          <Button
            title="2"
            onPress={() => navigation.navigate("Materi/Pages2/Page1")}
          ></Button>
          <Button
            title="3"
            onPress={() => navigation.navigate("Materi/Pages3/Page1")}
          ></Button>
          <Button
            title="4"
            onPress={() => navigation.navigate("Materi/Pages4/Page1")}
          ></Button>
          <Button
            title="5"
            onPress={() => navigation.navigate("Materi/Pages5/Page1")}
          ></Button>
          <Button
            title="6"
            onPress={() => navigation.navigate("Materi/Pages6/Page1")}
          ></Button> */}
      </ImageBackground>
    </View>
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
  select: {
    position: "absolute",
    top: "50%",
    right: "48%",
    zIndex: 999,
  },
  selectOne: {
    position: "absolute",
    top: "30%",
    right: "42%",
    zIndex: 999,
  },
  selectTwo: {
    position: "absolute",
    top: "70%",
    right: "50%",
    zIndex: 999,
  },
  selectThree: {
    position: "absolute",
    top: "63%",
    right: "43%",
    zIndex: 999,
  },
  selectFour: {
    position: "absolute",
    top: "43%",
    right: "30%",
    zIndex: 999,
  },
  selectFive: {
    position: "absolute",
    top: "35%",
    left: "33%",
    zIndex: 999,
  },
  selectSix: {
    position: "absolute",
    bottom: "20%",
    left: "20%",
    zIndex: 999,
  },
  selectPenerapan: {
    position: "absolute",
    bottom: "15%",
    left: "25%",
    zIndex: 999,
  },
});
