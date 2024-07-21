import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Page7() {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <Text style={styles.Text}>
        Gambar Chemistry tabel periodik unsur horizontal
      </Text>
      <Button
        title="Select 1"
        onPress={() => navigation.navigate("Materi/Pages3/Page4")}
      >
        /
      </Button>
      <Button
        title="Select 2"
        onPress={() => navigation.navigate("Materi/Pages3/Page7")}
      >
        /
      </Button>
      <Button
        title="Icon Next"
        onPress={() => navigation.navigate("Materi/Pages3/Page3")}
      >
        /
      </Button>
      <Button
        title="Icon Back"
        onPress={() => navigation.navigate("Materi/Pages3/Page1")}
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
