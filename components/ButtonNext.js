import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, Pressable } from 'react-native'

export default function ButtonNext({ url }) {
    const navigation = useNavigation()
    return (
        <Pressable style={styles.button_next} onPress={() => navigation.navigate(url)}>
            <Text style={styles.button_text}>Soal Selanjutnya</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button_next: {
        position: 'absolute',
        bottom: 10,
        right: 35,
        backgroundColor: '#D9D9D9',
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 15,
    },
    button_text: {
        color: '#000000',
        fontSize: 16,
    }
});