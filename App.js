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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
