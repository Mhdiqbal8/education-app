import { kuis_1 } from '../screen/mind_map_quiz/kuis_1';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function NavKuis1() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="kuis_1_soal_1" component={kuis_1.Soal_1} />
      <Stack.Screen name="kuis_1_soal_2" component={kuis_1.Soal_2} />
      <Stack.Screen name="pembahasan_1_2" component={kuis_1.Pembahasan_1_2} />
      <Stack.Screen name="kuis_1_soal_3" component={kuis_1.Soal_3} />
      <Stack.Screen name="pembahasan_1_3" component={kuis_1.Pembahasan_1_3} />
      <Stack.Screen name="kuis_1_soal_4" component={kuis_1.Soal_4} />
      <Stack.Screen name="pembahasan_1_4" component={kuis_1.Pembahasan_1_4} />
      <Stack.Screen name="kuis_1_soal_5" component={kuis_1.Soal_5} />
    </Stack.Navigator>
  )
}