# Coffee Connect ☕

A React Native mobile application for discovering coffee shops, exploring coffee origins, and reading reviews from fellow coffee enthusiasts.

## 📱 Demo Video

**Watch the app demonstration**: [demo-video.mp4](./demo-video.mp4)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abheydecbs/my-app.git
   cd my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

4. **Run on device/simulator**
   - Scan QR code with Expo Go app (iOS/Android)
   - Press `i` for iOS simulator
   - Press `a` for Android emulator

## 🎯 Features

- **6 Main Screens**: Home, Coffee Shops, Map, Origin, Reviews, Settings
- **2 Stack Screens**: About, User Profile
- **Interactive Map**: Real-time location tracking with coffee shop markers using React Native Maps
- **Favorites System**: Save favorite coffee shops with AsyncStorage (persistent data)
- **Location Services**: Uses Expo Location to show current location and nearby shops
- **API Integration**: Dynamic reviews with user avatars from randomuser.me API
- **Interactive Controls**: Customizable review count selector, map interactions, favorite buttons
- **Navigation**: Bottom tab navigation and stack navigation with coffee-themed design
- **Professional Styling**: Global design system with gradients, shadows, and consistent theming
- **Data Persistence**: AsyncStorage for saving user preferences and favorites
- **Quick Actions**: Home screen cards for easy navigation to main features

## 🛠 Built With

- **React Native** with Expo SDK 54
- **React Navigation** (Bottom Tabs & Stack Navigator)
- **React Native Maps** for interactive map features
- **Expo Location** for GPS and location services
- **AsyncStorage** for data persistence
- **Expo Linear Gradient** for beautiful gradients
- **Expo Vector Icons** for iconography
- **Custom Global Styling System** for consistent design