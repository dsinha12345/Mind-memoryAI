//components/ui/verificationModal.tsx

import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

interface VerificationModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (code: string) => void;
  isLoading: boolean;
}

export const VerificationCodeModal = ({
  visible,
  onClose,
  onSubmit,
  isLoading,
}: VerificationModalProps) => {
  const [code, setCode] = useState('');

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Verification Code</Text>
          <Text style={styles.message}>
            Please enter the verification code sent to your email.
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter verification code"
            value={code}
            onChangeText={setCode}
            keyboardType="numeric"
            editable={!isLoading}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: isLoading ? '#A9A9A9' : '#2E86C1' }]}
              onPress={() => onSubmit(code)}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="#FFFFFF" />
              ) : (
                <Text style={styles.buttonText}>Submit</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#D9534F' }]}
              onPress={onClose}
              disabled={isLoading}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
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
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
