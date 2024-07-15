import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable, Modal, Alert } from "react-native";

const data = [
  { id: '1',  name: 'Elektron dan Proton' },
  { id: '2',  name: 'Proton dan Neutron' },
  { id: '3',  name: 'Elektron' },
  { id: '4',  name: 'Neutron dan Elektron' },
  { id: '5',  name: 'Proton dan Positron' },
];


export default function Soal_2() {
  const navigation = useNavigation();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleCardPress = (item) => {
    setSelectedAnswer(item);
    if (item.id === '1' && item.name === 'Elektron') {
      Alert.alert(
        'Selamat',
        'Jawaban Kamu benar yaitu Elektron.',
        [
          {
            text: 'Lanjut',
            onPress: () => {
              navigation.navigate('kuis_2_soal_3');
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        'Maaf, jawaban kamu salah.',
        'Jawaban yang benar adalah Elektron.',
        [
          {
            text: 'Lanjut',
            onPress: () => {
              navigation.navigate('pembahasan_2_2');
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dalam struktur atom, terdapat inti nukleus. Di luar ini nukleus terdapat?</Text>
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
