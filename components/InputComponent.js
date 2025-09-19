import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const InputComponent = () => {
    // Opret en state til at gemme inputværdien
    const [inputValue, setInputValue] = useState('');
        return (
        <View>
            <TextInput
                value={inputValue}
                onChangeText={setInputValue}
                placeholder="Indtast noget"
            />
            <Text>Du har indtastet: {inputValue}</Text> {/* Viser den indtastede værdi */}
        </View>
    )
}  

export default InputComponent; 