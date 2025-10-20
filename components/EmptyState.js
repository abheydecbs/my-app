import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Typography, Spacing, CommonStyles } from '../GlobalStyles';

/**
 * Reusable Empty State Component
 * Shows when there's no data to display
 * 
 * @param {Object} props
 * @param {string} props.icon - Ionicons icon name (default: "albums-outline")
 * @param {string} props.title - Main message
 * @param {string} props.subtitle - Optional subtitle message
 * @param {React.ReactNode} props.action - Optional action button or component
 */
export default function EmptyState({ 
  icon = "albums-outline", 
  title = "No items found",
  subtitle,
  action
}) {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={64} color={Colors.neutral.gray400} />
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      {action && <View style={styles.action}>{action}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...CommonStyles.centerContainer,
    padding: Spacing.xl,
  },
  title: {
    fontSize: Typography.fontSizes.lg,
    fontWeight: Typography.fontWeights.semibold,
    color: Colors.text.primary,
    marginTop: Spacing.md,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.text.secondary,
    marginTop: Spacing.xs,
    textAlign: 'center',
    lineHeight: 20,
  },
  action: {
    marginTop: Spacing.lg,
  },
});
