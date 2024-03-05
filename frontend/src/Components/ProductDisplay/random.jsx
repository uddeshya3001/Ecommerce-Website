import React from 'react';

function generateRandomValue() {
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();

    // Scale the random number to fit within the range 100 to 200
    const randomValue = Math.floor(randomNumber * (200 - 100 + 1)) + 100;

    return randomValue;
}

function MyComponent() {
    const randomValue = generateRandomValue();

    return (

        <p>({randomValue})</p>

    );
}

export default MyComponent;
