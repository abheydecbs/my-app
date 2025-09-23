import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COFFEE_SHOPS } from '../data/const';
import { Colors, Typography, Shadows } from '../GlobalStyles';

// CoffeeShopsScreen demonstrates the FlatList component with professional design
// FlatList is optimized for rendering large lists efficiently
// It only renders visible items and recycles components for better performance
export default function CoffeeShopsScreen() {
  
  // Professional renderItem function with coffee shop card design
  const renderCoffeeShopItem = ({ item, index }) => {
    // Generate random rating for demo purposes
    const rating = (4 + Math.random()).toFixed(1);
    const isOpen = Math.random() > 0.3; // 70% chance of being open
    
    return (
      <View style={styles.coffeeCard}>
        <View style={styles.coffeeIcon}>
          <Ionicons 
            name="cafe" 
            size={24} 
            color={Colors.primary.main} 
          />
        </View>
        <View style={styles.coffeeContent}>
          <Text style={styles.coffeeName}>{item}</Text>
          <View style={styles.ratingContainer}>
            <Ionicons 
              name="star" 
              size={16} 
              color={Colors.warning.main} 
            />
            <Text style={styles.ratingText}>{rating}</Text>
            <View style={[styles.statusBadge, { backgroundColor: isOpen ? Colors.success.light : Colors.error.light }]}>
              <Text style={[styles.statusText, { color: isOpen ? Colors.success.main : Colors.error.main }]}>
                {isOpen ? 'Open' : 'Closed'}
              </Text>
            </View>
          </View>
          <Text style={styles.coffeeSubtext}>Local coffee shop #{index + 1}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Professional header section */}
      <View style={styles.header}>
        <Text style={styles.title}>Local Coffee Shops</Text>
        <Text style={styles.subtitle}>
          Discover amazing coffee experiences near you
        </Text>
      </View>
      
      {/* Professional list container with proper spacing */}
      <View style={styles.listContainer}>
        <FlatList
          data={COFFEE_SHOPS}
          renderItem={renderCoffeeShopItem}
          keyExtractor={(item, index) => `coffee-${index}`}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
      
      {/* Professional footer with info */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Total coffee shops: {COFFEE_SHOPS.length}
        </Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.default,
    paddingHorizontal: 20,
  },
  header: {
    paddingVertical: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: Typography.fontSizes['2xl'],
    fontWeight: Typography.fontWeights.bold,
    color: Colors.text.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: Typography.fontSizes.base,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  listContainer: {
    flex: 1,
    backgroundColor: Colors.background.paper,
    borderRadius: 12,
    padding: 16,
    ...Shadows.medium,
  },
  listContent: {
    paddingVertical: 8,
  },
  coffeeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background.paper,
    borderRadius: 8,
    padding: 16,
    ...Shadows.small,
    borderLeftWidth: 3,
    borderLeftColor: Colors.primary.main,
  },
  coffeeIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary.light,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  coffeeContent: {
    flex: 1,
  },
  coffeeName: {
    fontSize: Typography.fontSizes.lg,
    fontWeight: Typography.fontWeights.semibold,
    color: Colors.text.primary,
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  ratingText: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.text.primary,
    marginLeft: 4,
    marginRight: 8,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  statusText: {
    fontSize: Typography.fontSizes.xs,
    fontWeight: Typography.fontWeights.medium,
  },
  coffeeSubtext: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.text.secondary,
  },
  separator: {
    height: 12,
  },
  footer: {
    paddingVertical: 16,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: Colors.neutral.gray200,
    marginTop: 16,
  },
  footerText: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.text.secondary,
    fontWeight: Typography.fontWeights.medium,
  },
});