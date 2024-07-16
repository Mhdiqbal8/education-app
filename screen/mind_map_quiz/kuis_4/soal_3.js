import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";

const data = [
  { id: '1',  name: 'Teknologi nanopartikel emas' },
  { id: '2',  name: 'Teknologi nanopartikel silika' },
  { id: '3',  name: 'Teknologi nanopartikel perak' },
  { id: '4',  name: 'Teknologi nanopartikel nitrogen' },
  { id: '5',  name: 'Teknologi nanopartikel titanium dioksida' },
];


export default function Soal_3() {
  const navigation = useNavigation();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleCardPress = (item) => {
    setSelectedAnswer(item);
    if (item.id === '5' && item.name === 'Teknologi nanopartikel titanium dioksida') {
      Alert.alert(
        'Selamat',
        'Jawaban Kamu benar yaitu Teknologi nanopartikel titanium dioksida.',
        [
          {
            text: 'Lanjut',
            onPress: () => {
              navigation.navigate('kuis_4_soal_4');
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        'Maaf, jawaban kamu salah.',
        'Jawaban yang benar adalah Teknologi nanopartikel titanium dioksida.',
        [
          {
            text: 'Pembahasan',
            onPress: () => {
              navigation.navigate('pembahasan_4_3');
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dalam bidang tekstil, teknologi nano jenis apa yang digunakan pada kain anti-UV?</Text>
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
