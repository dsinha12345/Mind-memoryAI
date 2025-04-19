// app/auth.tsx
import React, { useState } from 'react';
import {StyleSheet,View,Image,TextInput,TouchableOpacity,KeyboardAvoidingView,Platform,ScrollView,ActivityIndicator } from 'react-native';
import CustomAlertModal from '@/components/ui/CustomAlertModal';
import { VerificationCodeModal } from '@/components/ui/verificationModal'; // Import the verification modal
// Import specific auth functions directly from 'aws-amplify/auth'
import { signIn, signUp, confirmSignUp } from 'aws-amplify/auth'; // <--- CORRECTED IMPORT

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useRouter } from 'expo-router';

export default function AuthScreen() {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false); // <-- Add loading state back
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [modalButtons, setModalButtons] = useState<{ text: string; onPress?: () => void }[]>([]);

  const [isVerificationModalVisible, setIsVerificationModalVisible] = useState(false);
  const showModal = (
    title: string,
    message: string,
    buttons: { text: string; onPress?: () => void }[] = [{ text: 'OK', onPress: () => setModalVisible(false) }]
  ) => {
    setModalTitle(title);
    setModalMessage(message);
    setModalButtons(buttons);
    setModalVisible(true);
  };

  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  const tintColor = useThemeColor({}, 'tint');
  const inputBackgroundColor = useThemeColor({}, 'background'); // Consider a slightly different color for inputs for contrast
  const placeholderColor = useThemeColor({}, 'tabIconDefault');

  const handleSubmit = async () => {
    if (!email || !password || (!isLogin && (!confirmPassword || !name))) {
      showModal('Error', 'Please fill in all required fields');
      return;
    }
  
    if (!isLogin && password !== confirmPassword) {
      showModal('Error', 'Passwords do not match');
      return;
    }
  
    setIsLoading(true);
  
    try {
      if (isLogin) {
        const { isSignedIn, nextStep } = await signIn({ username: email, password });
  
        if (isSignedIn) {
          showModal('Success', 'Logged in!', [{
            text: 'OK',
            onPress: () => {
              setModalVisible(false);
              router.replace('/(tabs)');
            },
          }]);
        } else {
          showModal('Login Pending', `Next step: ${nextStep.signInStep}`);
        }
  
      } else {
        const { isSignUpComplete, nextStep } = await signUp({
          username: email,
          password,
          options: {
            userAttributes: { email, name },
          }
        });
  
        if (nextStep.signUpStep === 'CONFIRM_SIGN_UP') {
          // Instead of showing the alert modal, show the verification code modal
          setIsVerificationModalVisible(true);
          // Optionally, you could clear the password fields here for security
          // setPassword('');
          // setConfirmPassword('');
        } else if (isSignUpComplete) {
          // If sign up is complete without verification (e.g., auto-verify enabled in Cognito)
          showModal('Success', 'Account created! You can now log in.', [{
            text: 'OK',
            onPress: () => {
              setModalVisible(false);
              setIsLogin(true); // Switch to login view
              // Clear fields after successful registration
              setPassword('');
              setConfirmPassword('');
              setName('');
              // Keep email if you want them to log in immediately
            },
          }]);
        } else {
          // Handle other unexpected next steps if necessary
          showModal('Registration Pending', `Next step: ${nextStep.signUpStep}`);
        }
      }
    } catch (err: any) {
      let friendlyMessage = 'An unexpected error occurred.';
      if (err?.message) friendlyMessage = err.message;
  
      if (err.name === 'UserNotFoundException' || err.name === 'NotAuthorizedException') {
        friendlyMessage = 'Incorrect email or password.';
      } else if (err.name === 'UsernameExistsException') {
        friendlyMessage = 'An account with this email already exists.';
      } else if (err.name === 'InvalidPasswordException') {
        friendlyMessage = 'Password does not meet the requirements.';
      } else if (err.name === 'UserNotConfirmedException') {
        friendlyMessage = 'Account not confirmed. Please check your email.';
      }
  
      showModal('Authentication Error', friendlyMessage);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleVerifyCode = async (codeFromModal: string) => { // Renamed param for clarity
    // Use the code passed from the modal
    if (!codeFromModal) {
      showModal('Error', 'Please enter the verification code');
      return;
    }
  
    // You might want to clear the code state in the verification modal itself
    // or pass setVerificationCode to it if you were storing it in AuthScreen state.
    // For now, we assume the modal passes the entered code directly.
  
    setIsLoading(true);
  
    try {
      await confirmSignUp({ username: email, confirmationCode: codeFromModal }); // Use codeFromModal
  
      // ---- MODIFICATION START ----
      setIsVerificationModalVisible(false); // Hide the verification modal first
      // THEN show the success alert
      showModal('Success', 'Account confirmed! You can now log in.', [{
        text: 'OK',
        onPress: () => {
          setModalVisible(false); // Hide the alert modal
          setIsLogin(true); // Switch to login view
          // Clear fields related to verification/registration if needed
          // setVerificationCode(''); // If you had this state
          setPassword('');
          setConfirmPassword('');
          setName('');
          // Keep email populated for login convenience
        },
      }]);
      // ---- MODIFICATION END ----
  
    } catch (err: any) {
      // ---- IMPROVEMENT: Also hide verification modal on error ----
      // It might be better to keep the verification modal open on error
      // so the user can retry, but hide the loader first.
      // Let's keep it simple: show alert, modal stays open until explicitly closed.
      // setIsVerificationModalVisible(false); // Optional: Hide on error too?
  
      let friendlyMessage = 'An error occurred during verification.';
      if (err?.code === 'CodeMismatchException') {
          friendlyMessage = 'Invalid verification code. Please try again.';
      } else if (err?.code === 'ExpiredCodeException') {
          friendlyMessage = 'Verification code has expired. Please request a new one.';
          // Add logic here to allow resending the code if needed
      } else if (err?.message) {
          friendlyMessage = err.message;
      }
      // Show the error in the CustomAlertModal, leaving VerificationModal open potentially
      showModal('Verification Error', friendlyMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Toggle function remains the same
  const toggleAuthMode = () => {
    if (isLoading) return; // Prevent switching modes while loading
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setName('');
  };

  // Back function remains the same
  const handleBack = () => {
    if (!isLoading && router.canGoBack()) { // Prevent navigation while loading
        router.back();
    }
  };

 // --- Return JSX (with loading state handling) ---
 return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container, { backgroundColor: backgroundColor }]}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled" // Good practice for forms in ScrollView
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleBack}
            disabled={isLoading}
          >
            {/* Consider using an icon library for the back arrow */}
            <ThemedText style={{ color: tintColor, opacity: isLoading ? 0.5 : 1 }}>← Back</ThemedText>
          </TouchableOpacity>
        </View>

        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/mind_memory_ai.jpeg')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <ThemedView style={[styles.titleContainer, { backgroundColor: 'transparent' }]}>
          <ThemedText type="title">Mind-MemoryAI</ThemedText>
          <ThemedText type="subtitle">{isLogin ? 'Login' : 'Create Account'}</ThemedText>
        </ThemedView>

        <ThemedView style={[styles.formContainer, { backgroundColor: 'transparent' }]}>
          {!isLogin && (
            <View style={styles.inputContainer}>
              <ThemedText style={[styles.inputLabel, { color: textColor }]}>Full Name</ThemedText>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: inputBackgroundColor,
                    color: textColor,
                    borderColor: placeholderColor, // Use theme color for border
                    borderWidth: 1, // Add border for visibility
                    opacity: isLoading ? 0.5 : 1,
                  }
                ]}
                placeholder="Enter your full name"
                placeholderTextColor={placeholderColor}
                value={name}
                onChangeText={setName}
                editable={!isLoading} // Disable when loading
              />
            </View>
          )}

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <ThemedText style={[styles.inputLabel, { color: textColor }]}>Email</ThemedText>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: inputBackgroundColor,
                  color: textColor,
                  borderColor: placeholderColor,
                  borderWidth: 1,
                  opacity: isLoading ? 0.5 : 1,
                }
              ]}
              placeholder="Enter your email"
              placeholderTextColor={placeholderColor}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email" // Add auto-completion hint
              editable={!isLoading}
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <ThemedText style={[styles.inputLabel, { color: textColor }]}>Password</ThemedText>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: inputBackgroundColor,
                  color: textColor,
                  borderColor: placeholderColor,
                  borderWidth: 1,
                  opacity: isLoading ? 0.5 : 1,
                }
              ]}
              placeholder="Enter your password"
              placeholderTextColor={placeholderColor}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoComplete="password" // Add auto-completion hint
              editable={!isLoading}
            />
          </View>

          {/* Confirm Password Input */}
          {!isLogin && (
            <View style={styles.inputContainer}>
              <ThemedText style={[styles.inputLabel, { color: textColor }]}>Confirm Password</ThemedText>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: inputBackgroundColor,
                    color: textColor,
                    borderColor: placeholderColor,
                    borderWidth: 1,
                    opacity: isLoading ? 0.5 : 1,
                  }
                ]}
                placeholder="Confirm your password"
                placeholderTextColor={placeholderColor}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                editable={!isLoading}
              />
            </View>
          )}

          {/* Forgot Password Link */}
          {isLogin && (
            <TouchableOpacity style={styles.forgotPassword} disabled={isLoading}>
              <ThemedText style={[styles.forgotPasswordText, { color: tintColor, opacity: isLoading ? 0.5 : 1 }]}>
                Forgot Password?
              </ThemedText>
            </TouchableOpacity>
          )}

          {/* Submit Button */}
          <TouchableOpacity
            style={[
                styles.submitButton,
                { backgroundColor: isLoading ? '#A9A9A9' : '#2E86C1' } // Use a disabled color
            ]}
            onPress={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="#FFFFFF" />
            ) : (
              <ThemedText style={styles.submitButtonText}>
                {isLogin ? 'Login' : 'Register'}
              </ThemedText>
            )}
          </TouchableOpacity>
        </ThemedView>

        {/* Toggle Auth Mode Link */}
        <View style={styles.toggleContainer}>
          <ThemedText style={{ color: textColor }}>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
          </ThemedText>
          <TouchableOpacity onPress={toggleAuthMode} disabled={isLoading}>
            <ThemedText style={[styles.toggleText, { color: '#2E86C1', opacity: isLoading ? 0.5 : 1 }]}>
              {isLogin ? 'Register' : 'Login'}
            </ThemedText>
          </TouchableOpacity>
        </View>
        <CustomAlertModal
          visible={modalVisible}
          title={modalTitle}
          message={modalMessage}
          buttons={modalButtons}
          onClose={() => setModalVisible(false)}
        />
        <VerificationCodeModal
          visible={isVerificationModalVisible}
          onClose={() => {
              setIsVerificationModalVisible(false);
              // Optional: Decide if closing should switch to login
              setIsLogin(true);
          }}
          onSubmit={handleVerifyCode} // Pass the handler
          isLoading={isLoading}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// --- Styles (Minor adjustments for consistency) ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center', // Helps center content vertically
    paddingBottom: 30,
    paddingHorizontal: 24, // Add horizontal padding to scroll container
  },
  header: {
    position: 'absolute', // Keep header absolutely positioned
    top: Platform.OS === 'ios' ? 50 : 20,
    left: 15,
    zIndex: 1,
    paddingBottom: 10, // Removed alignItems and paddingHorizontal from here
  },
  backButton: {
    padding: 8,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70, // Adjust top margin if needed due to absolute header
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: 'transparent',
  },
  formContainer: {
     // Removed paddingHorizontal (moved to scrollContainer)
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: '500', // Slightly bolder label
  },
  input: {
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    borderWidth: 1, // Ensure border is always visible
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    paddingVertical: 5, // Make it easier to tap
  },
  forgotPasswordText: {
    fontSize: 14,
  },
  submitButton: {
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 24, // Add padding if needed
  },
  toggleText: {
    fontWeight: 'bold',
    marginLeft: 4,
  },
});