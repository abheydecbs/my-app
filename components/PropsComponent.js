import React from 'react';
import { Text, View } from 'react-native';

// PropsComponent demonstrates how to use props in React Native
// Props allow components to receive data from their parent components
// This makes components reusable and dynamic
const PropsComponent = ({ name }) => {
    return (
        <View>
            {/* Displaying the 'name' prop passed from the parent component */}
            <Text>Made by {name}</Text>
        </View>
        )
    }

export default PropsComponent;