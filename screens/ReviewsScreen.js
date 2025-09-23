import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { GET_REVIEWS_URL } from '../data/const';
import { Colors, Typography, Shadows } from '../GlobalStyles';

// ReviewsScreen demonstrates API integration with professional UI design
// Shows how to fetch data from external APIs, manage loading states, and handle user input
export default function ReviewsScreen() {
  // State variables using React hooks
  const [reviews, setReviews] = useState([]);        // Stores the fetched review data
  const [msg, setMsg] = useState('');          // Stores status messages (loading, errors)
  const [amount, setAmount] = useState(5);     // Controls how many reviews to fetch
  const [loading, setLoading] = useState(false); // Loading state

  // Professional async function to fetch review data from the API
  const loadReviews = async () => {
    try {
      setLoading(true);                        // Start loading
      setMsg('');                              // Clear previous messages
      
      // Use default of 5 if amount is empty or invalid
      const reviewCount = amount || 5;
      
      // Fetch data from randomuser.me API with specified number of results (simulating coffee reviews)
      const response = await fetch(GET_REVIEWS_URL + reviewCount);
      const data = await response.json();      // Parse JSON response
      setReviews(data.results);                   // Store review data in state
    } catch (error) {
      // Handle any errors during the fetch operation
      setMsg('Failed to load reviews. Please try again.');
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);                       // Stop loading
    }
  };

  // Professional review card renderer
  const renderReviewCard = (person, index) => {
    const coffeeShops = [
      "Blue Bottle Coffee", "Stumptown Coffee", "Intelligentsia", "La Colombe",
      "Counter Culture", "Ritual Coffee", "Heart Coffee", "Coava Coffee"
    ];
    const rating = (4 + Math.random()).toFixed(1);
    const shopName = coffeeShops[index % coffeeShops.length];

    return (
      <View key={index} style={styles.reviewCard}>
        <Image
          source={{ uri: person.picture.medium }}
          style={styles.profileImage}
        />
        <View style={styles.reviewInfo}>
          <Text style={styles.reviewerName}>
            {person.name.first} {person.name.last}
          </Text>
          <View style={styles.shopContainer}>
            <Ionicons 
              name="cafe" 
              size={14} 
              color={Colors.primary.main} 
            />
            <Text style={styles.shopText}>{shopName}</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Ionicons 
              name="star" 
              size={16} 
              color={Colors.warning.main} 
            />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
          <View style={styles.locationContainer}>
            <Ionicons 
              name="location-outline" 
              size={14} 
              color={Colors.text.secondary} 
            />
            <Text style={styles.locationText}>
              {person.location.city}, {person.location.country}
            </Text>
          </View>
        </View>
        <View style={styles.reviewBadge}>
          <Ionicons 
            name="chatbubble" 
            size={16} 
            color={Colors.success.main} 
          />
        </View>
      </View>
    );
  };

  // useEffect hook runs side effects (like API calls)
  useEffect(() => {
    loadReviews();                               // Call loadReviews when component mounts
  }, [amount]);                                // Re-run when 'amount' changes

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* Professional header section */}
        <View style={styles.header}>
          <Text style={styles.title}>Coffee Reviews</Text>
          <Text style={styles.subtitle}>
            Real reviews from coffee enthusiasts
          </Text>
        </View>
        
        {/* Professional input section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>Number of reviews to load:</Text>
          <View style={styles.inputContainer}>
            <Ionicons 
              name="chatbubbles-outline" 
              size={20} 
              color={Colors.neutral.gray500} 
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Enter number (leave empty for 5)"
              value={amount ? amount.toString() : ''}
              onChangeText={(text) => {
                if (text === '') {
                  setAmount(''); // Allow empty string
                } else {
                  const num = parseInt(text);
                  if (!isNaN(num) && num > 0) {
                    setAmount(num); // No upper limit
                  }
                }
              }}
              keyboardType="numeric"
              maxLength={3}
            />
          </View>
        </View>
        
        {/* Professional content section */}
        <View style={styles.contentContainer}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Reviews ({reviews.length})</Text>
            {loading && (
              <ActivityIndicator 
                size="small" 
                color={Colors.primary.main} 
              />
            )}
          </View>
          
          {loading && reviews.length === 0 ? (
            // Professional loading state
            <View style={styles.loadingContainer}>
              <ActivityIndicator 
                size="large" 
                color={Colors.primary.main} 
              />
              <Text style={styles.loadingText}>Loading reviews...</Text>
            </View>
          ) : msg ? (
            // Professional error state
            <View style={styles.errorContainer}>
              <Ionicons 
                name="alert-circle-outline" 
                size={48} 
                color={Colors.error.main} 
              />
              <Text style={styles.errorText}>{msg}</Text>
            </View>
          ) : (
            // Professional review list
            <ScrollView 
              style={styles.scrollView}
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={true}
              nestedScrollEnabled={true}
            >
              {reviews.map((person, index) => renderReviewCard(person, index))}
            </ScrollView>
          )}
        </View>
        
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
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
  inputSection: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: Typography.fontSizes.sm,
    fontWeight: Typography.fontWeights.medium,
    color: Colors.text.primary,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background.paper,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.neutral.gray300,
    paddingHorizontal: 16,
    ...Shadows.small,
  },
  inputIcon: {
    marginRight: 12,
  },
  textInput: {
    flex: 1,
    height: 48,
    fontSize: Typography.fontSizes.base,
    color: Colors.text.primary,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.background.paper,
    borderRadius: 12,
    padding: 16,
    ...Shadows.medium,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral.gray200,
  },
  listTitle: {
    fontSize: Typography.fontSizes.lg,
    fontWeight: Typography.fontWeights.semibold,
    color: Colors.text.primary,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: Typography.fontSizes.base,
    color: Colors.text.secondary,
    marginTop: 16,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: Typography.fontSizes.base,
    color: Colors.error.main,
    textAlign: 'center',
    marginTop: 16,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 8,
    flexGrow: 1,
  },
  reviewCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background.paper,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    ...Shadows.small,
    borderLeftWidth: 3,
    borderLeftColor: Colors.success.main,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
    borderWidth: 2,
    borderColor: Colors.neutral.gray200,
  },
  reviewInfo: {
    flex: 1,
  },
  reviewerName: {
    fontSize: Typography.fontSizes.lg,
    fontWeight: Typography.fontWeights.semibold,
    color: Colors.text.primary,
    marginBottom: 4,
  },
  shopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  shopText: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.primary.main,
    marginLeft: 4,
    fontWeight: Typography.fontWeights.medium,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  ratingText: {
    fontSize: Typography.fontSizes.xs,
    color: Colors.text.primary,
    marginLeft: 4,
    fontWeight: Typography.fontWeights.medium,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: Typography.fontSizes.xs,
    color: Colors.text.secondary,
    marginLeft: 4,
  },
  reviewBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.success.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
});