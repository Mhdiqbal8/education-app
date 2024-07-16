import { View, Text, StyleSheet } from 'react-native'
import ButtonNext from '../../../components/ButtonNext'

const data = [
  {
    id: '1',
    desc: 'Zn dalam nanopartikel Zn0 berfungsi sebagai antioksidan karena memiliki kemampuan untuk menetralkan radikal bebas yang dapat merusak sel-sel tubuh. Ini penting untuk struktur dan fungsi berbagai protein karena Zn merupakan kofaktor penting dalam banyak enzim dan proses metabolik, termasuk dalam aktivitas enzim antioksidan dan regulasi protein. Kehadirannya membantu memelihara stabilitas struktural protein serta memengaruhi aktivitas enzim yang kritis untuk kesehatan seluler dan sistem kekebalan tubuh.'
  }
]
export default function Pembahasan_4_4() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pembahasan:</Text>
      {data.map((item) => (
        <View key={item.id}>
          <Text style={styles.text_description}>{item.desc}</Text>
        </View>
      ))
      }
      <ButtonNext url='kuis_4_soal_5' />
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