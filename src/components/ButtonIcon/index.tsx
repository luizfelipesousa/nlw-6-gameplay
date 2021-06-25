import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import discord from '../../assets/discord.png';

import { styles } from './styles';

type Props = RectButtonProps & {
    title: string;
    icon?: boolean;
    isEnable?: boolean;
}

export function ButtonIcon({ title, icon = true, isEnable = true, ...rest }: Props) {
    return (
        <RectButton
            enabled={isEnable}
            style={isEnable ? styles.button : styles.inativeButton}
            {...rest}
        >
            {
                icon &&
                <View>
                    <Image
                        style={styles.imageButton}
                        resizeMode='contain'
                        source={discord} />
                </View>
            }

            <View style={isEnable ? styles.viewText : styles.viewInativeText}>
                <Text style={styles.textButton}>
                    {title}
                </Text>
            </View>
        </RectButton>
    );
}