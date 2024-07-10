import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable, Modal, Alert } from "react-native";

const data = [
  { id: '1', desc: 'Karena struktur atom menentukan warna material' },
  { id: '2', desc: 'Karena struktur atom menentukan sifat fisik. kimia, dan mekanik material pada skala nano' },
  { id: '3', desc: 'Karena struktur atom tidak berubah pada skala nano' },
  { id: '4', desc: 'Karena struktur atom hanya mempengaruhi konduktivitas listrik material' },
  { id: '5', desc: 'Karena struktur atom hanya mempengaruhi kemampuan material untuk menyerap cahaya' },
];


export default function Soal_3() {
  const navigation = useNavigation();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleCardPress = (item) => {
    setSelectedAnswer(item);
    if (item.id === '2' && item.desc === 'Karena struktur atom menentukan sifat fisik. kimia, dan mekanik material pada skala nano') {
      Alert.alert(
        'Selamat',
        'Jawaban Kamu benar yaitu Karena struktur atom menentukan sifat fisik. kimia, dan mekanik material pada skala nano.',
        [
          {
            text: 'Lanjut',
            onPress: () => {
              navigation.navigate('pembahasan_1_3');
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        'Maaf, jawaban kamu salah.',
        'Jawaban yang benar adalah Karena struktur atom menentukan sifat fisik. kimia, dan mekanik material pada skala nano.',
        [
          {
            text: 'Lanjut',
            onPress: () => {
              navigation.navigate('pembahasan_1_3');
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mengapa pemahaman tentang struktur atom sangat penting dalam pengembangan nanoteknologi?</Text>
      <View style={styles.gridContainer}>
        {data.map((item) => (
          <Pressable
            key={item.id}
            style={styles.cardContainer}
            onPress={() => handleCardPress(item)}
          >
            <Text style={styles.cardText}>{item.desc}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20
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
    width: '30%',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
});
