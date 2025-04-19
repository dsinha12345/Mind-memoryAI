import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent
} from 'react-native';

interface ButtonType {
  text: string;
  onPress?: (event?: GestureResponderEvent) => void;
}

interface CustomAlertModalProps {
  visible: boolean;
  title: string;
  message: string;
  buttons?: ButtonType[];
  onClose: () => void;
}

export default function CustomAlertModal({
  visible,
  title,
  message,
  buttons = [],
  onClose
}: CustomAlertModalProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.alertBox}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.buttonRow}>
            {buttons.map((btn, idx) => (
              <TouchableOpacity
                key={idx}
                style={styles.button}
                onPress={(event) => {
                  btn.onPress?.(event);
                  onClose();
                }}
              >
                <Text style={styles.buttonText}>{btn.text}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertBox: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  button: {
    marginLeft: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    backgroundColor: '#2E86C1',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
