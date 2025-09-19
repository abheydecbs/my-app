import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Typography, Shadows } from '../GlobalStyles';

const SettingsScreen = ({ navigation }) => {
  // State for various settings
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSync, setAutoSync] = useState(true);
  const [location, setLocation] = useState(false);

  // Settings data structure
  const settingsData = [
    {
      id: 1,
      title: 'Account',
      items: [
        {
          id: 'profile',
          title: 'User Profile',
          subtitle: 'Update your personal information',
          icon: 'person-outline',
          type: 'navigation',
          onPress: () => navigation.navigate('User Profile'),
        },
        {
          id: 'security',
          title: 'Security & Privacy',
          subtitle: 'Manage your account security',
          icon: 'shield-outline',
          type: 'navigation',
        },
      ],
    },
    {
      id: 2,
      title: 'Preferences',
      items: [
        {
          id: 'notifications',
          title: 'Push Notifications',
          subtitle: 'Get notified about updates',
          icon: 'notifications-outline',
          type: 'toggle',
          value: notifications,
          onToggle: setNotifications,
        },
        {
          id: 'darkmode',
          title: 'Dark Mode',
          subtitle: 'Switch to dark theme',
          icon: 'moon-outline',
          type: 'toggle',
          value: darkMode,
          onToggle: setDarkMode,
        },
        {
          id: 'autosync',
          title: 'Auto Sync',
          subtitle: 'Automatically sync your data',
          icon: 'sync-outline',
          type: 'toggle',
          value: autoSync,
          onToggle: setAutoSync,
        },
        {
          id: 'location',
          title: 'Location Services',
          subtitle: 'Allow location access',
          icon: 'location-outline',
          type: 'toggle',
          value: location,
          onToggle: setLocation,
        },
      ],
    },
    {
      id: 3,
      title: 'Support',
      items: [
        {
          id: 'help',
          title: 'Help Center',
          subtitle: 'Get help and support',
          icon: 'help-circle-outline',
          type: 'navigation',
        },
        {
          id: 'feedback',
          title: 'Send Feedback',
          subtitle: 'Share your thoughts with us',
          icon: 'chatbubble-outline',
          type: 'navigation',
        },
        {
          id: 'about',
          title: 'About',
          subtitle: 'App version and info',
          icon: 'information-circle-outline',
          type: 'navigation',
          onPress: () => navigation.navigate('About'),
        },
      ],
    },
  ];

  // Render setting item
  const renderSettingItem = (item) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.settingItem}
        activeOpacity={item.type === 'toggle' ? 1 : 0.7}
        disabled={item.type === 'toggle'}
        onPress={item.onPress || null}
      >
        <View style={styles.settingIcon}>
          <Ionicons 
            name={item.icon} 
            size={24} 
            color={Colors.primary.main} 
          />
        </View>
        <View style={styles.settingContent}>
          <Text style={styles.settingTitle}>{item.title}</Text>
          <Text style={styles.settingSubtitle}>{item.subtitle}</Text>
        </View>
        <View style={styles.settingAction}>
          {item.type === 'toggle' ? (
            <Switch
              value={item.value}
              onValueChange={item.onToggle}
              trackColor={{ 
                false: Colors.neutral.gray300, 
                true: Colors.primary.light 
              }}
              thumbColor={item.value ? Colors.primary.main : Colors.neutral.gray400}
            />
          ) : (
            <Ionicons 
              name="chevron-forward" 
              size={20} 
              color={Colors.neutral.gray400} 
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  // Render settings section
  const renderSettingsSection = (section) => {
    return (
      <View key={section.id} style={styles.section}>
        <Text style={styles.sectionTitle}>{section.title}</Text>
        <View style={styles.sectionContent}>
          {section.items.map(renderSettingItem)}
        </View>
      </View>
    );
  };

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      {/* Professional header section */}
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Ionicons 
            name="settings" 
            size={32} 
            color={Colors.primary.main} 
          />
        </View>
        <Text style={styles.title}>App Settings</Text>
        <Text style={styles.subtitle}>
          Customize your app experience and preferences
        </Text>
      </View>

      {/* Settings sections */}
      <View style={styles.settingsContainer}>
        {settingsData.map(renderSettingsSection)}
      </View>

      {/* Professional footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Version 1.0.0</Text>
        <Text style={styles.footerSubtext}>
          Built with React Native & Expo
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.default,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  header: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: Colors.background.paper,
    marginBottom: 16,
  },
  headerIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.primary.light,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: Typography.fontSizes['3xl'],
    fontWeight: Typography.fontWeights.bold,
    color: Colors.text.primary,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: Typography.fontSizes.base,
    color: Colors.text.secondary,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  settingsContainer: {
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: Typography.fontSizes.lg,
    fontWeight: Typography.fontWeights.semibold,
    color: Colors.text.primary,
    marginBottom: 12,
    paddingHorizontal: 4,
  },
  sectionContent: {
    backgroundColor: Colors.background.paper,
    borderRadius: 12,
    ...Shadows.small,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral.gray200,
  },
  settingIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary.light,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  settingContent: {
    flex: 1,
  },
  settingTitle: {
    fontSize: Typography.fontSizes.base,
    fontWeight: Typography.fontWeights.semibold,
    color: Colors.text.primary,
    marginBottom: 4,
  },
  settingSubtitle: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.text.secondary,
    lineHeight: 18,
  },
  settingAction: {
    marginLeft: 16,
  },
  footer: {
    padding: 24,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: Colors.neutral.gray200,
    marginTop: 16,
  },
  footerText: {
    fontSize: Typography.fontSizes.sm,
    fontWeight: Typography.fontWeights.medium,
    color: Colors.text.primary,
    marginBottom: 4,
  },
  footerSubtext: {
    fontSize: Typography.fontSizes.xs,
    color: Colors.text.secondary,
  },
});

export default SettingsScreen;
