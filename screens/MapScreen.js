import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COFFEE_SHOPS } from '../data/const';
import { LoadingState, Card, RatingDisplay } from '../components';
import { Colors, Typography, Shadows, Spacing, BorderRadius, CommonStyles } from '../GlobalStyles';

// MapScreen demonstrates location services and interactive map functionality
// This screen shows coffee shops on a map and allows users to view their current location
export default function MapScreen() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapRef, setMapRef] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Request location permissions and get current location
  useEffect(() => {
    (async () => {
      try {
        // Request permission to access location
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          setLoading(false);
          return;
        }

        // Get current location
        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
        
        // Load favorites from AsyncStorage
        loadFavorites();
        
        setLoading(false);
      } catch (error) {
        setErrorMsg('Error getting location');
        setLoading(false);
      }
    })();
  }, []);

  // Load favorites from AsyncStorage
  const loadFavorites = async () => {
    try {
      const favoritesJson = await AsyncStorage.getItem('favorites');
      if (favoritesJson) {
        setFavorites(JSON.parse(favoritesJson));
      }
    } catch (error) {
      console.log('Error loading favorites:', error);
    }
  };

  // Toggle favorite status for a coffee shop
  const toggleFavorite = async (shopName) => {
    try {
      let updatedFavorites;
      if (favorites.includes(shopName)) {
        updatedFavorites = favorites.filter(fav => fav !== shopName);
        Alert.alert('Removed', `${shopName} removed from favorites`);
      } else {
        updatedFavorites = [...favorites, shopName];
        Alert.alert('Added', `${shopName} added to favorites`);
      }
      setFavorites(updatedFavorites);
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } catch (error) {
      Alert.alert('Error', 'Could not update favorites');
    }
  };

  // Center map on user's current location
  const centerOnUser = () => {
    if (location && mapRef) {
      mapRef.animateToRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }, 1000);
    }
  };

  // Show loading spinner while getting location
  if (loading) {
    return <LoadingState message="Getting your location..." />;
  }

  // Show error message if location permission denied
  if (errorMsg) {
    return (
      <View style={styles.errorContainer}>
        <Ionicons name="location-outline" size={64} color={Colors.error.main} />
        <Text style={styles.errorText}>{errorMsg}</Text>
        <Text style={styles.errorSubtext}>
          Please enable location services to see coffee shops near you
        </Text>
      </View>
    );
  }

  // Calculate initial region based on user location or default to Copenhagen
  const initialRegion = location ? {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  } : {
    // Default to Copenhagen, Denmark if location not available
    latitude: 55.6761,
    longitude: 12.5683,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  return (
    <View style={styles.container}>
      {/* Map with coffee shop markers */}
      <MapView
        ref={(ref) => setMapRef(ref)}
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation={true}
        showsMyLocationButton={false}
      >
        {/* Render markers for each coffee shop */}
        {COFFEE_SHOPS.map((shop, index) => {
          const isFavorite = favorites.includes(shop.name);
          return (
            <Marker
              key={`shop-${index}`}
              coordinate={{
                latitude: shop.latitude,
                longitude: shop.longitude,
              }}
              pinColor={isFavorite ? Colors.warning.main : Colors.primary.main}
            >
              <Callout
                onPress={() => toggleFavorite(shop.name)}
                style={styles.callout}
              >
                <View style={styles.calloutContent}>
                  <View style={styles.calloutHeader}>
                    <Ionicons name="cafe" size={24} color={Colors.primary.main} />
                    <Text style={styles.calloutTitle}>{shop.name}</Text>
                  </View>
                  <RatingDisplay rating={shop.rating} starSize={16} />
                  <TouchableOpacity style={styles.favoriteButton}>
                    <Ionicons 
                      name={isFavorite ? "heart" : "heart-outline"} 
                      size={20} 
                      color={isFavorite ? Colors.error.main : Colors.neutral.gray500} 
                    />
                    <Text style={styles.favoriteText}>
                      {isFavorite ? 'Favorited' : 'Tap to favorite'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </Callout>
            </Marker>
          );
        })}
      </MapView>

      {/* Info card at the top */}
      <View style={styles.infoCard}>
        <View style={styles.infoHeader}>
          <Ionicons name="map" size={24} color={Colors.primary.main} />
          <Text style={styles.infoTitle}>Coffee Shop Map</Text>
        </View>
        <Text style={styles.infoText}>
          {COFFEE_SHOPS.length} coffee shops nearby • Tap markers to favorite
        </Text>
      </View>

      {/* Center on user location button */}
      {location && (
        <TouchableOpacity
          style={styles.locationButton}
          onPress={centerOnUser}
        >
          <Ionicons name="locate" size={24} color="white" />
        </TouchableOpacity>
      )}

      {/* Favorites counter at the bottom */}
      {favorites.length > 0 && (
        <View style={styles.favoritesCard}>
          <Ionicons name="heart" size={20} color={Colors.error.main} />
          <Text style={styles.favoritesText}>
            {favorites.length} favorite{favorites.length !== 1 ? 's' : ''}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: CommonStyles.container,
  map: {
    width: '100%',
    height: '100%',
  },
  loadingContainer: CommonStyles.centerContainer,
  loadingText: CommonStyles.loadingText,
  errorContainer: {
    ...CommonStyles.centerContainer,
    padding: Spacing.xl,
  },
  errorText: CommonStyles.errorText,
  errorSubtext: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.text.secondary,
    marginTop: Spacing.xs,
    textAlign: 'center',
  },
  infoCard: {
    position: 'absolute',
    top: Spacing.md,
    left: Spacing.md,
    right: Spacing.md,
    backgroundColor: 'white',
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    ...Shadows.medium,
  },
  infoHeader: CommonStyles.row,
  infoTitle: {
    fontSize: Typography.fontSizes.lg,
    fontWeight: Typography.fontWeights.bold,
    color: Colors.text.primary,
    marginLeft: Spacing.xs,
  },
  infoText: CommonStyles.sectionDescription,
  locationButton: {
    position: 'absolute',
    bottom: 100,
    right: Spacing.md,
    width: 56,
    height: 56,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.primary.main,
    justifyContent: 'center',
    alignItems: 'center',
    ...Shadows.large,
  },
  callout: {
    width: 200,
  },
  calloutContent: {
    padding: Spacing.xs,
  },
  calloutHeader: {
    ...CommonStyles.row,
    marginBottom: Spacing.xs,
  },
  calloutTitle: {
    fontSize: Typography.fontSizes.base,
    fontWeight: Typography.fontWeights.semibold,
    color: Colors.text.primary,
    marginLeft: Spacing.xs,
    flex: 1,
  },
  favoriteButton: {
    ...CommonStyles.row,
    marginTop: Spacing.xs,
  },
  favoriteText: {
    fontSize: Typography.fontSizes.xs,
    color: Colors.text.secondary,
    marginLeft: Spacing.xs,
  },
  favoritesCard: {
    position: 'absolute',
    bottom: Spacing.xl,
    left: Spacing.md,
    backgroundColor: 'white',
    borderRadius: BorderRadius.xl,
    paddingVertical: Spacing.sm + 4,
    paddingHorizontal: Spacing.lg,
    ...CommonStyles.row,
    ...Shadows.medium,
  },
  favoritesText: {
    fontSize: Typography.fontSizes.sm,
    fontWeight: Typography.fontWeights.semibold,
    color: Colors.text.primary,
    marginLeft: Spacing.xs,
  },
});
