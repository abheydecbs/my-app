import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Typography, Spacing, BorderRadius, CommonStyles } from '../GlobalStyles';
import { Card, SectionHeader, IconBadge } from '../components';

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
      title: '👤 Account',
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
      title: '☕ Preferences',
      items: [
        {
          id: 'notifications',
          title: 'Coffee Notifications',
          subtitle: 'Get notified about new coffee shops & deals',
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
          title: 'Auto Sync Coffee Data',
          subtitle: 'Automatically sync your coffee preferences',
          icon: 'sync-outline',
          type: 'toggle',
          value: autoSync,
          onToggle: setAutoSync,
        },
        {
          id: 'location',
          title: 'Location for Coffee Shops',
          subtitle: 'Find nearby coffee shops',
          icon: 'location-outline',
          type: 'toggle',
          value: location,
          onToggle: setLocation,
        },
      ],
    },
    {
      id: 3,
      title: '🆘 Support',
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
        <IconBadge icon={item.icon} size={40} />
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
        <SectionHeader title={section.title} />
        <Card style={styles.sectionContent}>
          {section.items.map(renderSettingItem)}
        </Card>
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
      <Card style={styles.header}>
        <IconBadge icon="settings" size={64} />
        <Text style={styles.title}>⚙️ App Settings</Text>
        <Text style={styles.subtitle}>
          ☕ Customize your coffee app experience and preferences
        </Text>
      </Card>

      {/* Settings sections */}
      <View style={styles.settingsContainer}>
        {settingsData.map(renderSettingsSection)}
      </View>

      {/* Professional footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>☕ Coffee Connect v1.0.0</Text>
        <Text style={styles.footerSubtext}>
          Built with React Native & Expo ☕
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: CommonStyles.container,
  scrollContent: {
    paddingBottom: Spacing.xl,
  },
  header: {
    padding: Spacing.lg,
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  title: {
    fontSize: Typography.fontSizes['3xl'],
    fontWeight: Typography.fontWeights.bold,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: Typography.fontSizes.base,
    color: Colors.text.secondary,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: Spacing.lg,
  },
  settingsContainer: {
    paddingHorizontal: Spacing.lg,
  },
  section: {
    marginBottom: Spacing.lg,
  },
  sectionContent: {
    borderWidth: 1,
    borderColor: Colors.neutral.gray200,
    overflow: 'hidden',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral.gray200,
    backgroundColor: '#FFF8E1',
  },
  settingContent: {
    flex: 1,
    marginLeft: Spacing.md,
  },
  settingTitle: {
    fontSize: Typography.fontSizes.base,
    fontWeight: Typography.fontWeights.semibold,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  settingSubtitle: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.text.secondary,
    lineHeight: 18,
  },
  settingAction: {
    marginLeft: Spacing.md,
  },
  footer: {
    padding: Spacing.lg,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: Colors.neutral.gray200,
    marginTop: Spacing.md,
  },
  footerText: {
    fontSize: Typography.fontSizes.sm,
    fontWeight: Typography.fontWeights.medium,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  footerSubtext: {
    fontSize: Typography.fontSizes.xs,
    color: Colors.text.secondary,
  },
});

export default SettingsScreen;
