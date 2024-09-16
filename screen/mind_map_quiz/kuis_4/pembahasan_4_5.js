import { StyleSheet, Pressable, Text, SafeAreaView, ImageBackground } from "react-native";
import ButtonNext from "../../../components/ButtonNext";

export default function Pembahasan_4_5() {
  const imgSource = '../../../assets/quiz/kuis_4/pembahasan_4_5.png'
  const url = 'HomeScreen'
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require(imgSource)} style={styles.imageContainer}>
        <ButtonNext url={url} />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingLeft: 30
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#D9D9D9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  text: {
    fontSize: 16,
  },
});
