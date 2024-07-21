import { View, Text, StyleSheet } from 'react-native'
import ButtonNext from '../../../components/ButtonNext'

const data = [
  {
    id: '1',
    desc: 'Titanium dioksida digunakan pada kain anti-UV karena mampu memantulkan dan menyerap sinar UV dengan efektif, menjaga stabilitas saat terpapar sinar UV, transparan sehingga tidak mengubah penampilan kain, aman digunakan saat bergesekan dengan kulit, dan memberikan perlindungan tinggi terhadap radiasi UV dengan efisiensi tinggi.'
  }
]
export default function Pembahasan_4_3() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pembahasan:</Text>
      {data.map((item) => (
        <View key={item.id}>
          <Text style={styles.text_description}>{item.desc}</Text>
        </View>
      ))
      }
      <ButtonNext url='kuis_4_soal_4' />
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