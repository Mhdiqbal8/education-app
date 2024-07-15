import { View, Text, StyleSheet } from 'react-native'
import ButtonNext from '../../../components/ButtonNext'

const data = [
  {
    id: '1',
    desc: 'Konfigurasi elektron atom magnesium (Mg) berdasarkan teori atom Bohr adalah 2,8,2. yang berarti terdapat 2 elektron pada kulit pertama (K), 8 elektron pada kulit kedua (L), dan 2 elektron pada kulit ketiga (M). ini mengikuti aturan penempatan elektron dalam subkulit berdasarkan prinsip Aufbau dan aturan Hund.'
  }
]
export default function Pembahasan_3_1() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pembahasan:</Text>
      {data.map((item) => (
        <View key={item.id}>
          <Text style={styles.text_description}>{item.desc}</Text>
        </View>
      ))
      }
      <ButtonNext url='kuis_3_soal_2' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 30,
    textAlign: "left",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  img: {
    width: 200,
    height: 250
  },
  flex: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 20
  },
  text_description: {
    width: "100%",
    fontSize: 20,
    textAlign: 'justify',
    paddingVertical: 10,
  },
});