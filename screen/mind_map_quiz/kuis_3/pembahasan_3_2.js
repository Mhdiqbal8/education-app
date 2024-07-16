import { View, Text, StyleSheet } from 'react-native'
import ButtonNext from '../../../components/ButtonNext'

const data = [
  {
    id: '1',
    desc: 'Dua aspek utama yang menjadi dasar konsep perubahan sifat material berdasarkan ukuran nano. Pertama ukuran material yang sangat kecil pada skala nano memungkinkan efek kuantum menjadi lebih signifikan, mempengaruhi sifat-sifat material. Kedua rasio luas permukaan material yang tinggi pada skala nano memungkinkan sifat permukaan menjadi lebih dominan dalam menentukan sifat keseluruhan material. Kombinasi kedua aspek ini mempengaruhi reaktivitas kimia, kemampuan katalitik, kekuatan mekanik, dan sifat-sifat dari material nano.'
  }
]
export default function Pembahasan_3_2() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pembahasan:</Text>
      {data.map((item) => (
        <View key={item.id}>
          <Text style={styles.text_description}>{item.desc}</Text>
        </View>
      ))
      }
      <ButtonNext url='kuis_3_soal_3' />
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