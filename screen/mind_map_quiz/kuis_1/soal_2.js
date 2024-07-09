import { View, Text, StyleSheet, Button, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const data = [
  { id: '1', name: 'Albert Einstein' },
  { id: '2', name: 'Stephen Hawking' },
  { id: '3', name: 'Richard Feynman' },
  { id: '4', name: 'Norio Taniguchi' },
  { id: '5', name: 'Nikola Tesla' },
];

export default function Soal_2() {
  const navigation = useNavigation();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleCardPress = (item) => {
    setSelectedAnswer(item);
    if (item.id === '4' && item.name === 'Norio Taniguchi') {
      Alert.alert(
        'Selamat',
        'Jawaban Kamu benar yaitu Norio Taniguchi.',
        [
          {
            text: 'Lanjut',
            onPress: () => {
              navigation.navigate('pembahasan_1_2');
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        'Maaf, jawaban kamu salah.',
        'Jawaban yang benar adalah Norio Taniguchi.',
        [
          {
            text: 'Lanjut',
            onPress: () => {
              navigation.navigate('pembahasan_1_2');
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Siapakah yang pertama kali mengenalkan istilah "Nanoteknologi" ?</Text>
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
    fontSize: 30,
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
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
});
