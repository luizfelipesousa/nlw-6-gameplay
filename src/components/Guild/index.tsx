import React from 'react';
import { styles } from './styles';

import {
    Text,
    View,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';
import { GuildIcon } from '../GuildIcon';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';

type Props = TouchableOpacityProps & {
    data: GuildProps;
}


export interface GuildProps {
    id: string;
    name: string;
    icon: string;
    owner: boolean;
}


export function Guild({ data, ...rest }: Props) {
    return (
        <TouchableOpacity
            {...rest}
            activeOpacity={0.7}
            style={styles.container}
        >
            <GuildIcon guildId={data.id} iconId={data.icon} />

            <View style={styles.content}>
                <Text style={styles.title}>
                    {data.name}
                </Text>

                <Text style={styles.type}>
                    {data.owner ? 'Admin' : 'Guest'}
                </Text>

            </View>
            <Feather
                name="chevron-right"
                size={24}
                color={theme.colors.heading} />

        </TouchableOpacity>
    );
}