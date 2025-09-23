import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COFFEE_REGIONS } from '../data/const';
import { Colors, Typography, Shadows } from '../GlobalStyles';

// OriginScreen demonstrates the JavaScript array.map() method with professional design
// This is the traditional way to render lists in React/React Native
// Good for smaller lists, but FlatList is better for large datasets
export default function OriginScreen() {
  
  // Professional coffee region item renderer
  const renderCoffeeRegionItem = (region, index) => {
    const qualities = [
      '☕ Fruity & Bright', '🍫 Rich & Bold', '🥜 Smooth & Balanced', 
      '🍯 Nutty & Sweet', '🌸 Floral & Complex', '🍫 Chocolatey & Deep'
    ];
    
    return (
      <View key={index} style={styles.regionCard}>
        <View style={styles.coffeeIcon}>
          <Ionicons 
            name="leaf" 
            size={20} 
            color="#6D4C41" 
          />
        </View>
        <View style={styles.regionContent}>
          <Text style={styles.regionName}>{region}</Text>
          <Text style={styles.regionDescription}>
            {qualities[index % qualities.length]} coffee beans
          </Text>
          <View style={styles.altitudeContainer}>
            <Ionicons 
              name="triangle" 
              size={12} 
              color="#8D6E63" 
            />
            <Text style={styles.altitudeText}>
              {800 + Math.floor(Math.random() * 1500)}m elevation
            </Text>
          </View>
        </View>
        <View style={styles.ratingContainer}>
          <Ionicons 
            name="star" 
            size={16} 
            color="#FF8F00" 
          />
          <Text style={styles.ratingText}>4.{Math.floor(Math.random() * 10)}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Professional header section */}
      <View style={styles.header}>
        <Text style={styles.title}>☕ Coffee Origins</Text>
        <Text style={styles.subtitle}>
          🌍 Discover the world's finest coffee regions
        </Text>
      </View>
      
      {/* Professional list container */}
      <View style={styles.listContainer}>
        <View style={styles.listHeader}>
          <Text style={styles.listTitle}>🌱 Coffee Growing Regions</Text>
          <Text style={styles.itemCount}>{COFFEE_REGIONS.length} origins</Text>
        </View>
        
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Using map() method to iterate over the COFFEE_REGIONS array */}
          {COFFEE_REGIONS.map((region, index) => renderCoffeeRegionItem(region, index))}
        </ScrollView>
      </View>
      
      {/* Professional footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          ☕ Premium coffee beans from around the world 🌍
        </Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0E8', // Warm cream background
    paddingHorizontal: 20,
  },
  header: {
    paddingVertical: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: Typography.fontSizes['2xl'],
    fontWeight: Typography.fontWeights.bold,
    color: '#3E2723', // Dark coffee brown
    marginBottom: 8,
  },
  subtitle: {
    fontSize: Typography.fontSizes.base,
    color: '#5D4037', // Medium coffee brown
    textAlign: 'center',
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Pure white for contrast
    borderRadius: 12,
    padding: 16,
    ...Shadows.medium,
    borderTopWidth: 3,
    borderTopColor: '#8D6E63', // Coffee brown accent
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEBE9', // Light coffee cream
  },
  listTitle: {
    fontSize: Typography.fontSizes.lg,
    fontWeight: Typography.fontWeights.semibold,
    color: '#3E2723', // Dark coffee brown
  },
  itemCount: {
    fontSize: Typography.fontSizes.sm,
    color: '#8D6E63', // Coffee brown
    fontWeight: Typography.fontWeights.medium,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 8,
  },
  regionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8E1', // Warm cream white
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    ...Shadows.small,
    borderLeftWidth: 3,
    borderLeftColor: '#6D4C41', // Rich coffee brown
  },
  coffeeIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#D7CCC8', // Light coffee cream
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  regionContent: {
    flex: 1,
  },
  regionName: {
    fontSize: Typography.fontSizes.lg,
    fontWeight: Typography.fontWeights.semibold,
    color: '#3E2723', // Dark coffee brown
    marginBottom: 4,
  },
  regionDescription: {
    fontSize: Typography.fontSizes.sm,
    color: '#5D4037', // Medium coffee brown
    marginBottom: 4,
  },
  altitudeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  altitudeText: {
    fontSize: Typography.fontSizes.xs,
    color: '#8D6E63', // Coffee brown
    marginLeft: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFE0B2', // Warm golden background
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  ratingText: {
    fontSize: Typography.fontSizes.xs,
    fontWeight: Typography.fontWeights.semibold,
    color: '#E65100', // Warm orange-brown
    marginLeft: 4,
  },
  footer: {
    paddingVertical: 16,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EFEBE9', // Light coffee cream
    marginTop: 16,
  },
  footerText: {
    fontSize: Typography.fontSizes.sm,
    color: '#5D4037', // Medium coffee brown
    fontWeight: Typography.fontWeights.medium,
  },
});