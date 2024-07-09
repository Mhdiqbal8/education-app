import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native'

export default function CustomModal({ visible, onClose, onYes, title }) {
    return (
        <Modal
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalText}>{title}</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={onYes} style={styles.button}>
                            <Text style={styles.buttonText}>Iyah</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onClose} style={styles.button}>
                            <Text style={styles.buttonText}>Tidak</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: 300,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      alignItems: 'center',
    },
    modalText: {
      fontSize: 18,
      marginBottom: 20,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      marginHorizontal: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: '#2196F3',
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    }
  });