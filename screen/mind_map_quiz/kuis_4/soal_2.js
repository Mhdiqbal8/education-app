import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";

const data = [
  { id: '1',  name: 'Dengan menyerap sinar UV dan mengubahnya menjadi panas' },
  { id: '2',  name: 'Dengan memantulkan dan menyebarkan sinar UV' },
  { id: '3',  name: 'Dengan menutupi kulit dengan lapisan tebal' },
  { id: '4',  name: 'Dengan menambahkan nutrisi kedalam kulit' },
  { id: '5',  name: 'Dengan mengubah sinar UV menjadi cahaya tampak' },
];


export default function Soal_2() {
  const navigation = useNavigation();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleCardPress = (item) => {
    setSelectedAnswer(item);
    if (item.id === '2' && item.name === 'Dengan memantulkan dan menyebarkan sinar UV') {
      Alert.alert(
        'Selamat',
        'Jawaban Kamu benar yaitu Dengan memantulkan dan menyebarkan sinar UV.',
        [
          {
            text: 'Lanjut',
            onPress: () => {
              navigation.navigate('kuis_4_soal_3');
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        'Maaf, jawaban kamu salah.',
        'Jawaban yang benar adalah Dengan memantulkan dan menyebarkan sinar UV.',
        [
          {
            text: 'Pembahasan',
            onPress: () => {
              navigation.navigate('pembahasan_4_2');
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bagaimana cara kerja nano titanium dioksida dalam melidungi kulit dari sinar UV?</Text>
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
