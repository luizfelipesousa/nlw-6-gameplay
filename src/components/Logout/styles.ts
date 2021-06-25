import { StyleSheet } from 'react-native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: 174,
        backgroundColor: theme.colors.secondary80,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },

    logoutQuestion: {
        flexDirection: 'row',
    },

    logoutOptions: {
        marginTop: 23,
        flexDirection: 'row',
    },

    text: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title500,
        fontSize: 24,
    },

    textName: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
        fontSize: 24,
    },

    textPlay: {
        color: theme.colors.primary,
        fontFamily: theme.fonts.title700,
        fontSize: 24,
    },

    button: {
        width: '48%',
        height:56,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: theme.colors.secondary30,
        marginBottom: getBottomSpace() + 6,
    },

    buttonYes: {
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.primary,
    },

    buttonText: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.text400,
        fontSize: 15,
    }
});

