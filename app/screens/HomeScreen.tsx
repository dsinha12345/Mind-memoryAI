///Users/devanshmohansinha/Mind-memoryAI/app/screens/HomeScreen.tsx
import React from 'react';
import { Image, StyleSheet, ScrollView, View, Alert, Pressable } from 'react-native';
import { useRouter } from 'expo-router';


// Assuming these components exist based on your original code
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function HomeScreen() {

  // Button styling
  const buttonTextColor = useThemeColor({}, 'text');
  const buttonBackgroundColor = useThemeColor({}, 'tint');
  const backgroundColor = useThemeColor({}, 'background');

  const router = useRouter();

  const handleLoginPress = () => {
    router.push('/auth'); // Use router.push instead of navigation.navigate
  };


  return (
    <View style={styles.container}>
      {/* Fixed Header */}
      <ThemedView style={styles.header}>
        <View style={styles.headerContent}>
          {/* Left: Logo */}
          <View style={styles.logoContainer}>
            <Image
              source={require('@/assets/images/mind_memory_ai.jpeg')}
              style={styles.headerLogo}
              resizeMode="contain"
            />
            <ThemedText style={styles.headerLogoText}>
              Mind-MemoryAI
            </ThemedText>
          </View>

          {/* Right: Login Button */}
          <Pressable
            style={({ pressed }) => [
              styles.loginButton,
              { backgroundColor: '#2E86C1' }, // Set a specific blue color that works with white text
              pressed && styles.loginButtonPressed,
            ]}
            onPress={handleLoginPress}
          >
            <ThemedText style={styles.loginButtonText}>
              Login
            </ThemedText>
          </Pressable>
        </View>
      </ThemedView>


      {/* Scrollable Content */}
      <ScrollView 
        style={styles.scrollContent}
        contentContainerStyle={styles.scrollContentContainer}
      >
        {/* Main Logo - Centered */}
        <View style={styles.mainLogoContainer}>
          <Image
            source={require('@/assets/images/mind_memory_ai.jpeg')}
            style={styles.mainLogo}
            resizeMode="contain"
          />
        </View>

        {/* Main Title */}
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Mind-MemoryAI</ThemedText>
        </ThemedView>
        <ThemedText type="subtitle" style={styles.subtitle}>Your Cognitive Development Companion</ThemedText>

        {/* Main Content/Explanation */}
        <ThemedView style={styles.contentBlock}>
          <ThemedText style={styles.explanationText}>
            Unlock your mind's potential with Mind-MemoryAI! Our platform leverages cutting-edge AI, including{' '}
            <ThemedText type="defaultSemiBold">Transformer models</ThemedText> and{' '}
            <ThemedText type="defaultSemiBold">Retrieval-Augmented Generation (RAG)</ThemedText> with{' '}
            <ThemedText type="defaultSemiBold">LLaMA</ThemedText>, to enhance cognitive abilities.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.contentBlock}>
          <ThemedText type="subtitle">What We Offer:</ThemedText>
          <ThemedText style={styles.listItem}>
            • <ThemedText type="defaultSemiBold">Predictive Insights:</ThemedText> Assessments to understand cognitive domain values in children.
          </ThemedText>
          <ThemedText style={styles.listItem}>
            • <ThemedText type="defaultSemiBold">Personalized Content:</ThemedText> Dynamically generating multimodal learning materials tailored to individual needs using RAG.
          </ThemedText>
          <ThemedText style={styles.listItem}>
            • <ThemedText type="defaultSemiBold">Progress Tracking:</ThemedText> Monitor cognitive development through intuitive analytics dashboards.
          </ThemedText>
          <ThemedText style={styles.listItem}>
            • <ThemedText type="defaultSemiBold">Built with Modern Tech:</ThemedText> Powered by PyTorch, Hugging Face, FastAPI, React, and Docker, running on AWS.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.contentBlock}>
          <ThemedText type="subtitle">Join Us!</ThemedText>
          <ThemedText>
            Explore the future of cognitive development. Log in to get started on your cognitive enhancement journey.
          </ThemedText>
        </ThemedView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 70,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    elevation: 3,
    zIndex: 10,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLogo: {
    width: 40,
    height: 40,
  },
  headerLogoText: {
    fontSize: 18,
    marginLeft: 8,
  },
  loginButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    elevation: 2,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  loginButtonPressed: {
    opacity: 0.8,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text color
  },
  scrollContent: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingBottom: 30,
  },
  mainLogoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  mainLogo: {
    width: '70%',
    height: 200,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
  contentBlock: {
    gap: 8,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  explanationText: {
    textAlign: 'center',
    lineHeight: 24,
  },
  listItem: {
    marginLeft: 8,
    marginBottom: 10,
  },
});