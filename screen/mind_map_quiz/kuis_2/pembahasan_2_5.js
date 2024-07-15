import { View, Text, StyleSheet } from 'react-native'
import ButtonNext from '../../../components/ButtonNext';

const data = [
  {
    id: '1',
    desc: 'Dalam teori mekanika kuantum, keberadaan elektron dalam atom dijelaskan oleh fungsi gelombang yang memberikan distribusi probabilitas untuk menemukan elektron pada titik tertentu diruang. Orbital adalah daerah di sekitar inti atom di mana probabilitas menemukan elektron paling tinggi. ini berarti bahwa elektron berada dalam daerah yang paling memungkinkan terdapat elektron, yang disebut orbital. Orbital memiliki bentuk dan ukuran yang berbeda (seperti s, p, d, f) yang ditentukan oleh bilangan kuantum.'
  }
]
export default function Pembahasan_2_5() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pembahasan:</Text>
      {data.map((item) => (
        <View key={item.id}>
          <Text style={styles.text_description}>{item.desc}</Text>
        </View>
      ))
      }
      <ButtonNext url='kuis_2_soal_6' />
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