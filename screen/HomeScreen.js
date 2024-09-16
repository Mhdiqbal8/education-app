import { StyleSheet, SafeAreaView, ImageBackground, View } from "react-native";
import image from "../assets/homeScreen/home.png";
// import TrackPlayer from "react-native-track-player";
import ButtonSelect from "../components/ButtonSelect";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.Container}>
      <ImageBackground
        source={image}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay_1}>
          <View style={styles.button_6}>
            <ButtonSelect url="DaftarPustaka" />
          </View>
        </View>
        <View style={styles.overlay_2}>
          <View style={styles.button_1}>
            <ButtonSelect url="MateriNanoTeknologi" />
          </View>
          <View style={styles.button_2}>
            <ButtonSelect url="MindMapQuiz" />
          </View>
          <View style={styles.button_3}>
            <ButtonSelect url="CapaiDanTujuanPembelajaran" />
          </View>
        </View>
        <View style={styles.overlay_3}>
          <View style={styles.button_4}>
            <ButtonSelect url="Video" />
          </View>
          <View style={styles.button_5}>
            <ButtonSelect url="Profile" />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay_1: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  overlay_2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 80,
  },
  overlay_3: {
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
    gap: 80,
  },
  button_1: {
    marginTop: -10,
    marginLeft: -50,
  },
  button_2: {
    marginTop: -50,
    marginLeft: 20,
  },
  button_3: {
    marginTop: -20,
    marginLeft: 20,
  },
  button_4: {
    marginBottom: 10,
    marginLeft: -35,
  },
  button_5: {
    marginBottom: 10,
    marginLeft: 40,
  },
  button_6: {
    marginTop: 20,
    marginRight: 80,
  },
});
