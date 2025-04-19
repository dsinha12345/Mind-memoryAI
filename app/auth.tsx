// app/auth.tsx
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  ActivityIndicator // Re-added for loading state (recommended)
} from 'react-native';

// Import specific auth functions directly from 'aws-amplify/auth'
import { signIn, signUp } from 'aws-amplify/auth'; // <--- CORRECTED IMPORT

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

  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  const tintColor = useThemeColor({}, 'tint');
  const inputBackgroundColor = useThemeColor({}, 'background'); // Consider a slightly different color for inputs for contrast
  const placeholderColor = useThemeColor({}, 'tabIconDefault');

  const handleSubmit = async () => {
    console.log('handleSubmit called. isLogin:', isLogin); // <-- DEBUG LOG

    // Basic validation (ensure this isn't failing silently)
    if (!email || !password || (!isLogin && (!confirmPassword || !name))) {
      console.log('Validation failed: Missing fields'); // <-- DEBUG LOG
      Alert.alert('Error', 'Please fill in all required fields'); // Should show if validation fails here
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      console.log('Validation failed: Passwords do not match'); // <-- DEBUG LOG
      Alert.alert('Error', 'Passwords do not match'); // Should show here
      return;
    }

    setIsLoading(true);

    try {
      if (isLogin) {
        console.log('Attempting sign in...'); // <-- DEBUG LOG
        const { isSignedIn, nextStep } = await signIn({ username: email, password });
        console.log('Sign in result:', { isSignedIn, nextStep }); // <-- DEBUG LOG

        if (isSignedIn) {
          console.log('Attempting to show login success alert...'); // <-- DEBUG LOG

          // ** FIX: Use Alert Callback for Navigation **
          Alert.alert(
            'Success', // Title
            'Logged in!', // Message
            [ // Buttons
              {
                text: 'OK',
                onPress: () => {
                  console.log('Alert dismissed, navigating to /tabs'); // <-- DEBUG LOG
                  router.replace('/(tabs)');
                }
              }
            ],
            { cancelable: false } // Prevent dismissing by tapping outside
          );

        } else {
           // Handle other sign-in steps if necessary (MFA, etc.)
           console.log('Sign in requires next step:', nextStep.signInStep); // <-- DEBUG LOG
           // You might want an alert here too
           Alert.alert('Login Pending', `Next step: ${nextStep.signInStep}`);
        }

      } else { // Handle Sign Up
        console.log('Attempting sign up...'); // <-- DEBUG LOG
        // *** REMEMBER TO CHECK 'name' ATTRIBUTE CONFIGURATION ***
        const { isSignUpComplete, userId, nextStep } = await signUp({
          username: email,
          password,
          options: {
            userAttributes: {
              email,
              name, // Ensure this is configured in Cognito or remove/change to custom:name
            },
          }
        });
        console.log('Sign up result:', { isSignUpComplete, userId, nextStep }); // <-- DEBUG LOG

         if (nextStep.signUpStep === 'CONFIRM_SIGN_UP') {
             console.log('Attempting to show sign up confirmation alert...'); // <-- DEBUG LOG
             Alert.alert(
                'Success',
                'Account created! Please check your email for a verification code.',
                [ { text: 'OK', onPress: () => setIsLogin(true) } ] // Switch to login after dismiss
             );
         } else if (isSignUpComplete) {
             // This case might happen if email verification is off or autoSignIn is true
             console.log('Attempting to show sign up complete alert (no confirmation needed)...'); // <-- DEBUG LOG
             Alert.alert(
                 'Success',
                 'Account created!',
                 [ { text: 'OK', onPress: () => setIsLogin(true) } ] // Switch to login after dismiss
              );
         } else {
             // Handle other potential sign up steps
             console.log('Sign up requires next step:', nextStep.signUpStep); // <-- DEBUG LOG
             Alert.alert('Registration Pending', `Next step: ${nextStep.signUpStep}`);
         }
      }
    } catch (err: any) {
      console.error('Auth error caught!'); // <-- DEBUG LOG
      // ** DEBUG: Log the full error object **
      console.error('Full error object:', JSON.stringify(err, null, 2));

      // Extract message safely
      let friendlyMessage = 'An unexpected error occurred.';
      if (err && err.message) {
          friendlyMessage = err.message;
      }
      // Use specific error names (check console output for correct names)
       if (err.name === 'UserNotFoundException' || err.name === 'NotAuthorizedException') {
          friendlyMessage = 'Incorrect email or password.';
      } else if (err.name === 'UsernameExistsException') {
          friendlyMessage = 'An account with this email already exists.';
      } else if (err.name === 'InvalidPasswordException') {
          friendlyMessage = 'Password does not meet the requirements.';
      } else if (err.name === 'UserNotConfirmedException') {
          friendlyMessage = 'Account not confirmed. Please check your email.';
          // Optionally add button to navigate to confirm screen
           // Alert.alert('Error', friendlyMessage, [{ text: 'OK' }, { text: 'Confirm Account', onPress: () => router.push(...) }])
      }
      // Add more specific checks based on console error output if needed

      console.log('Attempting to show error alert with message:', friendlyMessage); // <-- DEBUG LOG
      Alert.alert('Authentication Error', friendlyMessage); // This should now show

    } finally {
      console.log('Finally block reached, setting isLoading false.'); // <-- DEBUG LOG
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