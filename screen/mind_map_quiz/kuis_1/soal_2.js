import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Alert, ImageBackground } from "react-native";
import ButtonOption from "../../../components/ButtonOption";

export default function Soal_2() {
  const navigation = useNavigation();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const correctAnswer = 'Norio Taniguchi';
  const correctPosition = 'button_2';
  const corretUrl = 'kuis_1_soal_3'
  const wrongUrl = 'pembahasan_1_2'
  const imgSource = '../../../assets/quiz/kuis_1/soal_2.png'

  const handleAnswerPress = (position) => {
    setSelectedAnswer(position);

    if (position === correctPosition) {
      Alert.alert(
        'Selamat',
        `Jawaban Kamu benar yaitu ${correctAnswer}.`,
        [
          {
            text: 'Lanjut',
            onPress: () => {
              navigation.navigate(corretUrl);
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        'Maaf, jawaban kamu salah.',
        `Jawaban yang benar adalah ${correctAnswer}.`,
        [
          {
            text: 'Lanjut',
            onPress: () => {
              navigation.navigate(wrongUrl);
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require(imgSource)} style={styles.imageContainer}>
        <View style={styles.overlay_1}>
          <View style={styles.button_1}>
            <ButtonOption onPress={() => handleAnswerPress('button_1')} />
          </View>
          <View style={styles.button_2}>
            <ButtonOption onPress={() => handleAnswerPress('button_2')} />
          </View>
        </View>
        <View style={styles.overlay_2}>
          <View style={styles.button_3}>
            <ButtonOption onPress={() => handleAnswerPress('button_3')} />
          </View>
        </View>
        <View style={styles.overlay_3}>
          <View style={styles.button_4}>
            <ButtonOption onPress={() => handleAnswerPress('button_4')} />
          </View>
          <View style={styles.button_5}>
            <ButtonOption onPress={() => handleAnswerPress('button_5')} />
          </View>
        </View>
      </ImageBackground>
    </View>
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
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay_1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 80
  },
  overlay_2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 80
  },
  overlay_3: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 80
  },
  button_1: {
    marginTop: -10,
    marginRight: 60,
    marginLeft: 160
  },
  button_2: {
    marginTop: -10,
    marginRight: 200,
    marginLeft: 120
  },
  button_3: {
    marginTop: -240,
    marginRight: 50
  },
  button_4: {
    marginTop: -290,
    marginRight: 180
  },
  button_5: {
    marginTop: -290,
    marginRight: 30
  }
});
