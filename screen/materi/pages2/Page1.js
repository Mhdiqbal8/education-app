import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Quiz1() {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <Text style={styles.Text}>Gambar Konfigurasi Elektron</Text>
      <Button
        title="click image"
        onPress={() => navigation.navigate("Materi/Pages2/Page2")}
      >
        /
      </Button>
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
});
