import React from 'react';
import { styles } from './styles';

import { View, TextInput, Text, TextInputProps } from 'react-native';

export function TextArea({ ...rest }: TextInputProps) {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.textDesc}>
                    Description
                </Text>

                <Text style={styles.textDescMax}>
                    Max 100 characters
                </Text>
            </View>
            <TextInput
                style={styles.textArea}
                {...rest}
            >
            </TextInput>
        </View>
    );
}