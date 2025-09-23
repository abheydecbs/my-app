import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Colors, Typography, Shadows } from '../GlobalStyles';

// HomeScreen serves as a welcoming introduction to the Coffee Connect app
// Clean, simple design that introduces users to the app's purpose
const HomeScreen = () => {
  const navigation = useNavigation();

  // Navigation handlers for quick action cards
  const handleQuickActionPress = (actionId) => {
    switch (actionId) {
      case 1:
        navigation.navigate('Coffee Shops');
        break;
      case 2:
        navigation.navigate('Origin');
        break;
      case 3:
        navigation.navigate('Reviews');
        break;
      default:
        break;
    }
  };

  // Quick navigation suggestions for users with enhanced styling
  const quickActions = [
    {
      id: 1,
      title: "Find Coffee Shops",
      description: "Discover local coffee shops near you",
      icon: "cafe",
      gradient: ['#6D4C41', '#3E2723'], // Coffee browns
      shadowColor: '#6D4C41',
      emoji: "☕"
    },
    {
      id: 2,
      title: "Explore Origins",
      description: "Learn about coffee growing regions",
      icon: "leaf",
      gradient: ['#6D4C41', '#5D4037'], // Coffee browns
      shadowColor: '#6D4C41',
      emoji: "🌱"
    },
    {
      id: 3,
      title: "Read Reviews",
      description: "See what other coffee lovers say",
      icon: "star",
      gradient: ['#FF8F00', '#E65100'], // Golden coffee
      shadowColor: '#FF8F00',
      emoji: "⭐"
    }
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3E2723" />
      <ScrollView 
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Enhanced header with gradient background */}
        <LinearGradient
          colors={['#6D4C41', '#3E2723', '#2E2922']} // Coffee gradient
          style={styles.headerGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.headerContent}>
            <View style={styles.welcomeIconContainer}>
              <LinearGradient
                colors={['#FFFFFF', '#F5F5F5']}
                style={styles.welcomeIcon}
              >
                <Text style={styles.coffeeEmoji}>☕</Text>
              </LinearGradient>
            </View>
            <Text style={styles.welcomeTitle}>Welcome to Coffee Connect</Text>
            <Text style={styles.welcomeSubtitle}>
              Your ultimate companion for discovering amazing coffee experiences
            </Text>
            
            {/* Floating decorative elements */}
            <View style={styles.decorativeElement1}>
              <Ionicons name="cafe-outline" size={20} color="rgba(255,255,255,0.3)" />
            </View>
            <View style={styles.decorativeElement2}>
              <Ionicons name="leaf-outline" size={16} color="rgba(255,255,255,0.2)" />
            </View>
          </View>
        </LinearGradient>

        {/* App overview section with enhanced styling */}
        <View style={styles.overviewSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>What You Can Do</Text>
            <View style={styles.titleUnderline} />
          </View>
          <Text style={styles.sectionDescription}>
            Explore the world of coffee through our curated features designed for coffee enthusiasts like you.
          </Text>
        </View>
        
        {/* Enhanced quick actions grid with gradients */}
        <View style={styles.quickActionsContainer}>
          {quickActions.map((action, index) => (
            <TouchableOpacity 
              key={action.id} 
              style={[styles.actionCardWrapper, { 
                shadowColor: action.shadowColor,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                elevation: 8,
              }]}
              onPress={() => handleQuickActionPress(action.id)}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={action.gradient}
                style={styles.actionCard}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <View style={styles.actionIconContainer}>
                  <Text style={styles.actionEmoji}>{action.emoji}</Text>
                  <Ionicons 
                    name={action.icon} 
                    size={28} 
                    color="#FFFFFF" 
                    style={styles.actionIcon}
                  />
                </View>
                <Text style={styles.actionTitle}>{action.title}</Text>
                <Text style={styles.actionDescription}>{action.description}</Text>
                
                {/* Subtle pattern overlay */}
                <View style={styles.cardPattern} />
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>

        {/* Getting started section */}
        <View style={styles.gettingStartedSection}>
          <Text style={styles.gettingStartedTitle}>Ready to Get Started?</Text>
          <Text style={styles.gettingStartedText}>
            Use the navigation tabs below to explore coffee shops, discover new origins, read reviews, and customize your experience.
          </Text>
        </View>

        {/* Enhanced footer with gradient */}
        <LinearGradient
          colors={['#6D4C41', '#5D4037']} // Coffee gradient
          style={styles.footerGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text style={styles.footerText}>
            Find Your Perfect Cup ☕
          </Text>
          <Text style={styles.footerSubtext}>
            Happy coffee exploring!
          </Text>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.default,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  
  // Enhanced header with gradient
  headerGradient: {
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  headerContent: {
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
  },
  welcomeIconContainer: {
    marginBottom: 20,
  },
  welcomeIcon: {
    width: 90,
    height: 90,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    ...Shadows.large,
  },
  coffeeEmoji: {
    fontSize: 48,
  },
  welcomeTitle: {
    fontSize: Typography.fontSizes['3xl'],
    fontWeight: Typography.fontWeights.bold,
    color: '#FFFFFF',
    marginBottom: 12,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  welcomeSubtitle: {
    fontSize: Typography.fontSizes.base,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  
  // Floating decorative elements
  decorativeElement1: {
    position: 'absolute',
    top: 20,
    right: 30,
    transform: [{ rotate: '15deg' }],
  },
  decorativeElement2: {
    position: 'absolute',
    bottom: 20,
    left: 30,
    transform: [{ rotate: '-20deg' }],
  },
  
  // Enhanced overview section
  overviewSection: {
    paddingHorizontal: 20,
    paddingVertical: 32,
    alignItems: 'center',
  },
  sectionHeader: {
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: Typography.fontSizes.xl,
    fontWeight: Typography.fontWeights.bold,
    color: Colors.text.primary,
    textAlign: 'center',
    marginBottom: 8,
  },
  titleUnderline: {
    width: 40,
    height: 3,
    backgroundColor: Colors.primary.main,
    borderRadius: 2,
  },
  sectionDescription: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.text.secondary,
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  
  // Enhanced quick actions
  quickActionsContainer: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  actionCardWrapper: {
    marginBottom: 20,
    borderRadius: 16,
  },
  actionCard: {
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  actionIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  actionEmoji: {
    fontSize: 32,
    marginRight: 12,
  },
  actionIcon: {
    opacity: 0.9,
  },
  actionTitle: {
    fontSize: Typography.fontSizes.lg,
    fontWeight: Typography.fontWeights.bold,
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  actionDescription: {
    fontSize: Typography.fontSizes.sm,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    lineHeight: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  cardPattern: {
    position: 'absolute',
    top: 0,
    right: -20,
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 50,
    transform: [{ rotate: '45deg' }],
  },
  
  // Getting started section
  gettingStartedSection: {
    paddingHorizontal: 20,
    marginBottom: 32,
    alignItems: 'center',
    backgroundColor: Colors.background.paper,
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 24,
    ...Shadows.small,
  },
  gettingStartedTitle: {
    fontSize: Typography.fontSizes.lg,
    fontWeight: Typography.fontWeights.bold,
    color: Colors.text.primary,
    marginBottom: 12,
    textAlign: 'center',
  },
  gettingStartedText: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.text.secondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  
  // Enhanced footer with gradient
  footerGradient: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  footerText: {
    fontSize: Typography.fontSizes.lg,
    fontWeight: Typography.fontWeights.bold,
    color: '#FFFFFF',
    marginBottom: 6,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  footerSubtext: {
    fontSize: Typography.fontSizes.sm,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
});

export default HomeScreen;
