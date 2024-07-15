import { View, Text, StyleSheet } from 'react-native'
import ButtonNext from '../../../components/ButtonNext'

const data = [
  {
    id: '1',
    desc: 'Nano titanium dioksida melindungi kulit dari sinar UV dengan memantulkan dan menyebarkan sinar tersebut. Partikel-partikel nano ini efektif memantulkan sinar UV, mengurangi jumlah radiasi yang menembus kulit, dan menyebarkan sinar UV ke berbagai arah, sehingga mengurangi intensitas radiasi yang mencapai kulit. Dengan cara ini, nano titanium dioksida memberikan perlindungan spektrum luas terhadap UVA dan UVB tanpa menimbulkan reaksi kimia yang berbahaya. Selain itu, ukuran nano partikel membuatnya dapat diaplikasikan secara merata dan transparan pada kulit, memberikan perlindungan yang efektif dan nyaman.'
  }
]
export default function Pembahasan_4_2() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pembahasan:</Text>
      {data.map((item) => (
        <View key={item.id}>
          <Text style={styles.text_description}>{item.desc}</Text>
        </View>
      ))
      }
      <ButtonNext url='kuis_4_soal_3' />
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