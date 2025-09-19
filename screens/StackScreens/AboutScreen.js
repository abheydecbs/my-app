import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import ButtonComponent from '../../components/ButtonComponent';
import { Colors, Typography, Shadows } from '../../GlobalStyles';

export default function AboutScreen({ navigation }) {
  const appInfo = {
    name: 'React Native Learning App',
    version: '1.0.0',
    buildNumber: '100',
    developer: 'Alexander',
    description: 'A comprehensive React Native learning application showcasing navigation, data handling, and professional UI components.',
    features: [
      'Professional Navigation System',
      'Component Showcase',
      'FlatList Demonstrations',
      'Array Mapping Examples',
      'API Data Fetching',
      'User Profile Management',
      'Settings & Preferences'
    ],
    technologies: [
      'React Native',
      'Expo',
      'React Navigation',
      'JavaScript ES6+',
      'RESTful APIs'
    ]
  };

  const renderInfoCard = (title, content, icon) => {
    return (
      <View style={styles.infoCard}>
        <View style={styles.cardHeader}>
          <View style={styles.cardIcon}>
            <Ionicons name={icon} size={24} color={Colors.primary.main} />
          </View>
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
        <View style={styles.cardContent}>
          {Array.isArray(content) ? (
            content.map((item, index) => (
              <View key={index} style={styles.listItem}>
                <Ionicons name="checkmark-circle" size={16} color={Colors.success.main} />
                <Text style={styles.listText}>{item}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.cardText}>{content}</Text>
          )}
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
      {/* App Header */}
      <View style={styles.header}>
        <View style={styles.appIcon}>
          <Ionicons name="phone-portrait" size={48} color={Colors.primary.main} />
        </View>
        <Text style={styles.appName}>{appInfo.name}</Text>
        <Text style={styles.version}>Version {appInfo.version} ({appInfo.buildNumber})</Text>
        <Text style={styles.developer}>Developed by {appInfo.developer}</Text>
      </View>

      {/* App Description */}
      {renderInfoCard('About This App', appInfo.description, 'information-circle-outline')}

      {/* Features */}
      {renderInfoCard('Features', appInfo.features, 'star-outline')}

      {/* Technologies */}
      {renderInfoCard('Built With', appInfo.technologies, 'code-slash-outline')}

      {/* Additional Info */}
      <View style={styles.infoCard}>
        <View style={styles.cardHeader}>
          <View style={styles.cardIcon}>
            <Ionicons name="calendar-outline" size={24} color={Colors.primary.main} />
          </View>
          <Text style={styles.cardTitle}>Release Information</Text>
        </View>
        <View style={styles.cardContent}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Release Date:</Text>
            <Text style={styles.infoValue}>September 2025</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Platform:</Text>
            <Text style={styles.infoValue}>iOS & Android</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Framework:</Text>
            <Text style={styles.infoValue}>React Native with Expo</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>License:</Text>
            <Text style={styles.infoValue}>Educational Use</Text>
          </View>
        </View>
      </View>

      {/* Back Button */}
      <View style={styles.buttonContainer}>
        <ButtonComponent 
          onPress={() => navigation.goBack()} 
          title="Back to Settings"
          variant="primary"
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
  appIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primary.light,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    ...Shadows.medium,
  },
  appName: {
    fontSize: Typography.fontSizes['2xl'],
    fontWeight: Typography.fontWeights.bold,
    color: Colors.text.primary,
    textAlign: 'center',
    marginBottom: 8,
  },
  version: {
    fontSize: Typography.fontSizes.lg,
    fontWeight: Typography.fontWeights.medium,
    color: Colors.primary.main,
    marginBottom: 4,
  },
  developer: {
    fontSize: Typography.fontSizes.base,
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
  cardText: {
    fontSize: Typography.fontSizes.base,
    color: Colors.text.secondary,
    lineHeight: 24,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  listText: {
    fontSize: Typography.fontSizes.base,
    color: Colors.text.secondary,
    marginLeft: 12,
    flex: 1,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral.gray200,
  },
  infoLabel: {
    fontSize: Typography.fontSizes.base,
    fontWeight: Typography.fontWeights.medium,
    color: Colors.text.primary,
  },
  infoValue: {
    fontSize: Typography.fontSizes.base,
    color: Colors.text.secondary,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },
});