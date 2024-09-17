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

import NavKuis1 from "./navigation/NavKuis1";
import NavKuis3 from "./navigation/NavKuis3";
import NavKuis4 from "./navigation/NavKuis4";
import NavKuis2 from "./navigation/NavKuis2";

// Materinanoteknologi

// select 1
import Materi1 from "./screen/materi/pages1/Page1";
// select 2
import MateriKonfigurasiElektron from "./screen/materi/pages2/Page1";
import MateriKonfigurasiElektron1 from "./screen/materi/pages2/Page2";
import MateriKonfigurasiElektron2 from "./screen/materi/pages2/Page3";

// select 3
import MateriTabelPeriodik from "./screen/materi/pages3/Page1";
import MateriTabelPeriodik2 from "./screen/materi/pages3/Page2";
import MateriTabelPeriodik3 from "./screen/materi/pages3/Page3";
import MateriTabelPeriodik4 from "./screen/materi/pages3/Page4";
import MateriTabelPeriodik5 from "./screen/materi/pages3/Page5";
import MateriTabelPeriodik6 from "./screen/materi/pages3/Page6";

// select 4
import MateriNanoMaterial1 from "./screen/materi/pages4/Page1";
import MateriNanoMaterial2 from "./screen/materi/pages4/Page2";

// select 5
import MateriFenomenaAlam from "./screen/materi/pages5/Page1";

// select 6
import MateriPenerapan from "./screen/materi/pages6/Page1";

// select 7 nanotenologi materi
import MateriNanoTeknologi1 from "./screen/materi/pages7/Page1";
import MateriNanoTeknologi2 from "./screen/materi/pages7/Page2";

// Penerapan Aplikasi
import PenerapanAplikasi from "./screen/materi/pages8/Page1";
// Bidang kesehatan
import BidangKesehatan1 from "./screen/materi/pages8/Page2";
import BidangKesehatan2 from "./screen/materi/pages8/Page3";
import BidangKesehatan3 from "./screen/materi/pages8/Page4";
// Bidang kesehatan kulit
import BidangKulit1 from "./screen/materi/pages8/PageSelect2_1";
import BidangKulit2 from "./screen/materi/pages8/PageSelect2_2";
import BidangKulit3 from "./screen/materi/pages8/PageSelect2_3";
import BidangKulit4 from "./screen/materi/pages8/PageSelect2_4";
import BidangKulit5 from "./screen/materi/pages8/PageSelect2_5";
import BidangKulit6 from "./screen/materi/pages8/PageSelect2_6";
import BidangKulit7 from "./screen/materi/pages8/PageSelect2_7";
// Bidang Pengiriman obat
import BidangObat1 from "./screen/materi/pages8/PageSelect3_1";
import BidangObat2 from "./screen/materi/pages8/PageSelect3";
// Bidang Material
import BidangMaterial from "./screen/materi/pages8/BidangMaterial";
import PageMaterial1 from "./screen/materi/pages8/PageMaterial1";
import PageMaterial2 from "./screen/materi/pages8/PageMaterial2";
import PageMaterial3 from "./screen/materi/pages8/PageMaterial3";
// bidang pangan
import BidangPangan from "./screen/materi/pages8/BidangPangan";
import BidangPangan1 from "./screen/materi/pages8/PanganSelect1_1";
import BidangPangan2 from "./screen/materi/pages8/PanganSelect1_2";
import BidangPangan3 from "./screen/materi/pages8/PanganSelect2_1";
import BidangPangan4 from "./screen/materi/pages8/PanganSelect2_2";
import BidangPangan5 from "./screen/materi/pages8/PanganSelect3";

