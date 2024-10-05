import { Pressable, StyleSheet, Text } from "react-native";

export default function ButtonOption({ onPress }) {
  return (
    <Pressable style={styles.button_next} onPress={onPress}>
      <Text style={styles.button_text}>Select</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button_next: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 5,
    paddingHorizontal: 17,
    borderRadius: 15,
  },
  button_text: {
    fontSize: 12,
  },
});
