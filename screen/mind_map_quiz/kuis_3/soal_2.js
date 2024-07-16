import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";

const data = [
  { id: '1',  name: 'Bentuk material dan warna material' },
  { id: '2',  name: 'Bahan material dan warna material' },
  { id: '3',  name: 'Ukuran material dan luas permukaan material' },
  { id: '4',  name: 'Ukuran material dan bentuk material' },
  { id: '5',  name: 'Struktur material dan kekerasan material' },
];


export default function Soal_2() {
  const navigation = useNavigation();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleCardPress = (item) => {
    setSelectedAnswer(item);
    if (item.id === '3' && item.name === 'Ukuran material dan luas permukaan material') {
      Alert.alert(
        'Selamat',
        'Jawaban Kamu benar yaitu Ukuran material dan luas permukaan material.',
        [
          {
            text: 'Lanjut',
            onPress: () => {
              navigation.navigate('kuis_3_soal_3');
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        'Maaf, jawaban kamu salah.',
        'Jawaban yang benar adalah Ukuran material dan luas permukaan material.',
        [
          {
            text: 'Pembahasan',
            onPress: () => {
              navigation.navigate('pembahasan_3_2');
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Konsep perubahan sifat material berdasarkan ukuran nano didasarkan pada dua aspek yaitu ... dan ...</Text>
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
