import { StyleSheet, Pressable, Text, SafeAreaView, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ButtonNext from "../../../components/ButtonNext";

export default function Pembahasan_3_2() {
  const navigation = useNavigation();
  const imgSource = '../../../assets/quiz/kuis_3/pembahasan_3_2.png'
  const url = 'kuis_3_soal_3'
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
