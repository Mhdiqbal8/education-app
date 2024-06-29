import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log("You tapped the button!");
        }}
      >
        <Text style={styles.text}>HELLO WORLDS</Text>
      </TouchableOpacity>
      <View style={styles.flex}>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
        <Text>4</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    display: "flex",
    gap: 10,
    flexDirection: "row",
  },
  text: {
    color: "blue",
    fontSize: 40,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
