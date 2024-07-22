import { Text, StyleSheet, SafeAreaView, ImageBackground, Pressable, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import image from '../assets/homeScreen/daftar_pustaka.png'
import { Ionicons } from '@expo/vector-icons';


export default function DaftarPustaka() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.Container}>
            <ImageBackground
                source={image}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <View style={styles.overlay}>
                    <Pressable style={styles.button} onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back-outline" size={50} color="black" />
                    </Pressable>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    overlay: {
        flex: 1,
        justifyContent: 'start',
        alignItems: 'center',
        paddingLeft: 10,
        flexDirection: 'row'
    },
    button: {
        alignItems: 'center',
    }
});