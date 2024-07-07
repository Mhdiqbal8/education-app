import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/HomeScreen";
import MateriNanoTeknologi from "./screen/MateriNanoTeknologi";
import CapaiDanTujuanPembelajaran from "./screen/CapaiDanTujuanPembelajaran";
import MindMapQuiz from "./screen/MindMapQuiz";
import Profile from "./screen/Profile";
import Video from "./screen/Video";

// quiz 1
import Page1 from "./screen/Page1";
import Page2 from "./screen/Page2";
import Page3 from "./screen/Page3";
import Page4 from "./screen/Page4";
import Page5 from "./screen/Page5";
import Page6 from "./screen/Page6";
import Page7 from "./screen/Page7";
import Page8 from "./screen/Page8";
import Page9 from "./screen/Page9";
import Page10 from "./screen/Page10";

// quiz 1
import Page2_1 from "./screen/Page2_1";
import Page2_2 from "./screen/Page2_2";
import Page2_3 from "./screen/Page2_3";
import Page2_4 from "./screen/Page2_4";
import Page2_5 from "./screen/Page2_5";
import Page2_6 from "./screen/Page2_6";
import Page2_7 from "./screen/Page2_7";
import Page2_8 from "./screen/Page2_8";
import Page2_9 from "./screen/Page2_9";
import Page2_10 from "./screen/Page2_10";
import Page2_11 from "./screen/Page2_11";
import Page2_12 from "./screen/Page2_12";
import Page2_13 from "./screen/Page2_13";

// quiz 3
import Page3_1 from "./screen/Page3_1";
import Page3_2 from "./screen/Page3_2";
import Page3_3 from "./screen/Page3_3";
import Page3_4 from "./screen/Page3_4";
import Page3_5 from "./screen/Page3_5";
import Page3_6 from "./screen/Page3_6";
import Page3_7 from "./screen/Page3_7";
import Page3_8 from "./screen/Page3_8";
import Page3_9 from "./screen/Page3_9";

// quiz 4
import Page4_1 from "./screen/Page4_1";
import Page4_2 from "./screen/Page4_2";
import Page4_3 from "./screen/Page4_3";
import Page4_4 from "./screen/Page4_4";
import Page4_5 from "./screen/Page4_5";
import Page4_6 from "./screen/Page4_6";
import Page4_7 from "./screen/Page4_7";
import Page4_8 from "./screen/Page4_8";
import Page4_9 from "./screen/Page4_9";
import Page4_10 from "./screen/Page4_10";
import Page4_11 from "./screen/Page4_11";
import Page4_12 from "./screen/Page4_12";
import Page4_13 from "./screen/Page4_13";

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
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Video" component={Video} />
        <Stack.Screen
          name="CapaiDanTujuanPembelajaran"
          component={CapaiDanTujuanPembelajaran}
        />

        {/* Quiz Mind Map 1 */}
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="Page3" component={Page3} />
        <Stack.Screen name="Page4" component={Page4} />
        <Stack.Screen name="Page5" component={Page5} />
        <Stack.Screen name="Page6" component={Page6} />
        <Stack.Screen name="Page7" component={Page7} />
        <Stack.Screen name="Page8" component={Page8} />
        <Stack.Screen name="Page9" component={Page9} />
        <Stack.Screen name="Page10" component={Page10} />

        {/* Quiz Mind Map 2 */}
        <Stack.Screen name="Page2_1" component={Page2_1} />
        <Stack.Screen name="Page2_2" component={Page2_2} />
        <Stack.Screen name="Page2_3" component={Page2_3} />
        <Stack.Screen name="Page2_4" component={Page2_4} />
        <Stack.Screen name="Page2_5" component={Page2_5} />
        <Stack.Screen name="Page2_6" component={Page2_6} />
        <Stack.Screen name="Page2_7" component={Page2_7} />
        <Stack.Screen name="Page2_8" component={Page2_8} />
        <Stack.Screen name="Page2_9" component={Page2_9} />
        <Stack.Screen name="Page2_10" component={Page2_10} />
        <Stack.Screen name="Page2_11" component={Page2_11} />
        <Stack.Screen name="Page2_12" component={Page2_12} />
        <Stack.Screen name="Page2_13" component={Page2_13} />

        {/* Quix Mind Map 3 */}
        <Stack.Screen name="Page3_1" component={Page3_1} />
        <Stack.Screen name="Page3_2" component={Page3_2} />
        <Stack.Screen name="Page3_3" component={Page3_3} />
        <Stack.Screen name="Page3_4" component={Page3_4} />
        <Stack.Screen name="Page3_5" component={Page3_5} />
        <Stack.Screen name="Page3_6" component={Page3_6} />
        <Stack.Screen name="Page3_7" component={Page3_7} />
        <Stack.Screen name="Page3_8" component={Page3_8} />
        <Stack.Screen name="Page3_9" component={Page3_9} />

        {/* Quiz Mind Map 4 */}
        <Stack.Screen name="Page4_1" component={Page4_1} />
        <Stack.Screen name="Page4_2" component={Page4_2} />
        <Stack.Screen name="Page4_3" component={Page4_3} />
        <Stack.Screen name="Page4_4" component={Page4_4} />
        <Stack.Screen name="Page4_5" component={Page4_5} />
        <Stack.Screen name="Page4_6" component={Page4_6} />
        <Stack.Screen name="Page4_7" component={Page4_7} />
        <Stack.Screen name="Page4_8" component={Page4_8} />
        <Stack.Screen name="Page4_9" component={Page4_9} />
        <Stack.Screen name="Page4_10" component={Page4_10} />
        <Stack.Screen name="Page4_11" component={Page4_11} />
        <Stack.Screen name="Page4_12" component={Page4_12} />
        <Stack.Screen name="Page4_13" component={Page4_13} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
