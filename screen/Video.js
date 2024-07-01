import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Video() {
    return (
        <View style={styles.Container}>
            <Text style={styles.Text}>Video</Text>
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