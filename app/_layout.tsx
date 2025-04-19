//app/_layout.tsx
import { Stack } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { Amplify } from 'aws-amplify';
import awsconfig from '../src/aws-exports';

Amplify.configure(awsconfig);

export default function RootLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <Stack 
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        }
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="auth" options={{ presentation: 'modal' }} />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
