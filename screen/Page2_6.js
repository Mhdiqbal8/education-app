import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Quiz3() {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <Text style={styles.Text}>Soal 3</Text>
      <Text style={styles.Text}>
        Pilhan 5 jawaban beserta select, jika benar maka akan mengarah ke
        halaman pembahasan
      </Text>
      <Button title="seclect" onPress={() => navigation.navigate("Page2_7")}>
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
