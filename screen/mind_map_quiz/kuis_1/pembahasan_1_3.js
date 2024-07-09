import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Pressable } from 'react-native'
import ButtonNext from '../../../components/ButtonNext';

const data = [
  {
    id: '1',
    desc: 'Pemahaman tentang struktur atom sangat penting dalam pengembangan nanoteknologi karena pada skala nano,material menunjukan sidat-sifat yang berbeda dibandingkan dengan skala makro. Struktur atom menentukan bagaimana atom-atom berinteraksi satu sama lain, yang pada gilirannya mempengaruhi sifat-sifat fisik (seperti kekuatan dan fleksibilitas), dan mekanik (seperti kekerasan dan elastisitas) dari material.'
  },
  {
    id: '2',
    desc: 'Pada skala nano, efek kuantum menjadi signifikan dan interaksi permukaan dominan karena rasio luas permukaan terhadap volume meningkat secara drastis. Hal ini dapat mengubah sifat optik, elektronik, dan magnetik material. Misalnya, nanopartikel emas dapat menunjukan warna yang berbeda dari emas dalam bentuk masal dan nanowire dapat memiliki konduktivitas listrik yang sangat berbeda dari kawat konvensional. Oleh karena itu, pemahaman yang mendalam tentang struktur atom memungkinkan ilmuwan dan insinyur untuk merancang dan manipulasi material pada skala atom demi mendapatkan sifat-sifat yang diinginkan dalam aplikasi nanoteknologi.'
  }
]
export default function Pembahasan_1_3() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pembahasan:</Text>
      <View style={styles.text_container}>
        {data.map((item) => (
          <Text style={styles.text_description} key={item.id}>{item.desc}</Text>
        ))}
      </View>
      <ButtonNext url='kuis_1_soal_4' />
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
    fontSize: 24,
    textAlign: "left",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  text_container: {
    paddingHorizontal: 20,
  },
  text_description: {
    width: 700,
    fontSize: 15,
    textAlign: 'justify',
    paddingVertical: 2,
  },
});