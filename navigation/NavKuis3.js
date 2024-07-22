import { kuis_3 } from '../screen/mind_map_quiz/kuis_3';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function NavKuis3() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="kuis_3_soal_1" component={kuis_3.Soal_1} />
      <Stack.Screen name="kuis_3_soal_2" component={kuis_3.Soal_2} />
      <Stack.Screen name="kuis_3_soal_3" component={kuis_3.Soal_3} />
      <Stack.Screen name="kuis_3_soal_4" component={kuis_3.Soal_4} />
      <Stack.Screen name="pembahasan_3_1" component={kuis_3.Pembahasan_3_1} />
      <Stack.Screen name="pembahasan_3_2" component={kuis_3.Pembahasan_3_2} />
      <Stack.Screen name="pembahasan_3_3" component={kuis_3.Pembahasan_3_3} />
      <Stack.Screen name="pembahasan_3_4" component={kuis_3.Pembahasan_3_4} />
    </Stack.Navigator>
  )
}