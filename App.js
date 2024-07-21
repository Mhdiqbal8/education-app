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
  );
}
