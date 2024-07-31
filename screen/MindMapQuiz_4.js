import React, { useRef, useState } from "react";
import { StyleSheet, Pressable, Animated, Text, SafeAreaView, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomModal from "../components/CustomModal";

export default function MindMapQuiz() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const scaleValue = useRef(new Animated.Value(1)).current;
  const handlePress = () => {
    Animated.spring(scaleValue, {
      toValue: 1.1,
      friction: 5,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(true);
    });
  };

  const handleClose = () => {
    setModalVisible(false);
    scaleValue.setValue(1);
  };

  const handleYes = () => {
    setModalVisible(false);
    navigation.navigate("NavKuis4");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/quiz/mindmap_4.png')} style={styles.imageContainer}>
        <Pressable style={styles.textContainer} onPress={handlePress}>
          <Text style={styles.text}>Mulai Kuis 4</Text>
        </Pressable>
      </ImageBackground>
      <CustomModal
        title="Mulai kuis sekarang?"
        visible={modalVisible}
        onClose={handleClose}
        onYes={handleYes}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingLeft: 30
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#D9D9D9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  text: {
    fontSize: 16,
  },
});
