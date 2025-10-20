import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, BorderRadius } from '../GlobalStyles';

/**
 * Reusable Icon Badge Component
 * A circular icon container with customizable background
 * Used throughout the app for consistent icon presentation
 * 
 * @param {Object} props
 * @param {string} props.icon - Ionicons icon name
 * @param {number} props.size - Icon size (default: 24)
 * @param {string} props.iconColor - Icon color (default: primary.main)
 * @param {string} props.backgroundColor - Background color (default: primary.light)
 * @param {Object} props.style - Additional custom styles
 */
export default function IconBadge(props) {
  const icon = props.icon || props.name; // Support both 'icon' and 'name' props
  const size = props.size || 24;
  const iconColor = props.iconColor || Colors.primary.main;
  const backgroundColor = props.backgroundColor || Colors.primary.light;
  const style = props.style;
  
  const badgeSize = size + 16; // Add padding around icon
  
  // Guard against missing icon prop
  if (!icon) {
    console.warn('IconBadge: Missing icon prop');
    return null;
  }
  
  return (
    <View style={[
      styles.badge, 
      { 
        width: badgeSize, 
        height: badgeSize, 
        borderRadius: badgeSize / 2,
        backgroundColor 
      },
      style
    ]}>
      <Ionicons name={icon} size={size} color={iconColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
