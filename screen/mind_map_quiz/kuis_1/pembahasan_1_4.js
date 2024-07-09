import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Pressable } from 'react-native'
import ButtonNext from '../../../components/ButtonNext';

const data = [
  {
    id: '1',
    desc: 'Metode button-up dalam nanoteknologi melibatkan pembangunan struktur nano dengan mengumpulkan atom dan molekul individu menggunakan reaksi kimia. Proses ini dimulai dari skala atom, membentuk klaster atom, dan akhirnya menjadi nanopartikel atau struktur nano lainnya.'
  }
]
export default function Pembahasan_1_4() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pembahasan:</Text>
      <View style={styles.text_container}>
        {data.map((item) => (
          <Text style={styles.text_description} key={item.id}>{item.desc}</Text>
        ))}
      </View>
      <ButtonNext url='kuis_1_soal_5' />
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
  button_next: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  button_text: {
    color: '#FFFFFF',
    fontSize: 16,
  }
});