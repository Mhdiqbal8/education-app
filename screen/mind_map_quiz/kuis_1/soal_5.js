import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable, Modal, Alert } from "react-native";

const data = [
  { id: '1', desc: 'Proses mengumpulkan atom dan molekul menggunakan reaksi kimia, dari atom ke klaster atom menjadi nanopartikel.' },
  { id: '2', desc: 'Pendekatan yang menggunakan tekanan tinggi dan suhu ekstrem untuk menciptakan struktur nano dari bahan baku yang lebih besar.' },
  { id: '3', desc: 'Pendekatan yang memanfaatkan teknik mekanik untuk memahat material menjadi struktur nano.' },
  { id: '4', desc: 'Proses memecah dari benda padatan ke pecahan besar dalam bentuk serbuk mikro menjadi nano partikel.' },
  { id: '5', desc: 'Pendekatan yang memanfaatkan teknik mekanik untuk memahat material menjadi struktur nano.' },
];


export default function Soal_5() {
  const navigation = useNavigation();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleCardPress = (item) => {
    setSelectedAnswer(item);
    if (item.id === '4' && item.desc === 'Proses memecah dari benda padatan ke pecahan besar dalam bentuk serbuk mikro menjadi nano partikel.') {
      Alert.alert(
        'Selamat',
        'Jawaban Kamu benar yaitu Proses memecah dari benda padatan ke pecahan besar dalam bentuk serbuk mikro menjadi nano partikel.',
        [
          {
            text: 'Lanjut',
            onPress: () => {
              navigation.navigate('Page2_1');
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        'Maaf, jawaban kamu salah.',
        'Jawaban yang benar adalah Proses memecah dari benda padatan ke pecahan besar dalam bentuk serbuk mikro menjadi nano partikel.',
        [
          {
            text: 'Lanjut',
            onPress: () => {
              navigation.navigate('Page2_1');
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Apa yang dimaksud top-down?</Text>
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
