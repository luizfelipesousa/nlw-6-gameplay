import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps;

export function ButtonAdd({ ...rest }: Props) {
    return (
        <RectButton
            style={styles.container}
            {...rest}>

            <MaterialCommunityIcons size={24} name="plus" color={theme.colors.heading} />

        </RectButton>
    );
}