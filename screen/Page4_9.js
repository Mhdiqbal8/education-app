import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Answer4() {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <Text style={styles.Text}>Pembahasan soal 4</Text>
      <Button
        title="Soal Selanjutnya"
        onPress={() => navigation.navigate("Page4_10")}
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
