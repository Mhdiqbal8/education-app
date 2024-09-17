import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useAudio } from "../context/audio";

export default function Video() {
  const navigation = useNavigation();
  const { sound } = useAudio();
  const home = () => {
    navigation.navigate("HomeScreen");
  };
  const onStateChange = (state) => {
    if (state === 'ended') {
      if (sound) {
        sound.playAsync();
      }
    }
  };
  return (
    <View style={styles.Container}>
      <View style={styles.flex}>
        <Pressable style={styles.iconHome} onPress={home}>
          <Ionicons name="home" size={24} color="black" />
        </Pressable>
      </View>
      <View style={styles.youtube}>
        <Text style={styles.youtubeTitle}>
          Menyalakan internet saat mengakses vidio
        </Text>
        <YoutubePlayer
          style={styles.media}
          height={300}
          width={500}
          // play={playing}
          videoId={"NqC3JVDTsbc"}
          onChangeState={onStateChange}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  youtube: {
    position: "absolute",
  },
  youtubeTitle: {
    textAlign: "center",
    color: "red",
  },
  backgroundImage: {
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
});
