import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";

const data = [
  { id: '1',  name: 'Mengurangi biaya produksi beton' },
  { id: '2',  name: 'Meningkatkan warna beton' },
  { id: '3',  name: 'Meningkatkan kualitas kekuatan dan daya tahan beton' },
  { id: '4',  name: 'Mengurangi waktu pengeringan beton' },
  { id: '5',  name: 'Membuat beton lebih ringan' },
];


export default function Soal_5() {
  const navigation = useNavigation();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleCardPress = (item) => {
    setSelectedAnswer(item);
    if (item.id === '3' && item.name === 'Meningkatkan kualitas kekuatan dan daya tahan beton') {
      Alert.alert(
        'Selamat',
        'Jawaban Kamu benar yaitu Meningkatkan kualitas kekuatan dan daya tahan beton.',
        [
          {
            text: 'Lanjut',
            onPress: () => {
              navigation.navigate('HomeScreen');
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        'Maaf, jawaban kamu salah.',
        'Jawaban yang benar adalah Meningkatkan kualitas kekuatan dan daya tahan beton.',
        [
          {
            text: 'Pembahasan',
            onPress: () => {
              navigation.navigate('pembahasan_4_5');
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Apa manfaat utama dari penambahan nanopartikel silika ke dalam pembuatan beton?</Text>
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
