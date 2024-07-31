import { kuis_4 } from '../screen/mind_map_quiz/kuis_4';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function NavKuis4() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="kuis_4_soal_1" component={kuis_4.Soal_1} />
      <Stack.Screen name="kuis_4_soal_2" component={kuis_4.Soal_2} />
      <Stack.Screen name="kuis_4_soal_3" component={kuis_4.Soal_3} />
      <Stack.Screen name="kuis_4_soal_4" component={kuis_4.Soal_4} />
      <Stack.Screen name="kuis_4_soal_5" component={kuis_4.Soal_5} />
      <Stack.Screen name="pembahasan_4_1" component={kuis_4.Pembahasan_4_1} />
      <Stack.Screen name="pembahasan_4_2" component={kuis_4.Pembahasan_4_2} />
      <Stack.Screen name="pembahasan_4_3" component={kuis_4.Pembahasan_4_3} />
      <Stack.Screen name="pembahasan_4_4" component={kuis_4.Pembahasan_4_4} />
      <Stack.Screen name="pembahasan_4_5" component={kuis_4.Pembahasan_4_5} />
    </Stack.Navigator>
  )
}