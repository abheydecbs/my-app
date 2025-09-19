import React from 'react';
import { Image, View } from 'react-native';

// AssetComponent demonstrates how to display images in React Native
// Shows how to handle local assets using the require() function
// Accepts a 'source' prop to make the component reusable
const AssetComponent = ({ source }) => {
    return (
        <View>
            {/* Image component for displaying pictures */}
            <Image 
                source={source}                              // Image source passed as prop
                style={{ width: 100, height: 100 }}         // Fixed dimensions: 100x100 pixels
            />
        </View>
    )
}

export default AssetComponent;