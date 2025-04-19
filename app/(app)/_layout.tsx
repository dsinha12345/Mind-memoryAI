// app/(app)/_layout.tsx
import { Stack, Redirect } from 'expo-router';
import React from 'react';
import { AuthProvider, useAuth } from '@/contexts/AuthContext'; // Assuming useAuth hook

function AppStackLayout() {
  const { isAuthenticated, isLoading } = useAuth(); // Get auth state

  // Optional: Add a loading indicator while checking auth
  if (isLoading) {
      // Return a loading spinner or splash screen component
      return null; // Or <LoadingScreen />;
  }

  // If not authenticated, redirect to the auth screen
  if (!isAuthenticated) {
    // Ensure '/auth' route is defined outside this group (e.g., at root)
    return <Redirect href="/auth" />;
  }

  // If authenticated, render the authenticated routes
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="profile" />
      {/* Add other authenticated screens here */}
    </Stack>
  );
}

export default function AuthenticatedLayout() {
  // Wrap the authenticated stack with the AuthProvider
  return (
    <AuthProvider>
      <AppStackLayout />
    </AuthProvider>
  );
}