// components/LogoutHeader.tsx
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { signOut } from 'aws-amplify/auth';
import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

// Props interface remains the same
interface LogoutHeaderProps {
  title: string;
}

export default function LogoutHeader({ title }: LogoutHeaderProps) {
  const router = useRouter();
  const tintColor = useThemeColor({}, 'tint');
  const headerBackgroundColor = useThemeColor({}, 'background');

  const handleLogout = async () => {
    try {
      await signOut();
      router.replace('/auth'); // Redirect to your auth screen
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <View style={[styles.header, { backgroundColor: headerBackgroundColor }]}>
      <View style={styles.logoContainer}>
        <Image
            source={require('@/assets/images/mind_memory_ai.jpeg')}
            style={styles.logo}
            resizeMode="contain" // Adjust resizeMode as needed
        />
      </View>
      <View style={styles.titleContainer}>
        <ThemedText type="subtitle" style={styles.title} numberOfLines={1} ellipsizeMode="tail">
             Mind Memory
        </ThemedText>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={28} color={tintColor} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Key for layout
    height: 60, // Standard header height
    paddingHorizontal: 10, // Adjust padding as needed
  },
  logoContainer: { // Was on the right, now on the left
    // Must have the same width as the button container for centering
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center', // Center the logo inside
  },
  logo: {
    width: 35,
    height: 35,
  },
  titleContainer: {
     flex: 1,
     alignItems: 'center',
     marginHorizontal: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: { // Was on the left, now on the right
    // Fixed width for the touchable area, must match logoContainer width
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center', // Center the icon inside
  },
});