import React, { useRef, useState } from "react";
import { View, StyleSheet, Pressable, Animated, Modal, Text, TouchableOpacity, SafeAreaView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomModal from "../components/CustomModal";

export default function MindMapQuiz_4() {
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
    navigation.navigate("kuis_4_soal_1");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/quiz/kuis_4.png')}
        />
      </View>
      <Pressable style={styles.textContainer} onPress={handlePress}>
        <Text style={styles.text}>Mulai Kuis 4</Text>
      </Pressable>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  image: {
    width: "75%",
    height: "100%",
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
