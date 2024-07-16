import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";

const data = [
  { id: '1',  name: '24.5 pm' },
  { id: '2',  name: '49 pm' },
  { id: '3',  name: '98 pm' },
  { id: '4',  name: '196 pm' },
  { id: '5',  name: '392 pm' },
];


export default function Soal_3() {
  const navigation = useNavigation();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleCardPress = (item) => {
    setSelectedAnswer(item);
    if (item.id === '2' && item.name === '49 pm') {
      Alert.alert(
        'Selamat',
        'Jawaban Kamu benar yaitu 49 pm.',
        [
          {
            text: 'Lanjut',
            onPress: () => {
              navigation.navigate('kuis_3_soal_4');
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        'Maaf, jawaban kamu salah.',
        'Jawaban yang benar adalah 49 pm.',
        [
          {
            text: 'Pembahasan',
            onPress: () => {
              navigation.navigate('pembahasan_3_3');
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Berapa jari-jari atom hydrogen jika diketahui jarak antara dua atom hydrogen yang membentuk molekul H2 adalah 98 pm?</Text>
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
