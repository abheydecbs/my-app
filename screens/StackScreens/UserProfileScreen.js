import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import ButtonComponent from '../../components/ButtonComponent';
import { Colors, Typography, Shadows } from '../../GlobalStyles';

export default function UserProfileScreen({ navigation }) {
  // User profile state
  const [profile, setProfile] = useState({
    firstName: 'Alexander',
    lastName: 'Anderson',
    email: 'alexander@example.com',
    phone: '+45 12 34 56 78',
    location: 'Copenhagen, Denmark',
    bio: 'React Native developer passionate about creating beautiful mobile applications.',
    joinDate: 'September 2025',
    notifications: true,
    darkMode: false,
    language: 'English'
  });

  const [isEditing, setIsEditing] = useState(false);

  const renderProfileHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <View style={styles.profileImage}>
            <Ionicons name="person" size={48} color={Colors.primary.main} />
          </View>
          <View style={styles.statusIndicator}>
            <Ionicons name="checkmark-circle" size={20} color={Colors.success.main} />
          </View>
        </View>
        <Text style={styles.userName}>{profile.firstName} {profile.lastName}</Text>
        <Text style={styles.userEmail}>{profile.email}</Text>
        <Text style={styles.joinDate}>Member since {profile.joinDate}</Text>
      </View>
    );
  };

  const renderInfoCard = (title, icon, children) => {
    return (
      <View style={styles.infoCard}>
        <View style={styles.cardHeader}>
          <View style={styles.cardIcon}>
            <Ionicons name={icon} size={24} color={Colors.primary.main} />
          </View>
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
        <View style={styles.cardContent}>
          {children}
        </View>
      </View>
    );
  };

  const renderEditableField = (label, value, field, placeholder = '') => {
    return (
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>{label}</Text>
        {isEditing ? (
          <TextInput
            style={styles.textInput}
            value={value}
            placeholder={placeholder}
            onChangeText={(text) => setProfile(prev => ({ ...prev, [field]: text }))}
          />
        ) : (
          <Text style={styles.fieldValue}>{value}</Text>
        )}
      </View>
    );
  };

  const renderToggleField = (label, value, field) => {
    return (
      <View style={styles.toggleContainer}>
        <Text style={styles.fieldLabel}>{label}</Text>
        <Switch
          value={value}
          onValueChange={(newValue) => setProfile(prev => ({ ...prev, [field]: newValue }))}
          trackColor={{ 
            false: Colors.neutral.gray300, 
            true: Colors.primary.light 
          }}
          thumbColor={value ? Colors.primary.main : Colors.neutral.gray400}
        />
      </View>
    );
  };

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      {/* Profile Header */}
      {renderProfileHeader()}

      {/* Personal Information */}
      {renderInfoCard('Personal Information', 'person-outline', (
        <>
          {renderEditableField('First Name', profile.firstName, 'firstName', 'Enter first name')}
          {renderEditableField('Last Name', profile.lastName, 'lastName', 'Enter last name')}
          {renderEditableField('Email', profile.email, 'email', 'Enter email address')}
          {renderEditableField('Phone', profile.phone, 'phone', 'Enter phone number')}
          {renderEditableField('Location', profile.location, 'location', 'Enter location')}
        </>
      ))}

      {/* Bio Section */}
      {renderInfoCard('About Me', 'document-text-outline', (
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Bio</Text>
          {isEditing ? (
            <TextInput
              style={[styles.textInput, styles.bioInput]}
              value={profile.bio}
              placeholder="Tell us about yourself"
              multiline={true}
              numberOfLines={4}
              onChangeText={(text) => setProfile(prev => ({ ...prev, bio: text }))}
            />
          ) : (
            <Text style={styles.fieldValue}>{profile.bio}</Text>
          )}
        </View>
      ))}

      {/* Preferences */}
      {renderInfoCard('Preferences', 'settings-outline', (
        <>
          {renderToggleField('Push Notifications', profile.notifications, 'notifications')}
          {renderToggleField('Dark Mode', profile.darkMode, 'darkMode')}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Language</Text>
            <Text style={styles.fieldValue}>{profile.language}</Text>
          </View>
        </>
      ))}

      {/* Account Statistics */}
      {renderInfoCard('Account Statistics', 'stats-chart-outline', (
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>42</Text>
            <Text style={styles.statLabel}>Components Used</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>128</Text>
            <Text style={styles.statLabel}>Screens Viewed</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>15</Text>
            <Text style={styles.statLabel}>Days Active</Text>
          </View>
        </View>
      ))}

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <ButtonComponent 
          onPress={() => setIsEditing(!isEditing)} 
          title={isEditing ? "Save Changes" : "Edit Profile"}
          variant={isEditing ? "primary" : "outline"}
          fullWidth={true}
        />
        <ButtonComponent 
          onPress={() => navigation.goBack()} 
          title="Back to Settings"
          variant="secondary"
          fullWidth={true}
        />
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.default,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  header: {
    alignItems: 'center',
    padding: 32,
    backgroundColor: Colors.background.paper,
    marginBottom: 16,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.primary.light,
    alignItems: 'center',
    justifyContent: 'center',
    ...Shadows.medium,
  },
  statusIndicator: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: Colors.background.paper,
    borderRadius: 12,
    padding: 2,
  },
  userName: {
    fontSize: Typography.fontSizes['2xl'],
    fontWeight: Typography.fontWeights.bold,
    color: Colors.text.primary,
    textAlign: 'center',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: Typography.fontSizes.base,
    color: Colors.text.secondary,
    marginBottom: 4,
  },
  joinDate: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.text.secondary,
  },
  infoCard: {
    backgroundColor: Colors.background.paper,
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 16,
    ...Shadows.medium,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary.light,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  cardTitle: {
    fontSize: Typography.fontSizes.lg,
    fontWeight: Typography.fontWeights.semibold,
    color: Colors.text.primary,
  },
  cardContent: {
    paddingLeft: 4,
  },
  fieldContainer: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: Typography.fontSizes.sm,
    fontWeight: Typography.fontWeights.medium,
    color: Colors.text.primary,
    marginBottom: 6,
  },
  fieldValue: {
    fontSize: Typography.fontSizes.base,
    color: Colors.text.secondary,
    lineHeight: 22,
  },
  textInput: {
    backgroundColor: Colors.background.default,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.neutral.gray300,
    padding: 12,
    fontSize: Typography.fontSizes.base,
    color: Colors.text.primary,
  },
  bioInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: Typography.fontSizes['2xl'],
    fontWeight: Typography.fontWeights.bold,
    color: Colors.primary.main,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: Typography.fontSizes.xs,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
    gap: 12,
  },
});