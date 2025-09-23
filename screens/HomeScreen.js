import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// Import custom components to showcase different React Native concepts
import FirstComponent from '../components/FirstComponent';
import PropsComponent from '../components/PropsComponent';
import InputComponent from '../components/InputComponent';
import AssetComponent from '../components/AssetComponent';
import ButtonComponent from '../components/ButtonComponent';
import { Colors, Typography, Shadows } from '../GlobalStyles';

// HomeScreen serves as a professional showcase for various React Native components
// Demonstrates component composition, props, state management, and professional UI design
const HomeScreen = () => {
  
  // Component showcase data for organized display
  const componentShowcase = [
    {
      id: 1,
      title: "Coffee Shop Finder",
      description: "Discover the best local coffee shops and cafes",
      icon: "cafe-outline",
      component: <FirstComponent />,
      category: "Discovery"
    },
    {
      id: 2,
      title: "Barista Profiles",
      description: "Meet skilled baristas and their specialties",
      icon: "person-outline",
      component: <PropsComponent name="Alexander the Barista" />,
      category: "Community"
    },
    {
      id: 3,
      title: "Coffee Search",
      description: "Search for specific coffee types and origins",
      icon: "search-outline",
      component: <InputComponent />,
      category: "Search"
    },
    {
      id: 4,
      title: "Coffee Bean Gallery",
      description: "Visual guide to different coffee bean varieties",
      icon: "leaf-outline",
      component: <AssetComponent source={require('../assets/favicon.png')} />,
      category: "Education"
    },
    {
      id: 5,
      title: "Coffee Actions",
      description: "Quick actions for coffee lovers - order, review, save favorites",
      icon: "heart-outline",
      component: (
        <View style={styles.buttonShowcase}>
          <ButtonComponent title="Order Now" variant="primary" size="small" />
          <ButtonComponent title="Add Review" variant="secondary" size="small" />
          <ButtonComponent title="Save Shop" variant="outline" size="small" />
          <ButtonComponent title="Report Issue" variant="danger" size="small" />
        </View>
      ),
      category: "Actions"
    }
  ];

  // Render component showcase card
  const renderComponentCard = (item) => {
    return (
      <View key={item.id} style={styles.componentCard}>
        <View style={styles.cardHeader}>
          <View style={styles.iconContainer}>
            <Ionicons 
              name={item.icon} 
              size={24} 
              color={Colors.primary.main} 
            />
          </View>
          <View style={styles.headerContent}>
            <Text style={styles.componentTitle}>{item.title}</Text>
            <Text style={styles.categoryBadge}>{item.category}</Text>
          </View>
        </View>
        <Text style={styles.componentDescription}>{item.description}</Text>
        <View style={styles.componentPreview}>
          {item.component}
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
            name="cafe" 
            size={32} 
            color={Colors.primary.main} 
          />
        </View>
        <Text style={styles.title}>Coffee Connect</Text>
        <Text style={styles.subtitle}>
          Your ultimate companion for finding amazing coffee experiences
        </Text>
      </View>
      
      {/* Stats section */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{componentShowcase.length}</Text>
          <Text style={styles.statLabel}>Features</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>500+</Text>
          <Text style={styles.statLabel}>Coffee Shops</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>4.8★</Text>
          <Text style={styles.statLabel}>Avg Rating</Text>
        </View>
      </View>
      
      {/* Component showcase grid */}
      <View style={styles.showcaseContainer}>
        <Text style={styles.sectionTitle}>App Features</Text>
        {componentShowcase.map(renderComponentCard)}
      </View>
      
      {/* Professional footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Find Your Perfect Cup ☕
        </Text>
        <Text style={styles.footerSubtext}>
          Connecting coffee lovers worldwide
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
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  statCard: {
    alignItems: 'center',
    backgroundColor: Colors.background.paper,
    borderRadius: 12,
    padding: 16,
    minWidth: 80,
    ...Shadows.small,
  },
  statNumber: {
    fontSize: Typography.fontSizes['2xl'],
    fontWeight: Typography.fontWeights.bold,
    color: Colors.primary.main,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: Typography.fontSizes.xs,
    color: Colors.text.secondary,
    fontWeight: Typography.fontWeights.medium,
  },
  showcaseContainer: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: Typography.fontSizes.xl,
    fontWeight: Typography.fontWeights.semibold,
    color: Colors.text.primary,
    marginBottom: 16,
    textAlign: 'center',
  },
  componentCard: {
    backgroundColor: Colors.background.paper,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    ...Shadows.medium,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.primary.light,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  headerContent: {
    flex: 1,
  },
  componentTitle: {
    fontSize: Typography.fontSizes.lg,
    fontWeight: Typography.fontWeights.semibold,
    color: Colors.text.primary,
    marginBottom: 4,
  },
  categoryBadge: {
    fontSize: Typography.fontSizes.xs,
    fontWeight: Typography.fontWeights.medium,
    color: Colors.primary.main,
    backgroundColor: Colors.primary.light,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  componentDescription: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.text.secondary,
    lineHeight: 20,
    marginBottom: 16,
  },
  componentPreview: {
    backgroundColor: Colors.background.default,
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.neutral.gray200,
  },
  buttonShowcase: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: 8,
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

export default HomeScreen;
