import React from 'react';
import { styles } from './styles';

import { View, Text, TouchableOpacity } from 'react-native';

interface Props {
    handleLogout: () => Promise<void>;
    closeModal: () => void;
}
export function Logout({ handleLogout, closeModal }: Props) {
    return (
        <View style={styles.container}>

            <View style={styles.logoutQuestion}>
                <Text style={styles.text}>Deseja sair do </Text>
                <Text style={styles.textName}>Game</Text>
                <Text style={styles.textPlay}>Play</Text>
                <Text style={styles.textName}>?</Text>
            </View>

            <View style={styles.logoutOptions}>
                <TouchableOpacity
                    onPress={closeModal}
                    activeOpacity={0.7}
                    style={styles.button} >
                    <Text style={styles.buttonText}>Não</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleLogout}
                    activeOpacity={0.7}
                    style={[styles.button, styles.buttonYes]}>
                    <Text style={styles.buttonText}>Sim</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

