import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { COFFEE_SHOPS } from '../data/const';
import { SectionHeader, IconBadge, RatingDisplay, ListItem } from '../components';
import { Colors, Typography, Shadows, Spacing, BorderRadius, CommonStyles } from '../GlobalStyles';

// CoffeeShopsScreen demonstrates the FlatList component with professional design
// FlatList is optimized for rendering large lists efficiently
// It only renders visible items and recycles components for better performance
export default function CoffeeShopsScreen() {
  
  // Professional renderItem function with coffee shop card design
  const renderCoffeeShopItem = ({ item, index }) => {
    const isOpen = Math.random() > 0.3; // 70% chance of being open
    
    const rightContent = (
      <View>
        <RatingDisplay rating={item.rating} starSize={16} />
        <View style={[styles.statusBadge, { backgroundColor: isOpen ? Colors.success.light : Colors.error.light }]}>
          <Text style={[styles.statusText, { color: isOpen ? Colors.success.main : Colors.error.main }]}>
            {isOpen ? 'Open' : 'Closed'}
          </Text>
        </View>
      </View>
    );
    
    return (
      <ListItem
        icon="cafe"
        title={item.name}
        subtitle={`☕ Local coffee shop #${index + 1}`}
        rightContent={rightContent}
        backgroundColor="#FFF8E1"
        style={styles.coffeeCard}
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* Header with new SectionHeader component */}
      <SectionHeader 
        title="☕ Local Coffee Shops"
        subtitle="🏪 Discover amazing coffee spots near you"
        style={styles.header}
      />
      
      {/* Professional list container with proper spacing */}
      <View style={styles.listContainer}>
        <FlatList
          data={COFFEE_SHOPS}
          renderItem={renderCoffeeShopItem}
          keyExtractor={(item, index) => `coffee-${item.name}-${index}`}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
      
      {/* Professional footer with info */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          ☕ Total coffee shops: {COFFEE_SHOPS.length} 🏪
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
    paddingHorizontal: Spacing.lg,
  },
  header: {
    paddingVertical: Spacing.lg,
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    backgroundColor: Colors.background.paper,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    ...Shadows.medium,
  },
  listContent: {
    paddingVertical: Spacing.xs,
  },
  coffeeCard: {
    borderLeftWidth: 3,
    borderLeftColor: Colors.primary.main,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  statusBadge: {
    paddingHorizontal: Spacing.xs,
    paddingVertical: 2,
    borderRadius: BorderRadius.sm - 4,
    marginTop: Spacing.xs,
  },
  statusText: {
    fontSize: Typography.fontSizes.xs,
    fontWeight: Typography.fontWeights.medium,
    textAlign: 'center',
  },
  separator: {
    height: Spacing.sm + 4,
  },
  footer: {
    paddingVertical: Spacing.md,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: Colors.neutral.gray200,
    marginTop: Spacing.md,
  },
  footerText: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.text.secondary,
    fontWeight: Typography.fontWeights.medium,
  },
});