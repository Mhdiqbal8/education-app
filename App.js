import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import MateriNanoTeknologi from './screen/MateriNanoTeknologi';
import CapaiDanTujuanPembelajaran from './screen/CapaiDanTujuanPembelajaran';
import MindMapQuiz from './screen/MindMapQuiz';
import Profile from './screen/Profile';
import Video from './screen/Video';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          name="MateriNanoTeknologi"
          component={MateriNanoTeknologi}
        />
        <Stack.Screen
          name="MindMapQuiz"
          component={MindMapQuiz}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
        />
        <Stack.Screen
          name="Video"
          component={Video}
        />
        <Stack.Screen
          name="CapaiDanTujuanPembelajaran"
          component={CapaiDanTujuanPembelajaran}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
