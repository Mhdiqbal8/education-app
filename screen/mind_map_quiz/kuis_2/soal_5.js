import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";

const data = [
  { id: '1', name: 'Elektron bergerak dalam jalur melingkar tetap di sekitar inti atom.' },
  { id: '2', name: 'Elektron berada dititik tetap dalam ruang di sekitar inti atom.' },
  { id: '3', name: 'Elektron dapat ditemukan didaerah tertentu dengan probabilitas tertentu disekitar inti atom, yang disebut orbital.' },
  { id: '4', name: 'Elektron tidak bergerak dan selalu berada di dalam inti atom.' },
  { id: '5', name: 'Elektron berada dalam daerah paling memungkinkan terdapat elektron.' },
];


export default function Soal_5() {
  const navigation = useNavigation();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleCardPress = (item) => {
    setSelectedAnswer(item);
    if (item.id === '5' && item.name === 'Elektron berada dalam daerah paling memungkinkan terdapat elektron.') {
      Alert.alert(
        'Selamat',
        'Jawaban Kamu benar yaitu Elektron berada dalam daerah paling memungkinkan terdapat elektron.',
        [
          {
            text: 'Lanjut',
            onPress: () => {
              navigation.navigate('kuis_2_soal_6');
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        'Maaf, jawaban kamu salah.',
        'Jawaban yang benar adalah Elektron berada dalam daerah paling memungkinkan terdapat elektron.',
        [
          {
            text: 'Pembahasan',
            onPress: () => {
              navigation.navigate('pembahasan_2_5');
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dalam teori mekanika kuantum, bagaimana letak keberadaan elektron pada orbital dijelaskan?</Text>
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
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
});
