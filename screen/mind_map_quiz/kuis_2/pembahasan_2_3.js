import { View, Text, StyleSheet } from 'react-native'
import ButtonNext from '../../../components/ButtonNext';

const data = [
  {
    id: '1',
    item: 'Atom Karbon memiliki nomor atom 6, yang berarti ia memiliki 6 proton.'
  },
  {
    id: '2',
    item: 'Karena atom dalam keadaan netral memiliki jumlah elektron yang sama dengan jumlah proton, Karbon juga memiliki 6 proton.'
  },
  {
    id: '3',
    item: 'Masa atom Karbon umumnya sekitar 12 (jumlah masa bulat terdekat). Jumlah neutron dihitung dengan mengurangi nomor atom dari masa atom:'
  }
]
export default function Pembahasan_2_3() {
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
        <Text style={{marginLeft: 30, fontSize: 24}}>Jumlah neturon = Masa atom - Nomor atom = 12 - 6 = 6</Text>
        <Text style={{fontSize: 16, marginTop: 10}}>Hasilnya adalah, atom karbon memiliki 6 elektron dan 6 neuron.</Text>
      </View>
      <ButtonNext url='kuis_2_soal_4' />
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