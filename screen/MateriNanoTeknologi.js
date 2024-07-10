import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function MateriNanoTeknologi() {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <Text style={styles.Text}>Materi Nano Teknologi</Text>
      <View style={styles.ButtonContainer}>
        <Button
          title="Select 1 Struktur Atom"
          onPress={() => navigation.navigate("Materi/Pages1/Page1")}
        ></Button>
        <Button
          title="Select 2 Konfigurasi elektron"
          onPress={() => navigation.navigate("Materi/Pages2/Page1")}
        ></Button>
        <Button
          title="Select 3 Bagian Teble periodik "
          onPress={() => navigation.navigate("Materi/Pages3/Page1")}
        ></Button>
        <Button title="Select 4 Nanometrial"></Button>
        <Button title="Select 5 Fenomena Alam"></Button>
        <Button title="Select 6 Penerapan"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 25,
    padding: 20,
  },
  Text: {
    fontSize: 40,
    textAlign: "center",
  },
  ButtonContainer: {
    display: "flex",
    gap: 10,
  },
});
