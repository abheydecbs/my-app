import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IconBadge from './IconBadge';
import { Colors, Typography, Spacing, BorderRadius, CommonStyles } from '../GlobalStyles';

/**
 * Reusable List Item Component
 * Consistent list item styling with icon and content
 * 
 * @param {Object} props
 * @param {string} props.icon - Ionicons icon name
 * @param {string} props.title - Main title text
 * @param {string} props.subtitle - Optional subtitle text
 * @param {React.ReactNode} props.rightContent - Optional content on the right side
 * @param {string} props.backgroundColor - Background color (default: paper white)
 * @param {Object} props.style - Additional custom styles
 */
export default function ListItem({ 
  icon, 
  title, 
  subtitle, 
  rightContent,
  backgroundColor = Colors.background.paper,
  style 
}) {
  return (
    <View style={[styles.container, { backgroundColor }, style]}>
      {icon && <IconBadge icon={icon} size={20} style={styles.icon} />}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      {rightContent && <View style={styles.rightContent}>{rightContent}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...CommonStyles.listItem,
  },
  icon: {
    marginRight: Spacing.md,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: Typography.fontSizes.base,
    fontWeight: Typography.fontWeights.semibold,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  subtitle: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.text.secondary,
  },
  rightContent: {
    marginLeft: Spacing.md,
  },
});
