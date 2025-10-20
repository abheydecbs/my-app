import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import ButtonComponent from '../../components/ButtonComponent';
import { Colors, Typography, Spacing, BorderRadius, CommonStyles } from '../../GlobalStyles';
import { Card, IconBadge, SectionHeader } from '../../components';

export default function UserProfileScreen({ navigation }) {
  // User profile state
  const [profile, setProfile] = useState({
    firstName: 'Alexander Bak',
    lastName: 'Heyde',
    email: 'alhe20ad@student.cbs.dk',
    phone: '+45 41 42 36 52',
    location: 'Copenhagen, Denmark',
    bio: 'Coffee enthusiast and React Native developer passionate about creating beautiful coffee discovery apps.',
    joinDate: 'September 2025',
    notifications: true,
    darkMode: false,
    language: 'English'
  });

  const [isEditing, setIsEditing] = useState(false);

  const renderProfileHeader = () => {
    return (
      <Card style={styles.header}>
        <View style={styles.profileImageContainer}>
          <IconBadge icon="person" size={100} />
          <View style={styles.statusIndicator}>
            <Ionicons name="checkmark-circle" size={20} color={Colors.success.main} />
          </View>
        </View>
        <Text style={styles.userName}>☕ {profile.firstName} {profile.lastName}</Text>
        <Text style={styles.userEmail}>{profile.email}</Text>
        <Text style={styles.joinDate}>☕ Coffee lover since {profile.joinDate}</Text>
      </Card>
    );
  };

  const renderInfoCard = (title, icon, children) => {
    return (
      <Card style={styles.infoCard}>
        <SectionHeader title={title} icon={icon} />
        <View style={styles.cardContent}>
          {children}
        </View>
      </Card>
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
  container: CommonStyles.container,
  scrollContent: CommonStyles.scrollContent,
  header: {
    alignItems: 'center',
    padding: Spacing.xl,
    marginBottom: Spacing.md,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: Spacing.md,
  },
  statusIndicator: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: Colors.background.paper,
    borderRadius: BorderRadius.md,
    padding: 2,
  },
  userName: {
    fontSize: Typography.fontSizes['2xl'],
    fontWeight: Typography.fontWeights.bold,
    color: Colors.text.primary,
    textAlign: 'center',
    marginBottom: Spacing.xs,
  },
  userEmail: {
    fontSize: Typography.fontSizes.base,
    color: Colors.text.secondary,
    marginBottom: Spacing.xs,
  },
  joinDate: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.text.secondary,
  },
  infoCard: {
    marginHorizontal: Spacing.lg,
    padding: Spacing.lg,
  },
  cardContent: {
    paddingLeft: Spacing.xs,
  },
  fieldContainer: {
    marginBottom: Spacing.md,
  },
  fieldLabel: CommonStyles.inputLabel,
  fieldValue: {
    fontSize: Typography.fontSizes.base,
    color: Colors.text.secondary,
    lineHeight: 22,
  },
  textInput: {
    ...CommonStyles.input,
    borderColor: Colors.neutral.gray300,
  },
  bioInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  toggleContainer: {
    ...CommonStyles.row,
    ...CommonStyles.spaceBetween,
    marginBottom: Spacing.md,
  },
  buttonContainer: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    gap: Spacing.sm + 4,
  },
});