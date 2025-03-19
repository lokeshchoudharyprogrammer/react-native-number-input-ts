# react-native-number-input-ts

A simple React Native component for integer and float input boxes written in TypeScript.

## Features

- **Integer & Float Support:** Easily switch between integer and float inputs.
- **TypeScript Ready:** Fully typed for better development experience.
- **Customizable:** Leverages React Native's `TextInput` props for flexibility.

## Installation


```
npm install react-native-number-input-ts
```
```


import React, { useState } from 'react';
import { View } from 'react-native';
import NumberInput from 'react-native-number-input-ts';

const App = () => {
  const [value, setValue] = useState<number | null>(null);

  return (
    <View style={{ padding: 20 }}>
      <NumberInput
        mode="float" // Use "integer" for integer-only input
        value={value}
        onChange={(num) => setValue(num)}
        placeholder="Enter a number"
      />
    </View>
  );
};

export default App;
```