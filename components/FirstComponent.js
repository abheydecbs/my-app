import React from 'react';
import { Text, View } from 'react-native';

// FirstComponent demonstrates basic React Native component structure
// Shows how to use inline styles for component styling
const FirstComponent = () => {
    return (
        // View component with inline styles - demonstrates basic styling approach
        <View style={{ backgroundColor: 'red', marginBottom: 10 }}>
            {/* Text component displaying a simple message */}
            <Text>This is my first component!</Text>
        </View>
    );
}

export default FirstComponent;