import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function MateriNanoTeknologi() {
    return (
        <View style={styles.Container}>
            <Text style={styles.Text}>Materi Nano Teknologi</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        marginTop: 25,
        padding: 20,
    },
    Text: {
        fontSize: 40,
        textAlign: 'center'
    },
});