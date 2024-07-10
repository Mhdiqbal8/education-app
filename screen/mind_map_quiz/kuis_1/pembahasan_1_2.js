import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import ButtonNext from '../../../components/ButtonNext';
const norioTaniguchi = require('../../../assets/norio-taniguchi.webp')

const data = [
  {
    id: '1',
    img: norioTaniguchi,
    desc: 'Norio Taniguchi, seorang ilmuan Jepang adalah orang pertama yang menggunakan dan mendefinisikan istilah "nanoteknologi" pada tahun 1974 sebagai: "nanoteknologi terutama terdiri dari proses pemisahan, konsolidasi, dan deformasi bahan oleh satu atom atau satu molekul"'
  }
]
export default function Pembahasan_1_2() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pembahasan:</Text>
      {data.map((item) => (
        <View key={item.id} style={styles.flex}>
          <Image style={styles.img} source={item.img} />
          <Text style={styles.text_description}>{item.desc}</Text>
        </View>
      ))
      }
      <ButtonNext url='kuis_1_soal_3' />
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
    width: 450,
    fontSize: 20,
    textAlign: 'justify',
    paddingVertical: 10,
  },
});