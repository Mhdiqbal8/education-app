import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";

const data = [
  { id: '1',  name: 'Elektron menyerap energi dan bergerak ke arah luar dari inti atom.' },
  { id: '2',  name: 'Elektron menyerap energi dan berpindah ke orbital yang memiliki energi lebih rendah.' },
  { id: '3',  name: 'Elektron kehilangan energi dan berpindah ke orbital yang memiliki energi lebih tinggi' },
  { id: '4',  name: 'Elektron kehilangan energi dan bergerak ke arah inti atom.' },
  { id: '5',  name: 'Energi dilepaskan dalam bentuk gelombang elektromagnetik.' },
];


export default function Soal_6() {
  const navigation = useNavigation();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleCardPress = (item) => {
    setSelectedAnswer(item);
    if (item.id === '5' && item.name === 'Energi dilepaskan dalam bentuk gelombang elektromagnetik.') {
      Alert.alert(
        'Selamat',
        'Jawaban Kamu benar yaitu Energi dilepaskan dalam bentuk gelombang elektromagnetik.',
        [
          {
            text: 'Lanjut',
            onPress: () => {
              navigation.navigate('MindMapQuiz_3');
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        'Maaf, jawaban kamu salah.',
        'Jawaban yang benar adalah Energi dilepaskan dalam bentuk gelombang elektromagnetik.',
        [
          {
            text: 'Pemabahasan',
            onPress: () => {
              navigation.navigate('pembahasan_2_6');
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Apa yang terjadi ketika elektron berpindah dari tingkat energi tinggi ke tingkat energi rendah dalam model Bohr?</Text>
      <View style={styles.gridContainer}>
        {data.map((item) => (
          <Pressable
            key={item.id}
            style={styles.cardContainer}
            onPress={() => handleCardPress(item)}
          >
            <Text style={styles.cardText}>{item.name}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardContainer: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    width: '48%',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
});
