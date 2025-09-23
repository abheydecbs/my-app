// Data constants used throughout the coffee app

// Array of popular coffee shops - used to demonstrate FlatList component
// Shows how to work with static array data in React Native
export const COFFEE_SHOPS = [
  "Starbucks",
  "Blue Bottle Coffee", 
  "Intelligentsia",
  "Counter Culture Coffee",
  "Stumptown Coffee",
  "La Colombe",
  "Ritual Coffee",
  "Philz Coffee",
  "Joe Coffee",
  "Irving Farm",
  "Verve Coffee",
  "Coava Coffee",
  "Heart Coffee",
  "Onyx Coffee Lab",
];

// Array of coffee roasting regions - used to demonstrate array.map() method
// Shows how to iterate over arrays and render components
export const COFFEE_REGIONS = ["Ethiopia", "Colombia", "Guatemala", "Jamaica", "Yemen", "Hawaii"];

// API endpoint for fetching coffee shop reviews (using randomuser as placeholder)
// Used with fetch() to demonstrate API integration and dynamic data loading
export const GET_REVIEWS_URL = "https://randomuser.me/api?results=";