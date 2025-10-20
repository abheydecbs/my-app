import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import ButtonComponent from '../../components/ButtonComponent';
import { Colors, Typography, Spacing, BorderRadius, CommonStyles } from '../../GlobalStyles';
import { Card, IconBadge, SectionHeader } from '../../components';

export default function AboutScreen({ navigation }) {
  const appInfo = {
    name: '☕ Coffee Connect',
    version: '1.0.0',
    buildNumber: '100',
    developer: 'Alexander',
    description: 'A comprehensive coffee discovery app helping you find the perfect coffee shops, explore coffee origins, and connect with fellow coffee enthusiasts.',
    features: [
      '☕ Local Coffee Shop Discovery',
      '🌱 Coffee Origin Explorer', 
      '⭐ Coffee Reviews & Ratings',
      '🏪 Professional Coffee Shop Listings',
      '📱 Modern Coffee-Themed UI',
      '⚙️ Personalized Coffee Preferences',
      '📍 Location-Based Coffee Finder'
    ],
    technologies: [
      'React Native',
      'Expo',
      'React Navigation',
      'JavaScript ES6+',
      'Coffee APIs ☕'
    ]
  };

  const renderInfoCard = (title, content, icon) => {
    return (
      <Card style={styles.infoCard}>
        <SectionHeader title={title} icon={icon} />
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
      </Card>
    );
  };

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      {/* App Header */}
      <Card style={styles.header}>
        <IconBadge icon="cafe" size={80} />
        <Text style={styles.appName}>{appInfo.name}</Text>
        <Text style={styles.version}>Version {appInfo.version} ({appInfo.buildNumber})</Text>
        <Text style={styles.developer}>Developed by {appInfo.developer}</Text>
      </Card>

      {/* App Description */}
      {renderInfoCard('☕ About This App', appInfo.description, 'information-circle-outline')}

      {/* Features */}
      {renderInfoCard('✨ Features', appInfo.features, 'star-outline')}

      {/* Technologies */}
      {renderInfoCard('🛠 Built With', appInfo.technologies, 'code-slash-outline')}

      {/* Additional Info */}
      <Card style={styles.infoCard}>
        <SectionHeader title="📅 Release Information" icon="calendar-outline" />
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
      </Card>

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
  container: CommonStyles.container,
  scrollContent: CommonStyles.scrollContent,
  header: {
    alignItems: 'center',
    padding: Spacing.xl,
    marginBottom: Spacing.md,
  },
  appName: {
    fontSize: Typography.fontSizes['2xl'],
    fontWeight: Typography.fontWeights.bold,
    color: Colors.text.primary,
    textAlign: 'center',
    marginBottom: Spacing.xs,
  },
  version: {
    fontSize: Typography.fontSizes.lg,
    fontWeight: Typography.fontWeights.medium,
    color: Colors.primary.main,
    marginBottom: Spacing.xs,
  },
  developer: {
    fontSize: Typography.fontSizes.base,
    color: Colors.text.secondary,
  },
  infoCard: {
    marginHorizontal: Spacing.lg,
    padding: Spacing.lg,
  },
  cardContent: {
    paddingLeft: Spacing.xs,
  },
  cardText: {
    fontSize: Typography.fontSizes.base,
    color: Colors.text.secondary,
    lineHeight: 24,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  },
  listText: {
    fontSize: Typography.fontSizes.base,
    color: Colors.text.secondary,
    marginLeft: Spacing.sm + 4,
    flex: 1,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.xs,
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
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
  },
});