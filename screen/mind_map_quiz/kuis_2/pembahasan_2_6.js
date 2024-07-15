import { View, Text, StyleSheet } from 'react-native'
import ButtonNext from '../../../components/ButtonNext';

const data = [
  {
    id: '1',
    desc: 'Dalam model Bohr, ketika sebuah elektron berpindah dari tingkat energi tinggi ketingkat energi rendah, energi yang dihilangkan oleh elektron tersebut dilepaskan dalam bentuk gelombang elektromagnetik. Ini adalah konsep dasar dari emisi foton yang terkait dengan transisi elektronik dalam atom.'
  }
]
export default function Pembahasan_2_6() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pembahasan:</Text>
      {data.map((item) => (
        <View key={item.id}>
          <Text style={styles.text_description}>{item.desc}</Text>
        </View>
      ))
      }
      <ButtonNext url='MindMapQuiz_3' />
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