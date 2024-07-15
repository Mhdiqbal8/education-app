import { View, Text, StyleSheet } from 'react-native'
import ButtonNext from '../../../components/ButtonNext';

const data = [
  {
    id: '1',
    item: 'Atom Sulfur memiliki nomor atom 16, yang berarti ia memiliki 16 proton.'
  },
  {
    id: '2',
    item: 'Karena atom dalam keadaan netral memiliki jumlah elektron yang sama dengan jumlah proton, sulfur juga memiliki 16 elektron'
  },
  {
    id: '3',
    item: 'Untuk menemukan jumlah neuron, kita perlu mengetahui massa atom sulfur, yang kira-kira adalah 32 (jumlah massa bulat terdekat). Jumlah neuron dihitung dengan mengurangi nomor atom dari massa atom:'
  }
]
export default function Pembahasan_2_4() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pembahasan:</Text>
      {data.map((item) => (
        <View key={item.id}>
          <Text style={styles.text_description}>{item.item}</Text>
        </View>
      ))
      }
      <View>
        <Text style={{marginLeft: 30, fontSize: 24}}>Jumlah neutron = Masa atom - Nomor atom = 32 - 16 = 16</Text>
        <Text style={{fontSize: 16, marginTop: 10}}>Jadi, atom Sulfur memiliki 16 proton, 16 elektron dan  16 neutron.</Text>
      </View>
      <ButtonNext url='kuis_2_soal_5' />
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
  text_description: {
    width: "100%",
    fontSize: 16,
    paddingVertical: 5,
  },
});