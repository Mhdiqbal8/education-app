import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";

const data = [
  { id: '1',  name: 'Mengurangi tingkat keasaman didalam tubuh' },
  { id: '2',  name: 'Mengurangi produksi hormon insulin didalam tubuh' },
  { id: '3',  name: 'Meningkatkan penyerapan kalsium oleh tulang' },
  { id: '4',  name: 'Menghambat pertumbuhan bakteri di usus' },
  { id: '5',  name: 'Berfungsi sebagai antioksidan dan penting untuk struktur serta fungsi berbagai protein' },
];


export default function Soal_4() {
  const navigation = useNavigation();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleCardPress = (item) => {
    setSelectedAnswer(item);
    if (item.id === '5' && item.name === 'Berfungsi sebagai antioksidan dan penting untuk struktur serta fungsi berbagai protein') {
      Alert.alert(
        'Selamat',
        'Jawaban Kamu benar yaitu Berfungsi sebagai antioksidan dan penting untuk struktur serta fungsi berbagai protein.',
        [
          {
            text: 'Lanjut',
            onPress: () => {
              navigation.navigate('kuis_4_soal_5');
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        'Maaf, jawaban kamu salah.',
        'Jawaban yang benar adalah Berfungsi sebagai antioksidan dan penting untuk struktur serta fungsi berbagai protein.',
        [
          {
            text: 'Pembahasan',
            onPress: () => {
              navigation.navigate('pembahasan_4_4');
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Apa manfaat utama dari penggunaan Zn pada nanopartikel seng oksida (Zn) dalam sistem saraf pusat pada hewan?</Text>
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
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
});
