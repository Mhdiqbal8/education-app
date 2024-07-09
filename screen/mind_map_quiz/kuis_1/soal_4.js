import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable, Modal, Alert } from "react-native";

const data = [
  { id: '1', desc: 'Pendekatan yang menggunakan proses fisik untuk membentuk struktur nano dari material bulk.' },
  { id: '2', desc: 'Pendekatan yang memanfaatkan teknik mekanik untuk memahat material menjadi struktur nano.' },
  { id: '3', desc: 'Pendekatan yang menggunakan tekanan tinggi dan suhu ekstrem untuk menciptakan struktur nano dari bahan baku yang lebih besar.' },
  { id: '4', desc: 'Proses mengumpulkan atom dan molekul menggunakan reaksi kimia, dari atom ke klaster atom menjadi nanopartikel.' },
  { id: '5', desc: 'Proses memecah dari benda padatan ke pecahan besar dalam bentuk serbuk mikro menjadi nanopartikel.' },
];


export default function Soal_4() {
  const navigation = useNavigation();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleCardPress = (item) => {
    setSelectedAnswer(item);
    if (item.id === '4' && item.desc === 'Proses mengumpulkan atom dan molekul menggunakan reaksi kimia, dari atom ke klaster atom menjadi nanopartikel.') {
      Alert.alert(
        'Selamat',
        'Jawaban Kamu benar yaitu Proses mengumpulkan atom dan molekul menggunakan reaksi kimia, dari atom ke klaster atom menjadi nanopartikel.',
        [
          {
            text: 'Lanjut',
            onPress: () => {
              navigation.navigate('pembahasan_1_4');
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        'Maaf, jawaban kamu salah.',
        'Jawaban yang benar adalah Proses mengumpulkan atom dan molekul menggunakan reaksi kimia, dari atom ke klaster atom menjadi nanopartikel.',
        [
          {
            text: 'Lanjut',
            onPress: () => {
              navigation.navigate('pembahasan_1_4');
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Apa yang dimaksud button-up?</Text>
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