// bidang tekstil
import BidangTekstil from "./screen/materi/pages8/BidangTekstil";
import PageTekstil1 from "./screen/materi/pages8/TekstilSelect1_1";
import PageTekstil2 from "./screen/materi/pages8/TekstilSelect1_2";
import PageTekstil3 from "./screen/materi/pages8/TekstilSelect1_3";
// select2
import PageTekstil2_1 from "./screen/materi/pages8/TekstilSelect2_1";
import PageTekstil2_2 from "./screen/materi/pages8/TekstilSelect2_2";
import PageTekstil3_1 from "./screen/materi/pages8/TekstilSelect3";

// bidanag keamanan
import BidangKeamanan from "./screen/materi/pages8/BidangKeamanan";
import PageKeamanan1_1 from "./screen/materi/pages8/PageKeamanan1_1";
import PageKeamanan1_2 from "./screen/materi/pages8/PageKeamanan1_2";
import PageKeamanan2_1 from "./screen/materi/pages8/PageKeamanan2_1";
import PageKeamanan2_2 from "./screen/materi/pages8/PageKeamanan2_2";
import PageKeamanan2_3 from "./screen/materi/pages8/PageKeamanan2_3";
import PageKeamanan2_4 from "./screen/materi/pages8/PageKeamanan2_4";
import PageKeamanan2_5 from "./screen/materi/pages8/PageKeamanan2_5";
import PageKeamanan2_6 from "./screen/materi/pages8/PageKeamanan2_6";
import PageKeamanan3_1 from "./screen/materi/pages8/PageKeamanan3_1";
import PageKeamanan3_2 from "./screen/materi/pages8/PageKeamanan3_2";
import PageKeamanan3_3 from "./screen/materi/pages8/PageKeamanan3_3";

