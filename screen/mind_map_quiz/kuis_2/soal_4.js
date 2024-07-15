import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable, Modal, Alert } from "react-native";

const data = [
  { id: '1',  name: '16 Proton, 16 Elektron, 16 Neutron' },
  { id: '2',  name: '16 Proton, 16 Elektron, 18 Neutron' },
  { id: '3',  name: '16 Proton, 18 Elektron, 16 Neutron' },
  { id: '4',  name: '18 Proton, 16 Elektron, 16 Neutron' },
  { id: '5',  name: '18 Proton, 18 Elektron, 16 Neutron' },
];


export default function Soal_4() {
  const navigation = useNavigation();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleCardPress = (item) => {
    setSelectedAnswer(item);
    if (item.id === '1' && item.name === '16 Proton, 16 Elektron, 16 Neutron') {
      Alert.alert(
        'Selamat',
        'Jawaban Kamu benar yaitu 16 Proton, 16 Elektron, 16 Neutron.',
        [
          {
            text: 'Lanjut',
            onPress: () => {
              navigation.navigate('kuis_2_soal_5');
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        'Maaf, jawaban kamu salah.',
        'Jawaban yang benar adalah 16 Proton, 16 Elektron, 16 Neutron.',
        [
          {
            text: 'Pembahasan',
            onPress: () => {
              navigation.navigate('pembahasan_2_4');
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tentukan jumlah proton, elektron, dan pada atom Sulfur!</Text>
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
