import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, Pressable } from "react-native";

export default function ButtonSelect({ url }) {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.button_next}
      onPress={() => navigation.navigate(url)}
    >
      <Text style={styles.button_text}>Select </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button_next: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 3,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  button_text: {
    fontSize: 12,
  },
});

// sama
