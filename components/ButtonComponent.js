import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

// Opret en Button-komponent med en Text-komponent over den, der viser, om knappen er trykket eller ej
// Brug useState til at tracke knaptilstanden
// Når knappen trykkes, skal teksten opdatere sig selv i overensstemmelse hermed

const ButtonComponent = () => {
// Opret en state til at tracke, om knappen er trykket  eller ej
const [isPressed, setIsPressed] = useState(false);

    // Funktion til at håndtere knaptryk
const handlePress = () => {
    setIsPressed(!isPressed);
}

    return (
        <View>
            <Text>{isPressed ? "Knappen er trykket" : "Knappen er ikke trykket"}</Text>
            <Button title="Tryk på mig" onPress={handlePress} />
        </View>
    );
}

export default ButtonComponent;