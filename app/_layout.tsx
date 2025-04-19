
// app/_layout.tsx
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
      }}
    >
      {/* The navigator implicitly handles groups */}
      <Stack.Screen name="(public)" options={{ headerShown: false }} />
      <Stack.Screen name="(app)" options={{ headerShown: false }} />
      {/* Keep modal auth screen defined at the root */}
      <Stack.Screen name="auth" options={{ presentation: 'modal', headerShown: false }} />
    </Stack>
  );
}