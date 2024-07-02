import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.Container}>
            <Text style={styles.Text}>HomeScreen</Text>
            <View style={styles.Spaces}>
                <Button
                    onPress={() => {
                        navigation.navigate('MateriNanoTeknologi')
                    }}
                    title="Materi Nano Teknologi" />
                <Button
                    onPress={() => {
                        navigation.navigate('CapaiDanTujuanPembelajaran')
                    }}
                    title="Capai dan Tujuan Pembelajaran" />
                <Button
                    onPress={() => {
                        navigation.navigate('MindMapQuiz')
                    }}
                    title="Mind Map Quiz" />
                <Button
                    onPress={() => {
                        navigation.navigate('Profile')
                    }}
                    title="Profile" />
                <Button
                    onPress={() => {
                        navigation.navigate('Video')
                    }}
                    title="Video" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        marginTop: 25,
        padding: 20,
    },
    Text: {
        fontSize: 20
    },
    Spaces: {
        marginTop: 20,
        paddingBottom: 20,
        display: 'flex',
        gap: 10,
    }
});