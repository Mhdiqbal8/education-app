import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Page2() {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <Text style={styles.Text}>Gambar Metode Bottom Up & top Down</Text>
      <Button
        title="Icon Home"
        onPress={() => navigation.navigate("MateriNanoTeknologi")}
      >
        /
      </Button>
      <Button
        title="Icon Back"
        onPress={() => navigation.navigate("Materi/Pages4/Page1")}
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
