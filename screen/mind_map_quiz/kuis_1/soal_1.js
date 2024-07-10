import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable, Modal, Alert } from "react-native";

const data = [
  { id: '1', range: '1-100', unit: 'Nanometer' },
  { id: '2', range: '1-10', unit: 'mikrometer' },
  { id: '3', range: '1-100', unit: 'mikrometer' },
  { id: '4', range: '100-1000', unit: 'Nanometer' },
  { id: '5', range: '100-1000', unit: 'mikrometer' },
];


export default function Soal_1() {
  const navigation = useNavigation();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleCardPress = (item) => {
    setSelectedAnswer(item);
    if (item.id === '1' && item.range === '1-100' && item.unit === 'Nanometer') {
      Alert.alert(
        'Selamat',
        'Jawaban Kamu benar yaitu 1-100 Nanometer.',
        [
          {
            text: 'Lanjut',
            onPress: () => {
              navigation.navigate('kuis_1_soal_2');
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        'Maaf, jawaban kamu salah.',
        'Jawaban yang benar adalah 1-100 Nanometer.',
        [
          {
            text: 'Lanjut',
            onPress: () => {
              navigation.navigate('kuis_1_soal_2');
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Berapakah ukuran partikel nano?</Text>
      <View style={styles.gridContainer}>
        {data.map((item) => (
          <Pressable
            key={item.id}
            style={styles.cardContainer}
            onPress={() => handleCardPress(item)}
          >
            <Text style={styles.cardText}>{item.range}</Text>
            <Text style={styles.cardText}>{item.unit}</Text>
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
