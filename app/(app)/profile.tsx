// app/(app)/(tabs)/profile.tsx
import React, { useState, ComponentProps } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, ScrollView,Dimensions,Animated,Platform} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';
import CustomAlertModal from '@/components/ui/CustomAlertModal';

import LogoutHeader from '@/components/LogoutHeader'; // <-- Import LogoutHeader

const { width, height } = Dimensions.get('window');
const DRAWER_WIDTH = width * 0.75;

export default function ProfileScreen() {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerAnim] = useState(new Animated.Value(-DRAWER_WIDTH));
  const [overlayOpacity] = useState(new Animated.Value(0));
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [modalButtons, setModalButtons] = useState<{ text: string; onPress?: () => void }[]>([]);

  // Theme colors
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  const tintColor = useThemeColor({}, 'tint');
  const cardColor = useThemeColor({}, 'background');
  
  // Mock user data (replace with actual user data from Cognito)
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    joinDate: "April 2025",
    avatar: null // Replace with actual avatar if available
  };

  const showModal = (
    title: string,
    message: string,
    buttons: { text: string; onPress?: () => void }[] = [{ text: 'OK', onPress: () => setModalVisible(false) }]
  ) => {
    setModalTitle(title);
    setModalMessage(message);
    setModalButtons(buttons);
    setModalVisible(true);
  };

  const toggleDrawer = () => {
    if (drawerOpen) {
      // Close drawer
      Animated.parallel([
        Animated.timing(drawerAnim, {
          toValue: -DRAWER_WIDTH,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(overlayOpacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start(() => setDrawerOpen(false));
    } else {
      // Open drawer
      setDrawerOpen(true);
      Animated.parallel([
        Animated.timing(drawerAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(overlayOpacity, {
          toValue: 0.5,
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start();
    }
  };
  const goToCompleteProfile = () => {
    router.push('/completeprofile'); // Navigate to the new screen
  };

  // Drawer menu options
  const menuOptions = [
    {
      icon: 'person-outline', // Inferred as 'person-outline', not string
      title: 'Personal Details',
      onPress: () => console.log('Navigate to personal details')
    },
    {
      icon: 'settings-outline', // Inferred as 'settings-outline', not string
      title: 'Settings',
      onPress: () => console.log('Navigate to settings')
    },
    {
      icon: 'help-circle-outline', // Inferred as 'help-circle-outline', not string
      title: 'Help & Support',
      onPress: () => console.log('Navigate to help')
    },
  ] as const;

  return (
    <View style={styles.container}>
      <LogoutHeader title ="Profile" />
    <View style={[styles.container, { backgroundColor }]}>
      
      <ThemedView style={styles.header}>
        <TouchableOpacity onPress={toggleDrawer} style={styles.menuButton}>
          <Ionicons name="menu" size={28} color={textColor} />
        </TouchableOpacity>
        <ThemedText type="defaultSemiBold" style={styles.headerTitle}>Profile</ThemedText>
        <View style={styles.headerRight} />
      </ThemedView>

      {/* Main Content */}
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        {/* Profile Header */}
        <ThemedView style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            {userData.avatar ? (
              <Image source={{ uri: userData.avatar }} style={styles.avatar} />
            ) : (
              <View style={[styles.avatarPlaceholder, { backgroundColor: tintColor }]}>
                <ThemedText style={styles.avatarInitial}>
                  {userData.name.charAt(0)}
                </ThemedText>
              </View>
            )}
          </View>
          <ThemedText type="title" style={styles.userName}>{userData.name}</ThemedText>
          <ThemedText style={styles.userEmail}>{userData.email}</ThemedText>
          <ThemedText style={styles.joinDate}>Member since {userData.joinDate}</ThemedText>
        </ThemedView>

        {/* Profile Stats */}
        <ThemedView style={styles.statsContainer}>
          <View style={styles.statItem}>
            <ThemedText type="defaultSemiBold" style={styles.statValue}>0</ThemedText>
            <ThemedText style={styles.statLabel}>Sessions</ThemedText>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <ThemedText type="defaultSemiBold" style={styles.statValue}>0</ThemedText>
            <ThemedText style={styles.statLabel}>Exercises</ThemedText>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <ThemedText type="defaultSemiBold" style={styles.statValue}>0</ThemedText>
            <ThemedText style={styles.statLabel}>Progress</ThemedText>
          </View>
        </ThemedView>
        {/* --- ADDED: Complete Profile Section --- */}
        {/* Conditionally show this section if profile isn't complete */}
        {!userData.isProfileComplete && (
            <View style={styles.sectionContainer}>
                 <ThemedText type="subtitle" style={styles.sectionTitle}>Complete Your Profile</ThemedText>
                 <View style={[styles.actionCard, { backgroundColor: cardColor }]}>
                    <Ionicons name="person-add-outline" size={48} color={textColor} style={{ opacity: 0.5 }} />
                    <ThemedText style={styles.actionCardText}>Add more details to personalize your experience.</ThemedText>
                    <TouchableOpacity
                        style={[styles.actionButton, { backgroundColor: tintColor }]}
                        onPress={goToCompleteProfile} // Navigate on press
                    >
                        <ThemedText style={styles.actionButtonText}>Complete Profile</ThemedText>
                    </TouchableOpacity>
                 </View>
            </View>
        )}
        {/* --- END: Complete Profile Section --- */}

        {/* Recent Activity Section */}
        <ThemedView style={styles.sectionContainer}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Recent Activity</ThemedText>
          <ThemedView style={styles.emptyState}>
            <Ionicons name="calendar-outline" size={48} color={textColor} style={{ opacity: 0.5 }} />
            <ThemedText style={styles.emptyStateText}>No recent activity</ThemedText>
            <TouchableOpacity 
              style={[styles.startButton, { backgroundColor: tintColor }]}
              onPress={() => console.log('Start new session')}
            >
              <ThemedText style={styles.startButtonText}>Start New Session</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        </ThemedView>

        {/* Recommended Exercises */}
        <ThemedView style={styles.sectionContainer}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Recommended Exercises</ThemedText>
          <ThemedView style={styles.emptyState}>
            <Ionicons name="fitness-outline" size={48} color={textColor} style={{ opacity: 0.5 }} />
            <ThemedText style={styles.emptyStateText}>Complete your profile to get personalized recommendations</ThemedText>
            <TouchableOpacity 
              style={[styles.startButton, { backgroundColor: tintColor }]}
              onPress={() => console.log('Complete profile')}
            >
              <ThemedText style={styles.startButtonText}>Complete Profile</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        </ThemedView>
      </ScrollView>

      {/* Drawer Overlay */}
      {drawerOpen && (
        <Animated.View 
          style={[
            styles.overlay, 
            { opacity: overlayOpacity, backgroundColor: 'black' }
          ]}
          onTouchEnd={toggleDrawer}
        />
      )}

      {/* Drawer */}
      <Animated.View 
        style={[
          styles.drawer, 
          { 
            transform: [{ translateX: drawerAnim }],
            backgroundColor: cardColor
          }
        ]}
      >
         {/* --- Modification Start --- */}
        {/* Drawer Header */}
        <ThemedView style={styles.drawerHeader}>
          {/* Back/Close Button inside the drawer */}
          <TouchableOpacity
            style={styles.drawerCloseButton}
            onPress={toggleDrawer} // Call toggleDrawer to close
          >
            <Ionicons name="arrow-back-outline" size={28} color={textColor} />
            {/* Or use name="close-outline" if you prefer */}
          </TouchableOpacity>

          {/* Existing Drawer Header Content */}
          <View style={styles.drawerAvatarContainer}>
            {userData.avatar ? (
              <Image source={{ uri: userData.avatar }} style={styles.drawerAvatar} />
            ) : (
              <View style={[styles.drawerAvatarPlaceholder, { backgroundColor: tintColor }]}>
                <ThemedText style={styles.drawerAvatarInitial}>
                  {userData.name.charAt(0)}
                </ThemedText>
              </View>
            )}
          </View>
          <ThemedText type="defaultSemiBold" style={styles.drawerUserName}>{userData.name}</ThemedText>
          <ThemedText style={styles.drawerUserEmail}>{userData.email}</ThemedText>
        </ThemedView>

        {/* Drawer Menu */}
        <ScrollView style={styles.drawerMenu}>
          {menuOptions.map((option, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.drawerMenuItem}
              onPress={() => {
                toggleDrawer();
                option.onPress();
              }}
            >
              <Ionicons name={option.icon} size={24} color={textColor} />
              <ThemedText style={styles.drawerMenuItemText}>{option.title}</ThemedText>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <ThemedText style={styles.appVersion}>Mind-MemoryAI v1.0.0</ThemedText>
      </Animated.View>

      <CustomAlertModal
        visible={modalVisible}
        title={modalTitle}
        message={modalMessage}
        buttons={modalButtons}
        onClose={() => setModalVisible(false)}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  menuButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
  },
  headerRight: {
    width: 44, // Same width as menu button for balance
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 30,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  avatarContainer: {
    marginBottom: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarInitial: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userEmail: {
    marginBottom: 5,
    opacity: 0.7,
  },
  joinDate: {
    fontSize: 12,
    opacity: 0.5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
    boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    opacity: 0.7,
  },
  statDivider: {
    width: 1,
    height: '70%',
    backgroundColor: '#E0E0E0',
  },
  sectionContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    borderRadius: 10,
    boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  emptyStateText: {
    textAlign: 'center',
    marginVertical: 15,
    opacity: 0.7,
  },
  startButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  startButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: DRAWER_WIDTH,
    height: '100%',
    zIndex: 2,
  },
  drawerHeader: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  drawerAvatarContainer: {
    marginBottom: 15,
  },
  drawerAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  drawerAvatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerAvatarInitial: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  drawerUserName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  drawerUserEmail: {
    fontSize: 14,
    opacity: 0.7,
  },
  drawerMenu: {
    flex: 1,
  },
  drawerMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  drawerCloseButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 45 : 25, // Adjust positioning relative to paddingTop
    left: 15,
    padding: 5, // Add padding for easier tapping
    zIndex: 1, // Ensure it's above other header content if needed
  },
  drawerMenuItemText: {
    marginLeft: 15,
    fontSize: 16,
  },
  appVersion: {
    padding: 20,
    textAlign: 'center',
    fontSize: 12,
    opacity: 0.5,
  },
  actionCard: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    borderRadius: 10,
    boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  actionCardText: {
    textAlign: 'center',
    marginVertical: 15,
    opacity: 0.7,
  },
  actionButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  actionButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
