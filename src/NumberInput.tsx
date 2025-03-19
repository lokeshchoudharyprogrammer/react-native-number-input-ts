import React, { useState } from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

export type NumberInputProps = TextInputProps & {
  /** 'integer' for whole numbers, 'float' for decimals */
  mode?: 'integer' | 'float';
  /** Current number value; null means no valid number */
  value?: number | null;
  /** Callback when a valid number or null (if empty/invalid) is parsed */
  onChange?: (value: number | null) => void;
};

const NumberInput: React.FC<NumberInputProps> = ({
  mode = 'integer',
  value,
  onChange,
  style,
  ...props
}) => {
  const [text, setText] = useState<string>(value !== undefined && value !== null ? String(value) : '');

  const handleChange = (input: string) => {
    // Choose the regex based on the input mode
    const regex = mode === 'integer'
      ? /^-?\d*$/           // Allows only integers (optional minus sign)
      : /^-?\d*(\.\d*)?$/;   // Allows floats (one optional decimal point)

    if (regex.test(input)) {
      setText(input);

      // Parse the input into a number
      const parsed = mode === 'integer' ? parseInt(input, 10) : parseFloat(input);
      if (input === '' || isNaN(parsed)) {
        onChange && onChange(null);
      } else {
        onChange && onChange(parsed);
      }
    }
  };

  return (
    <TextInput
      value={text}
      onChangeText={handleChange}
      keyboardType="numeric"
      style={[styles.input, style]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },
});

export default NumberInput;
