import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Avatar } from '../Avatar';
import { ButtonAdd } from '../ButtonAdd';

import { styles } from './styles';

type Props = {
    userName: string;
    avatar: string;
    handleSignOut: () => void;
}


export function Profile({ userName, avatar, handleSignOut }: Props) {

    return (
        <View style={styles.container}>

            <RectButton onPress={handleSignOut}>
                <Avatar urlImage={avatar} />
            </RectButton>

            <View >
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>
                    <Text style={styles.username}>
                        {userName},
                    </Text>
                </View>

                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View>
        </View>
    );
}