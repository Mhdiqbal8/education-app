import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MindMapQuiz3() {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <Text style={styles.Text}>Mind Map Quiz 3</Text>
      <Button
        title="Mulai Kuis 1"
        onPress={() => navigation.navigate("Page3_2")}
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
