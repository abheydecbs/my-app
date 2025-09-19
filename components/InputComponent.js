import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

// InputComponent demonstrates state management and user input handling
// Shows how to use useState hook to manage component state
// Displays real-time updates as user types
const InputComponent = () => {
    // useState hook creates a state variable and its setter function
    // inputValue stores the current text, setInputValue updates it
    const [inputValue, setInputValue] = useState('');

    return (
        <View>
            {/* TextInput component for user text input */}
            <TextInput
                value={inputValue}                    // Controlled input - value comes from state
                onChangeText={setInputValue}          // Updates state when user types
                placeholder="Indtast noget"           // Placeholder text (Danish: "Enter something")
            />
            {/* Text component that displays the current input value in real-time */}
            <Text>Du har indtastet: {inputValue}</Text> {/* Danish: "You have entered:" */}
        </View>
    )
}  

export default InputComponent; 