// bidnag agrikultur
import BidangAgrikultur from "./screen/materi/pages8/BidangAgrikultur";
import PageAgrikultur1_1 from "./screen/materi/pages8/PageAgrikultur1_1";
import PageAgrikultur1_2 from "./screen/materi/pages8/PageAgrikultur1_2";
import PageAgrikultur2_1 from "./screen/materi/pages8/PageAgrikultur2_1";
import PageAgrikultur2_2 from "./screen/materi/pages8/PageAgrikultur2_2";
import PageAgrikultur3_1 from "./screen/materi/pages8/PageAgrikultur3_1";
import PageAgrikultur3_2 from "./screen/materi/pages8/PageAgrikultur3_2";
import { StatusBar } from "expo-status-bar";
import DaftarPustaka from "./screen/DaftarPustaka";
import { AudioProvider } from "./context/audio";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AudioProvider>
      <NavigationContainer>
        <StatusBar hidden={true} />
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
          <Stack.Screen name="DaftarPustaka" component={DaftarPustaka} />
          <Stack.Screen
            name="CapaiDanTujuanPembelajaran"
            component={CapaiDanTujuanPembelajaran}
          />
          <Stack.Screen name="NavKuis1" component={NavKuis1} />
          <Stack.Screen name="NavKuis2" component={NavKuis2} />
          <Stack.Screen name="NavKuis3" component={NavKuis3} />
          <Stack.Screen name="NavKuis4" component={NavKuis4} />

          {/* Materi nanoteknologi */}
          <Stack.Screen name="Materi/Pages1/Page1" component={Materi1} />
          {/* Select 2  */}
          <Stack.Screen
            name="Materi/Pages2/Page1"
            component={MateriKonfigurasiElektron}
          />
          <Stack.Screen
            name="Materi/Pages2/Page2"
            component={MateriKonfigurasiElektron1}
          />
          <Stack.Screen
            name="Materi/Pages2/Page3"
            component={MateriKonfigurasiElektron2}
          />
          {/* Select 3 */}
          <Stack.Screen
            name="Materi/Pages3/Page1"
            component={MateriTabelPeriodik}
          />
          {/* click select 1  */}
          <Stack.Screen
            name="Materi/Pages3/Page2"
            component={MateriTabelPeriodik2}
          />
          <Stack.Screen
            name="Materi/Pages3/Page3"
            component={MateriTabelPeriodik3}
          />
          {/* Bagian Select 1 */}
          <Stack.Screen
            name="Materi/Pages3/Page4"
            component={MateriTabelPeriodik4}
          />
          <Stack.Screen
            name="Materi/Pages3/Page5"
            component={MateriTabelPeriodik5}
          />
          <Stack.Screen
            name="Materi/Pages3/Page6"
            component={MateriTabelPeriodik6}
          />
          {/* click select 2 */}
          {/* Masih sama kayak select 1 */}
          {/* <Stack.Screen
          name="Materi/Pages3/Page6"
          component={MateriTabelPeriodik6}
        /> */}
          {/* Select 4 */}
          <Stack.Screen
            name="Materi/Pages4/Page1"
            component={MateriNanoMaterial1}
          />
          <Stack.Screen
            name="Materi/Pages4/Page2"
            component={MateriNanoMaterial2}
          />
          {/* Select 5 */}
          <Stack.Screen
            name="Materi/Pages5/Page1"
            component={MateriFenomenaAlam}
          />
          {/* Select 6 */}
          <Stack.Screen name="Materi/Pages6/Page1" component={MateriPenerapan} />
          {/* Matri nanoteknologi */}
          <Stack.Screen
            name="Materi/Pages7/Page1"
            component={MateriNanoTeknologi1}
          />
          <Stack.Screen
            name="Materi/Pages7/Page2"
            component={MateriNanoTeknologi2}
          />
          {/* penerapan aplikasi */}
          <Stack.Screen
            name="Materi/Pages8/Page1"
            component={PenerapanAplikasi}
          />
          {/* Bidang Kesehatan */}
          <Stack.Screen name="Materi/Pages8/Page2" component={BidangKesehatan1} />
          <Stack.Screen name="Materi/Pages8/Page3" component={BidangKesehatan2} />
          <Stack.Screen name="Materi/Pages8/Page4" component={BidangKesehatan3} />
          {/* Bidang Kesehatan */}
          {/* Bidang Kesehatan Kulit */}
          <Stack.Screen
            name="Materi/Pages8/PageSelect2_1"
            component={BidangKulit1}
          />
          <Stack.Screen
            name="Materi/Pages8/PageSelect2_2"
            component={BidangKulit2}
          />
          <Stack.Screen
            name="Materi/Pages8/PageSelect2_3"
            component={BidangKulit3}
          />
          <Stack.Screen
            name="Materi/Pages8/PageSelect2_4"
            component={BidangKulit4}
          />
          <Stack.Screen
            name="Materi/Pages8/PageSelect2_5"
            component={BidangKulit5}
          />
          <Stack.Screen
            name="Materi/Pages8/PageSelect2_6"
            component={BidangKulit6}
          />
          <Stack.Screen
            name="Materi/Pages8/PageSelect2_7"
            component={BidangKulit7}
          />
          {/* Bidang Kesehatan Kulit */}
          {/* bidang Obat */}
          <Stack.Screen
            name="Materi/Pages8/PageSelect3_1"
            component={BidangObat1}
          />
          <Stack.Screen
            name="Materi/Pages8/PageSelect3_2"
            component={BidangObat2}
          />
          {/* bidang Obat */}
          {/* bidang Material*/}
          <Stack.Screen
            name="Materi/Pages8/BidangMaterial"
            component={BidangMaterial}
          />
          <Stack.Screen
            name="Materi/Pages8/PageMaterial1"
            component={PageMaterial1}
          />
          <Stack.Screen
            name="Materi/Pages8/PageMaterial2"
            component={PageMaterial2}
          />
          <Stack.Screen
            name="Materi/Pages8/PageMaterial3"
            component={PageMaterial3}
          />
          {/* bidang pangan */}
          <Stack.Screen
            name="Materi/Pages8/BidangPangan"
            component={BidangPangan}
          />
          <Stack.Screen
            name="Materi/Pages8/PanganSelect1_1"
            component={BidangPangan1}
          />
          <Stack.Screen
            name="Materi/Pages8/PanganSelect1_2"
            component={BidangPangan2}
          />
          <Stack.Screen
            name="Materi/Pages8/PanganSelect2_1"
            component={BidangPangan3}
          />
          <Stack.Screen
            name="Materi/Pages8/PanganSelect2_2"
            component={BidangPangan4}
          />
          <Stack.Screen
            name="Materi/Pages8/PanganSelect3"
            component={BidangPangan5}
          />
          {/* bidang tekstil */}
          <Stack.Screen
            name="Materi/Pages8/BidangTekstil"
            component={BidangTekstil}
          />
          <Stack.Screen
            name="Materi/Pages8/TekstilSelect1_1"
            component={PageTekstil1}
          />
          <Stack.Screen
            name="Materi/Pages8/TekstilSelect1_2"
            component={PageTekstil2}
          />
          <Stack.Screen
            name="Materi/Pages8/TekstilSelect1_3"
            component={PageTekstil3}
          />
          <Stack.Screen
            name="Materi/Pages8/TekstilSelect2_1"
            component={PageTekstil2_1}
          />
          <Stack.Screen
            name="Materi/Pages8/TekstilSelect2_2"
            component={PageTekstil2_2}
          />
          <Stack.Screen
            name="Materi/Pages8/TekstilSelect3"
            component={PageTekstil3_1}
          />
          {/* // bidang keamanan */}
          <Stack.Screen
            name="Materi/Pages8/BidangKeamanan"
            component={BidangKeamanan}
          />
          <Stack.Screen
            name="Materi/Pages8/PageKeamanan1_1"
            component={PageKeamanan1_1}
          />
          <Stack.Screen
            name="Materi/Pages8/PageKeamanan1_2"
            component={PageKeamanan1_2}
          />
          <Stack.Screen
            name="Materi/Pages8/PageKeamanan2_1"
            component={PageKeamanan2_1}
          />
          <Stack.Screen
            name="Materi/Pages8/PageKeamanan2_2"
            component={PageKeamanan2_2}
          />
          <Stack.Screen
            name="Materi/Pages8/PageKeamanan2_3"
            component={PageKeamanan2_3}
          />
          <Stack.Screen
            name="Materi/Pages8/PageKeamanan2_4"
            component={PageKeamanan2_4}
          />
          <Stack.Screen
            name="Materi/Pages8/PageKeamanan2_5"
            component={PageKeamanan2_5}
          />
          <Stack.Screen
            name="Materi/Pages8/PageKeamanan2_6"
            component={PageKeamanan2_6}
          />
          <Stack.Screen
            name="Materi/Pages8/PageKeamanan3_1"
            component={PageKeamanan3_1}
          />
          <Stack.Screen
            name="Materi/Pages8/PageKeamanan3_2"
            component={PageKeamanan3_2}
          />
          <Stack.Screen
            name="Materi/Pages8/PageKeamanan3_3"
            component={PageKeamanan3_3}
          />
          {/* Bidang agrikultur */}
          <Stack.Screen
            name="Materi/Pages8/BidangAgrikultur"
            component={BidangAgrikultur}
          />
          <Stack.Screen
            name="Materi/Pages8/PageAgrikultur1_1"
            component={PageAgrikultur1_1}
          />
          <Stack.Screen
            name="Materi/Pages8/PageAgrikultur1_2"
            component={PageAgrikultur1_2}
          />
          <Stack.Screen
            name="Materi/Pages8/PageAgrikultur2_1"
            component={PageAgrikultur2_1}
          />
          <Stack.Screen
            name="Materi/Pages8/PageAgrikultur2_2"
            component={PageAgrikultur2_2}
          />
          <Stack.Screen
            name="Materi/Pages8/PageAgrikultur3_1"
            component={PageAgrikultur3_1}
          />
          <Stack.Screen
            name="Materi/Pages8/PageAgrikultur3_2"
            component={PageAgrikultur3_2}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AudioProvider>
  );
}
