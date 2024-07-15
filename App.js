import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Video from "./screen/Video";
import Profile from "./screen/Profile";
import HomeScreen from "./screen/HomeScreen";
import MateriNanoTeknologi from "./screen/MateriNanoTeknologi";
import CapaiDanTujuanPembelajaran from "./screen/CapaiDanTujuanPembelajaran";

import MindMapQuiz from "./screen/MindMapQuiz";
import MindMapQuiz_2 from "./screen/MindMapQuiz_2";
import MindMapQuiz_3 from "./screen/MindMapQuiz_3";
import MindMapQuiz_4 from "./screen/MindMapQuiz_4";

import { kuis_1 } from "./screen/mind_map_quiz/kuis_1"
import { kuis_2 } from "./screen/mind_map_quiz/kuis_2"
import { kuis_3 } from "./screen/mind_map_quiz/kuis_3"
import { kuis_4 } from "./screen/mind_map_quiz/kuis_4"


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="MateriNanoTeknologi"
          component={MateriNanoTeknologi}
        />
        <Stack.Screen name="MindMapQuiz" component={MindMapQuiz} />
        <Stack.Screen name="MindMapQuiz_2" component={MindMapQuiz_2} />
        <Stack.Screen name="MindMapQuiz_3" component={MindMapQuiz_3} />
        <Stack.Screen name="MindMapQuiz_4" component={MindMapQuiz_4} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Video" component={Video} />
        <Stack.Screen
          name="CapaiDanTujuanPembelajaran"
          component={CapaiDanTujuanPembelajaran}
        />

        {/* Quiz Mind Map Soal 1 */}
        <Stack.Screen name="kuis_1_soal_1" component={kuis_1.Soal_1} />
        <Stack.Screen name="kuis_1_soal_2" component={kuis_1.Soal_2} />
        <Stack.Screen name="pembahasan_1_2" component={kuis_1.Pembahasan_1_2} />
        <Stack.Screen name="kuis_1_soal_3" component={kuis_1.Soal_3} />
        <Stack.Screen name="pembahasan_1_3" component={kuis_1.Pembahasan_1_3} />
        <Stack.Screen name="kuis_1_soal_4" component={kuis_1.Soal_4} />
        <Stack.Screen name="pembahasan_1_4" component={kuis_1.Pembahasan_1_4} />
        <Stack.Screen name="kuis_1_soal_5" component={kuis_1.Soal_5} />

        {/* Quiz Mind Map 2 */}
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

        {/* Quix Mind Map 3 */}
        <Stack.Screen name="kuis_3_soal_1" component={kuis_3.Soal_1} />
        <Stack.Screen name="kuis_3_soal_2" component={kuis_3.Soal_2} />
        <Stack.Screen name="kuis_3_soal_3" component={kuis_3.Soal_3} />
        <Stack.Screen name="kuis_3_soal_4" component={kuis_3.Soal_4} />
        <Stack.Screen name="pembahasan_3_1" component={kuis_3.Pembahasan_3_1} />
        <Stack.Screen name="pembahasan_3_2" component={kuis_3.Pembahasan_3_2} />
        <Stack.Screen name="pembahasan_3_3" component={kuis_3.Pembahasan_3_3} />
        <Stack.Screen name="pembahasan_3_4" component={kuis_3.Pembahasan_3_4} />

        {/* Quiz Mind Map 4 */}
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
    </NavigationContainer>
  );
}
