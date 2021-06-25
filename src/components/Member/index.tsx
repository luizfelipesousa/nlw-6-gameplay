import React from 'react';
import { styles } from './styles';

import { View, Text } from 'react-native';
import { Avatar } from '../Avatar';
import { theme } from '../../global/styles/theme';

type Props = {
    memberInfo: MemberProps;
}

export interface MemberProps {
    id: string;
    username: string;
    avatar_url: string;
    status: string;
}

export function Member({ memberInfo }: Props) {

    const isOnline = memberInfo.status === 'Online';

    const { primary, on } = theme.colors;

    return (
        <View style={styles.container}>
            <Avatar urlImage={memberInfo.avatar_url} />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    {memberInfo.username}
                </Text>

                <View style={styles.subtitle}>
                    <View style={[
                        styles.bullet, {
                            backgroundColor: isOnline ? on : primary
                        }
                    ]} />
                    <Text style={styles.status}>
                        {isOnline ? 'Available' : 'Occupied'}
                    </Text>
                </View>
            </View>

        </View >
    );
}