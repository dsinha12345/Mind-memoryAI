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
  Alert
} from 'react-native';

// Assuming these components exist based on your original code
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
  
  // Get theme colors
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  const tintColor = useThemeColor({}, 'tint');
  const inputBackgroundColor = useThemeColor({}, 'background');
  const placeholderColor = useThemeColor({}, 'tabIconDefault');


  
  const handleSubmit = () => {
    if (isLogin) {
      // Handle login
      if (!email || !password) {
        Alert.alert('Error', 'Please fill in all fields');
        return;
      }
      
      Alert.alert('Login', 'Processing login...');
      // You would normally call your authentication API here
      // navigation.navigate('Home');
    } else {
      // Handle registration
      if (!email || !password || !confirmPassword || !name) {
        Alert.alert('Error', 'Please fill in all fields');
        return;
      }
      
      if (password !== confirmPassword) {
        Alert.alert('Error', 'Passwords do not match');
        return;
      }
      
      Alert.alert('Registration', 'Processing registration...');
      // You would normally call your registration API here
      // Then navigate to login or directly to home
      // setIsLogin(true);
    }
  };
  
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    // Clear form when switching modes
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setName('');
  };
  
  // Go back to home screen
  const handleBack = () => {
    router.back(); // Use router.back() instead of navigation.goBack()
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header with back button */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={handleBack}
          >
            <ThemedText>← Back</ThemedText>
          </TouchableOpacity>
        </View>
        
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/mind_memory_ai.jpeg')} // Adjust the path as necessa
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        
        {/* Title */}
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Mind-MemoryAI</ThemedText>
          <ThemedText type="subtitle">{isLogin ? 'Login' : 'Create Account'}</ThemedText>
        </ThemedView>
        
        {/* Form */}
        <ThemedView style={styles.formContainer}>
          {!isLogin && (
            <View style={styles.inputContainer}>
              <ThemedText style={styles.inputLabel}>Full Name</ThemedText>
              <TextInput
                style={[styles.input, { backgroundColor: inputBackgroundColor, color: textColor }]}
                placeholder="Enter your full name"
                placeholderTextColor={placeholderColor}
                value={name}
                onChangeText={setName}
              />
            </View>
          )}
          
          <View style={styles.inputContainer}>
            <ThemedText style={styles.inputLabel}>Email</ThemedText>
            <TextInput
              style={[styles.input, { backgroundColor: inputBackgroundColor, color: textColor }]}
              placeholder="Enter your email"
              placeholderTextColor={placeholderColor}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          
          <View style={styles.inputContainer}>
            <ThemedText style={styles.inputLabel}>Password</ThemedText>
            <TextInput
              style={[styles.input, { backgroundColor: inputBackgroundColor, color: textColor }]}
              placeholder="Enter your password"
              placeholderTextColor={placeholderColor}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          
          {!isLogin && (
            <View style={styles.inputContainer}>
              <ThemedText style={styles.inputLabel}>Confirm Password</ThemedText>
              <TextInput
                style={[styles.input, { backgroundColor: inputBackgroundColor, color: textColor }]}
                placeholder="Confirm your password"
                placeholderTextColor={placeholderColor}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />
            </View>
          )}
          
          {isLogin && (
            <TouchableOpacity style={styles.forgotPassword}>
              <ThemedText style={styles.forgotPasswordText}>Forgot Password?</ThemedText>
            </TouchableOpacity>
          )}
          
          <TouchableOpacity 
            style={[styles.submitButton, { backgroundColor: '#2E86C1' }]}
            onPress={handleSubmit}
          >
            <ThemedText style={styles.submitButtonText}>
              {isLogin ? 'Login' : 'Register'}
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
        
        {/* Toggle Login/Register */}
        <View style={styles.toggleContainer}>
          <ThemedText>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
          </ThemedText>
          <TouchableOpacity onPress={toggleAuthMode}>
            <ThemedText style={[styles.toggleText, { color: '#2E86C1' }]}>
              {isLogin ? 'Register' : 'Login'}
            </ThemedText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingBottom: 10,
  },
  backButton: {
    padding: 8,
  },
  logoContainer: {
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 20, 
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  formContainer: {
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
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
    marginTop: 20,
  },
  toggleText: {
    fontWeight: 'bold',
  },
});