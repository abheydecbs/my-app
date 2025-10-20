import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import IconBadge from './IconBadge';
import { Colors, Typography, Spacing, CommonStyles } from '../GlobalStyles';

/**
 * Reusable Section Header Component
 * Consistent header styling with optional icon
 * 
 * @param {Object} props
 * @param {string} props.title - Section title text
 * @param {string} props.subtitle - Optional subtitle/description
 * @param {string} props.icon - Optional Ionicons icon name
 * @param {Object} props.style - Additional custom styles
 */
export default function SectionHeader({ title, subtitle, icon, style }) {
  return (
    <View style={[styles.container, style]}>
      {icon && (
        <View style={styles.headerWithIcon}>
          <IconBadge icon={icon} size={24} />
          <Text style={[styles.title, styles.titleWithIcon]}>{title}</Text>
        </View>
      )}
      {!icon && <Text style={styles.title}>{title}</Text>}
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.md,
  },
  headerWithIcon: {
    ...CommonStyles.row,
    marginBottom: Spacing.xs,
  },
  title: {
    ...CommonStyles.sectionTitle,
  },
  titleWithIcon: {
    marginLeft: Spacing.xs,
  },
  subtitle: {
    ...CommonStyles.sectionDescription,
  },
});
