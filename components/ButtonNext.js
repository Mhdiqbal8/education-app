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
        bottom: 20,
        right: 20,
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    button_text: {
        color: '#FFFFFF',
        fontSize: 16,
    }
});