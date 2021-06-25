import React from 'react';
import { styles } from './styles';

import { View, TextInput, TextInputProps } from 'react-native';

export function SmallInput({ ...rest }: TextInputProps) {
    return (
        <TextInput
            {...rest}
            style={styles.container}
        >
        </TextInput>
    );
}