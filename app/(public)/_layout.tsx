// app/(public)/_layout.tsx
import { Stack } from 'expo-router';
import React from 'react';
// Remove the direct import of the screen component
// import HomeScreen from '../screens/HomeScreen'; // Expo Router handles linking files to routes

// This layout defines the navigator for the public routes
export default function PublicLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}