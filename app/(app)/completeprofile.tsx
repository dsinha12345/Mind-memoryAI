// app/(app)/completeprofile.tsx
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, ScrollView, ActivityIndicator, Platform, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';
import CustomAlertModal from '@/components/ui/CustomAlertModal';
import { Ionicons } from '@expo/vector-icons';
import { getCurrentUser } from 'aws-amplify/auth';
// Import Amplify API client generation if you have API configured
// import { generateClient } from 'aws-amplify/api';
// import * your mutations or API definitions *; // e.g. import { updateUserProfile } from '@/graphql/mutations';

// Placeholder for your GraphQL client if using AppSync/GraphQL
// const client = generateClient();

export default function CompleteProfileScreen() {
    const router = useRouter();
    const [userId, setUserId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // --- Form State ---
    // Add state for all the profile fields you want to collect
    const [dateOfBirth, setDateOfBirth] = useState(''); // Example: Consider using a date picker
    const [location, setLocation] = useState('');
    const [bio, setBio] = useState('');
    // Add more fields as needed (e.g., phone number, interests etc.)

    // --- Modal State ---
    const [modalVisible, setModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');

    // --- Theme Colors ---
    const backgroundColor = useThemeColor({}, 'background');
    const textColor = useThemeColor({}, 'text');
    const placeholderColor = useThemeColor({}, 'tabIconDefault');
    const inputBackgroundColor = useThemeColor({}, 'background'); // Or a slightly different shade
    const borderColor = useThemeColor({}, 'border' as any);
    const tintColor = useThemeColor({}, 'tint');

    // Fetch user ID on component mount
    useEffect(() => {
        const fetchUserId = async () => {
            try {
                const { userId: currentUserId } = await getCurrentUser();
                setUserId(currentUserId);
            } catch (err) {
                console.error('Error fetching user ID:', err);
                setError('Could not load user information.');
            }
        };
        fetchUserId();
        // TODO: Optionally fetch existing profile data here if user might partially complete it
    }, []);

    const showModal = (title: string, message: string) => {
        setModalTitle(title);
        setModalMessage(message);
        setModalVisible(true);
    };

    const handleSaveProfile = async () => {
        if (!userId) {
            showModal('Error', 'User information not available. Cannot save profile.');
            return;
        }
        // Basic validation (add more as needed)
        if (!dateOfBirth || !location || !bio) {
            showModal('Error', 'Please fill in all fields.');
            return;
        }

        setIsLoading(true);
        setError(null);

        const profileInput = {
            userId: userId, // Use the fetched Cognito User ID (sub)
            dateOfBirth: dateOfBirth,
            location: location,
            bio: bio,
            // Add other fields from state here
        };

        console.log('Saving Profile Data:', profileInput);

        try {
            // ==================================================
            // --- BACKEND INTEGRATION POINT ---
            // Replace this block with your actual Amplify API call
            // Example using GraphQL (ensure API/client/mutations are set up):
            /*
            await client.graphql({
                query: updateUserProfile, // Your generated mutation
                variables: { input: profileInput },
                authMode: 'userPool' // Or appropriate auth mode
            });
            */

            // --- Simulate API call success ---
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
            console.log('Simulated Save Successful');
            // --- End Simulation ---
            // ==================================================


            showModal('Success', 'Profile updated successfully!');
            // Optionally navigate back after a delay or on modal close
            setTimeout(() => {
                 setModalVisible(false);
                 if(router.canGoBack()) {
                    router.back();
                 } else {
                    router.replace('/profile'); // Fallback navigation
                 }
            }, 1000);


        } catch (err: any) {
            console.error('Error saving profile:', err);
            setError(`Failed to save profile: ${err.message || 'Please try again.'}`);
            showModal('Error', `Failed to save profile: ${err.message || 'Please try again.'}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ThemedView style={[styles.container, { backgroundColor }]}>
            {/* Simple Header */}
             <View style={[styles.header, { borderBottomColor: borderColor }]}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back-outline" size={28} color={textColor} />
                </TouchableOpacity>
                <ThemedText style={styles.headerTitle}>Complete Your Profile</ThemedText>
                <View style={styles.headerRightPlaceholder} /> {/* Balance */}
            </View>

            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.scrollContentContainer}
                keyboardShouldPersistTaps="handled"
            >
                {error && <ThemedText style={styles.errorText}>{error}</ThemedText>}

                {/* Date of Birth Input */}
                <View style={styles.inputGroup}>
                    <ThemedText style={styles.label}>Date of Birth</ThemedText>
                    <TextInput
                        style={[styles.input, { backgroundColor: inputBackgroundColor, color: textColor, borderColor }]}
                        placeholder="YYYY-MM-DD" // Consider using a Date Picker component
                        placeholderTextColor={placeholderColor}
                        value={dateOfBirth}
                        onChangeText={setDateOfBirth}
                        keyboardType="numeric" // Basic type, Date Picker is better UX
                        editable={!isLoading}
                    />
                </View>

                {/* Location Input */}
                <View style={styles.inputGroup}>
                    <ThemedText style={styles.label}>Location</ThemedText>
                    <TextInput
                        style={[styles.input, { backgroundColor: inputBackgroundColor, color: textColor, borderColor }]}
                        placeholder="City, Country"
                        placeholderTextColor={placeholderColor}
                        value={location}
                        onChangeText={setLocation}
                        editable={!isLoading}
                    />
                </View>

                {/* Bio Input */}
                <View style={styles.inputGroup}>
                    <ThemedText style={styles.label}>Bio</ThemedText>
                    <TextInput
                        style={[styles.input, styles.textArea, { backgroundColor: inputBackgroundColor, color: textColor, borderColor }]}
                        placeholder="Tell us a little about yourself..."
                        placeholderTextColor={placeholderColor}
                        value={bio}
                        onChangeText={setBio}
                        multiline={true}
                        numberOfLines={4}
                        editable={!isLoading}
                    />
                </View>

                 {/* Add more TextInput fields here for other profile data */}


                {/* Save Button */}
                <TouchableOpacity
                    style={[styles.saveButton, { backgroundColor: isLoading ? '#ccc' : tintColor }]}
                    onPress={handleSaveProfile}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <ActivityIndicator size="small" color="#ffffff" />
                    ) : (
                        <ThemedText style={styles.saveButtonText}>Save Profile</ThemedText>
                    )}
                </TouchableOpacity>

            </ScrollView>

            <CustomAlertModal
                visible={modalVisible}
                title={modalTitle}
                message={modalMessage}
                buttons={[{ text: 'OK', onPress: () => setModalVisible(false) }]}
                onClose={() => setModalVisible(false)}
            />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 60, // Adjust as needed
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: Platform.OS === 'ios' ? 5 : 0, // Smaller top padding
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    backButton: {
        padding: 8,
        width: 44, // Match placeholder
        alignItems: 'center',
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    headerRightPlaceholder: {
        width: 44, // Match back button
    },
    scrollContainer: {
        flex: 1,
    },
    scrollContentContainer: {
        padding: 20,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        fontWeight: '500',
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top', // Align text to top for multiline
        paddingTop: 15,
    },
    saveButton: {
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    saveButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginBottom: 15,
    },
});