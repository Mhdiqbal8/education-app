import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";

const data = [
  { id: '1',  name: 'Mengurangi limbah nitrogen' },
  { id: '2',  name: 'Meningkatkan ketahanan tanaman terhadap penyakit' },
  { id: '3',  name: 'Mengurangi kebutuhan air' },
  { id: '4',  name: 'Menambah kandungan karbon dioksida di udara' },
  { id: '5',  name: 'Mengubah struktur tanah' },
];


export default function Soal_1() {
  const navigation = useNavigation();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleCardPress = (item) => {
    setSelectedAnswer(item);
    if (item.id === '1' && item.name === 'Mengurangi limbah nitrogen') {
      Alert.alert(
        'Selamat',
        'Jawaban Kamu benar yaitu Mengurangi limbah nitrogen.',
        [
          {
            text: 'Lanjut',
            onPress: () => {
              navigation.navigate('kuis_4_soal_2');
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        'Maaf, jawaban kamu salah.',
        'Jawaban yang benar adalah Mengurangi limbah nitrogen.',
        [
          {
            text: 'Pembahasan',
            onPress: () => {
              navigation.navigate('pembahasan_4_1');
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Apa tujuan dari terbuatnya pupuk nano nitrogen dalam bidang pertanian?</Text>
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
