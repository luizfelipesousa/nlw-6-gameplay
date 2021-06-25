import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },

    titleContainer: {},

    title: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
        fontSize: 18,
    },

    subtitle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    
    status: {
        color: theme.colors.highlight,
        fontFamily: theme.fonts.text400,
        fontSize: 13,
    },

    bullet: {
        width: 8,
        height: 8,
        borderRadius: 16,
        marginRight: 9,
    },

});

