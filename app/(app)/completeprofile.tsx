// app/(app)/completeprofile.tsx
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, ScrollView, ActivityIndicator, Platform, TouchableOpacity } from 'react-native'; // Removed Picker temporarily, add back if needed for styling
import { Picker } from '@react-native-picker/picker'; // Use the community Picker
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';
import CustomAlertModal from '@/components/ui/CustomAlertModal';
import { Ionicons } from '@expo/vector-icons';
import { getCurrentUser } from 'aws-amplify/auth';
// Import Amplify API client generation
import { generateClient } from 'aws-amplify/api';
// Import GraphQL operations
import { createUser, updateUser } from '@/src/graphql/mutations'; // Add updateUser
import { listInstitutions, getUser } from '@/src/graphql/queries'; // Add getUser
import { UserRole } from '@/src/API';
// Removed unused import 'get'

// Create GraphQL client
const client = generateClient();

export default function CompleteProfileScreen() {
    const router = useRouter();
    const [userId, setUserId] = useState<string | null>(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(true); // Start loading true until user data is fetched
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false); // Separate state for submission loading

    // --- Form State ---
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [location, setLocation] = useState('');
    const [bio, setBio] = useState('');
    const [role, setRole] = useState<UserRole>(UserRole.STUDENT);
    const [institutionID, setInstitutionID] = useState<string | undefined>(undefined); // Initialize as undefined

    // --- Institution Data ---
    const [institutions, setInstitutions] = useState<any[]>([]);
    const [loadingInstitutions, setLoadingInstitutions] = useState(false);

    // --- Modal State ---
    const [modalVisible, setModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');

    // --- Theme Colors ---
    const backgroundColor = useThemeColor({}, 'background');
    const textColor = useThemeColor({}, 'text');
    const placeholderColor = useThemeColor({}, 'tabIconDefault');
    const inputBackgroundColor = useThemeColor({}, 'background');
    const borderColor = useThemeColor({}, 'border' as any);
    const tintColor = useThemeColor({}, 'tint');

    // Fetch user ID, existing profile data, and institutions
    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                setIsLoading(true);
                setError(null); // Clear previous errors

                // 1. Get Cognito User Info
                const { userId: currentUserId, username: currentUsername, signInDetails } = await getCurrentUser();
                setUserId(currentUserId);
                setUsername(currentUsername);
                if (signInDetails?.loginId) {
                    setEmail(signInDetails.loginId);
                } else {
                     throw new Error("Could not retrieve user email.");
                }

                // 2. Fetch Institutions (run concurrently)
                const institutionsPromise = fetchInstitutions(); // Don't await yet

                // 3. Check for existing user profile in DB
                try {
                    console.log(`Checking for existing profile with ID: ${currentUserId}`);
                    const existingUserData = await client.graphql({
                        query: getUser,
                        variables: { id: currentUserId },
                        authMode: 'userPool'
                    });

                    const userProfile = existingUserData.data.getUser;
                    console.log("Existing user profile data:", userProfile);

                    if (userProfile) {
                        // Pre-fill form if profile exists
                        setName(userProfile.name || '');
                        setDateOfBirth(userProfile.dateOfBirth || '');
                        setLocation(userProfile.location || '');
                        setBio(userProfile.bio || '');
                        setRole(userProfile.role || UserRole.STUDENT);
                        // Important: Ensure institutionID is set correctly for the Picker
                        setInstitutionID(userProfile.institutionID || undefined);
                        console.log(`Pre-filled institution ID: ${userProfile.institutionID}`);
                    } else {
                         console.log("No existing profile found for this user.");
                         // Keep form fields empty or with defaults
                    }
                } catch (getUserError: any) {
                    // It's okay if getUser fails with "NotFound" or similar, means no profile exists.
                    // Log other errors.
                    if (!getUserError.message?.includes('NotFound')) { // Basic check, might need refinement based on actual error structure
                         console.warn('Error fetching existing user profile (may be expected if new user):', getUserError);
                    } else {
                         console.log("getUser query confirmed no existing profile.");
                    }
                }

                // 4. Await institutions fetch completion
                await institutionsPromise;


            } catch (err: any) {
                console.error('Error fetching initial data:', err);
                setError(`Could not load initial data: ${err.message || 'Please try again.'}`);
                showModal('Error', `Could not load initial data: ${err.message || 'Please try again.'}`);
            } finally {
                setIsLoading(false);
            }
        };

        fetchInitialData();
    }, []); // Run only once on mount

    // Fetch institutions for dropdown
    const fetchInstitutions = async () => {
        try {
            setLoadingInstitutions(true);
            const institutionsData = await client.graphql({
                query: listInstitutions,
                authMode: 'userPool'
            });

            const institutionsList = institutionsData.data.listInstitutions?.items || [];
             // Filter out potential null items just in case
            const validInstitutions = institutionsList.filter(inst => inst !== null);
            setInstitutions(validInstitutions);
            console.log("Fetched institutions:", validInstitutions);

            // Set default institution *only if* no existing profile was found *and* no institution is selected yet
            // And if the list is not empty
            if (!institutionID && validInstitutions.length > 0) {
                 // Check if an existing value was already set by getUser profile fetch
                const currentFormInstitution = institutions.find(inst => inst.id === institutionID);
                if (!currentFormInstitution) {
                    console.log(`Setting default institution ID: ${validInstitutions[0].id}`);
                    setInstitutionID(validInstitutions[0].id); // Set default if none exists yet
                }
            } else if (validInstitutions.length > 0 && institutionID) {
                // Ensure the pre-filled institutionID is valid
                const isValid = validInstitutions.some(inst => inst.id === institutionID);
                if (!isValid) {
                    console.warn(`Pre-filled institution ID ${institutionID} not found in fetched list. Resetting.`);
                    setInstitutionID(validInstitutions[0].id); // Reset to default if pre-filled one is invalid
                }
            }

        } catch (err) {
            console.error('Error fetching institutions:', err);
            setError('Could not load institutions. Please try again later.');
        } finally {
            setLoadingInstitutions(false);
        }
    };

    const showModal = (title: string, message: string) => {
        setModalTitle(title);
        setModalMessage(message);
        setModalVisible(true);
    };

    const handleSaveProfile = async () => {
        if (!userId || !username || !email) {
            showModal('Error', 'User information not available. Cannot save profile.');
            return;
        }

        // Basic validation
        if (!name || !dateOfBirth || !location || !bio || !institutionID) {
            showModal('Error', 'Please fill in all required fields.');
            return;
        }

        setIsSubmitting(true); // Use separate state for submit button loading
        setError(null);

        try {
            // 1. Check again if user profile exists (in case something changed)
            let userExists = false;
            try {
                const checkUser = await client.graphql({
                    query: getUser,
                    variables: { id: userId },
                    authMode: 'userPool'
                });
                if (checkUser.data.getUser) {
                    userExists = true;
                }
            } catch (e) {
                // Assume user doesn't exist if getUser fails (e.g., NotFound error)
                 console.log("getUser check before save indicates user does not exist.");
                userExists = false;
            }

            console.log(`Attempting to save profile. User exists: ${userExists}`);

            if (userExists) {
                // --- UPDATE EXISTING USER ---
                const updateInput = {
                    id: userId, // Primary Key is required for update
                    name: name,
                    dateOfBirth: dateOfBirth,
                    location: location,
                    bio: bio,
                    role: role,
                    institutionID: institutionID,
                    // DO NOT include username or email usually, unless your schema specifically allows updating them here.
                    // Add _version if using DataStore conflict detection, otherwise omit.
                };
                 console.log("Calling updateUser with input:", updateInput);
                await client.graphql({
                    query: updateUser,
                    variables: { input: updateInput },
                    authMode: 'userPool'
                    // Add condition if needed: e.g., condition: { attributeExists: true } although check above is better
                });
                showModal('Success', 'Profile updated successfully!');

            } else {
                // --- CREATE NEW USER ---
                const createInput = {
                    id: userId, // Ensure this matches Cognito User Sub
                    username: username, // Include username for creation
                    email: email,       // Include email for creation
                    name: name,
                    dateOfBirth: dateOfBirth,
                    location: location,
                    bio: bio,
                    role: role,
                    institutionID: institutionID,
                };
                 console.log("Calling createUser with input:", createInput);
                await client.graphql({
                    query: createUser,
                    variables: { input: createInput },
                    authMode: 'userPool'
                     // Add condition if needed: e.g., condition: { attributeExists: false } // Less reliable than getUser check
                });
                showModal('Success', 'Profile created successfully!');
            }

            // Navigate to home screen after a delay
            setTimeout(() => {
                setModalVisible(false);
                router.replace('/'); // Navigate to home or appropriate screen
            }, 1500);

        } catch (err: any) {
             console.error('Error saving profile:', JSON.stringify(err, null, 2)); // Log the full error structure

             // Check for specific GraphQL errors (like the non-nullable issue from before)
             let specificErrorMessage = 'Please try again.';
             if (err.errors && Array.isArray(err.errors) && err.errors.length > 0) {
                 // Combine messages from all GraphQL errors
                 specificErrorMessage = err.errors.map((e: any) => e.message || 'Unknown GraphQL error').join('; ');
             } else if (err.message) {
                 specificErrorMessage = err.message;
             }

             setError(`Failed to save profile: ${specificErrorMessage}`);
             showModal('Error', `Failed to save profile: ${specificErrorMessage}`);
        } finally {
            setIsSubmitting(false); // Stop submit loading
        }
    };

    // Render Loading state for initial data fetch
    if (isLoading) {
        return (
            <ThemedView style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={tintColor} />
                <ThemedText>Loading profile...</ThemedText>
            </ThemedView>
        );
    }

    return (
        <ThemedView style={[styles.container, { backgroundColor }]}>
            {/* Simple Header */}
            <View style={[styles.header, { borderBottomColor: borderColor }]}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton} disabled={isSubmitting}>
                    <Ionicons name="arrow-back-outline" size={28} color={textColor} />
                </TouchableOpacity>
                <ThemedText style={styles.headerTitle}>Complete Your Profile</ThemedText>
                <View style={styles.headerRightPlaceholder} />
            </View>

            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.scrollContentContainer}
                keyboardShouldPersistTaps="handled"
            >
                {/* Display general errors or specific submission errors */}
                {error && <ThemedText style={styles.errorText}>{error}</ThemedText>}

                {/* Name Input */}
                <View style={styles.inputGroup}>
                    <ThemedText style={styles.label}>Full Name</ThemedText>
                    <TextInput
                        style={[styles.input, { backgroundColor: inputBackgroundColor, color: textColor, borderColor }]}
                        placeholder="Enter your full name"
                        placeholderTextColor={placeholderColor}
                        value={name}
                        onChangeText={setName}
                        editable={!isSubmitting} // Disable when submitting
                    />
                </View>

                 {/* Role Selection */}
                 <View style={styles.inputGroup}>
                    <ThemedText style={styles.label}>Role</ThemedText>
                    <View style={[styles.pickerContainer, { backgroundColor: inputBackgroundColor, borderColor }]}>
                       <Picker
                            selectedValue={role}
                            onValueChange={(itemValue) => setRole(itemValue)}
                            style={[styles.picker, { color: textColor }]} // Apply picker style
                            enabled={!isSubmitting} // Disable when submitting
                        >
                            <Picker.Item label="Student" value={UserRole.STUDENT} />
                            <Picker.Item label="Instructor" value={UserRole.INSTRUCTOR} />
                        </Picker>
                    </View>
                </View>

                 {/* Institution Selection */}
                 <View style={styles.inputGroup}>
                    <ThemedText style={styles.label}>Institution</ThemedText>
                    {loadingInstitutions ? (
                        <ActivityIndicator size="small" color={tintColor} />
                    ) : (
                        <View style={[styles.pickerContainer, { backgroundColor: inputBackgroundColor, borderColor }]}>
                            <Picker
                                selectedValue={institutionID}
                                // Ensure itemValue is treated as string if your IDs are strings
                                onValueChange={(itemValue) => setInstitutionID(String(itemValue))}
                                style={[styles.picker, { color: textColor }]}
                                enabled={!isSubmitting && institutions.length > 0} // Disable when submitting
                            >
                                {institutions.length === 0 && <Picker.Item label="Loading or no institutions..." value={undefined} />}
                                {institutions.map((institution) => (
                                    <Picker.Item
                                        key={institution.id}
                                        label={institution.name || 'Unnamed Institution'} // Handle potential null names
                                        value={institution.id}
                                    />
                                ))}
                            </Picker>
                         </View>
                    )}
                </View>


                {/* Date of Birth Input */}
                <View style={styles.inputGroup}>
                    <ThemedText style={styles.label}>Date of Birth</ThemedText>
                    <TextInput
                        style={[styles.input, { backgroundColor: inputBackgroundColor, color: textColor, borderColor }]}
                        placeholder="YYYY-MM-DD"
                        placeholderTextColor={placeholderColor}
                        value={dateOfBirth}
                        onChangeText={setDateOfBirth}
                        keyboardType="numeric" // Consider a date picker component for better UX
                        editable={!isSubmitting}
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
                        editable={!isSubmitting}
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
                        editable={!isSubmitting}
                    />
                </View>

                {/* Save Button */}
                <TouchableOpacity
                    style={[styles.saveButton, { backgroundColor: isSubmitting ? '#ccc' : tintColor }]}
                    onPress={handleSaveProfile}
                    disabled={isSubmitting || isLoading} // Disable during initial load or submission
                >
                    {isSubmitting ? (
                        <ActivityIndicator size="small" color="#ffffff" />
                    ) : (
                        // Changed button text
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
    loadingContainer: { // Added style for loading indicator
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: Platform.OS === 'ios' ? 5 : 0, // Adjust as needed for status bar
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    backButton: {
        padding: 8,
        width: 44, // Ensure tappable area
        alignItems: 'center', // Center icon
    },
    headerTitle: {
        flex: 1, // Allow title to take space
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    headerRightPlaceholder: {
        width: 44, // Balance the back button
    },
    scrollContainer: {
        flex: 1,
    },
    scrollContentContainer: {
        padding: 20,
        paddingBottom: 40, // Add padding at the bottom
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
        justifyContent: 'center', // Vertically center placeholder text
    },
     // Style for the Picker container to look like TextInput
    pickerContainer: {
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'center', // Center Picker vertically
         // paddingHorizontal: 0, // May need adjustment depending on platform
    },
    // Style for the Picker itself
    picker: {
       height: 50,
       width: '100%',
        // Note: Direct styling on Picker is limited, container styling is often key.
        // On iOS, you might need different approaches for extensive customization.
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top', // Align text to the top
        paddingTop: 15, // Add padding inside text area
    },
    saveButton: {
        height: 50,
        borderRadius: 25, // Make it pill-shaped
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
        color: 'red', // Or use theme color for errors
        textAlign: 'center',
        marginBottom: 15,
    },
});