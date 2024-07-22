import { kuis_2 } from '../screen/mind_map_quiz/kuis_2';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function NavKuis2() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="kuis_2_soal_1" component={kuis_2.Soal_1} />
      <Stack.Screen name="kuis_2_soal_2" component={kuis_2.Soal_2} />
      <Stack.Screen name="kuis_2_soal_3" component={kuis_2.Soal_3} />
      <Stack.Screen name="kuis_2_soal_4" component={kuis_2.Soal_4} />
      <Stack.Screen name="kuis_2_soal_5" component={kuis_2.Soal_5} />
      <Stack.Screen name="kuis_2_soal_6" component={kuis_2.Soal_6} />
      <Stack.Screen name="pembahasan_2_1" component={kuis_2.Pembahasan_2_1} />
      <Stack.Screen name="pembahasan_2_2" component={kuis_2.Pembahasan_2_2} />
      <Stack.Screen name="pembahasan_2_3" component={kuis_2.Pembahasan_2_3} />
      <Stack.Screen name="pembahasan_2_4" component={kuis_2.Pembahasan_2_4} />
      <Stack.Screen name="pembahasan_2_5" component={kuis_2.Pembahasan_2_5} />
      <Stack.Screen name="pembahasan_2_6" component={kuis_2.Pembahasan_2_6} />
    </Stack.Navigator>
  )
}