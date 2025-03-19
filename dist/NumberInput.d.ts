import React from 'react';
import { TextInputProps } from 'react-native';
export type NumberInputProps = TextInputProps & {
    /** 'integer' for whole numbers, 'float' for decimals */
    mode?: 'integer' | 'float';
    /** Current number value; null means no valid number */
    value?: number | null;
    /** Callback when a valid number or null (if empty/invalid) is parsed */
    onChange?: (value: number | null) => void;
};
declare const NumberInput: React.FC<NumberInputProps>;
export default NumberInput;
