import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

    container: {
        marginTop: 28,
        width: '100%',

    },

    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    textDesc: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
        fontSize: 18,

    },

    textDescMax: {
        color: theme.colors.highlight,
        fontFamily: theme.fonts.text400,
        fontSize: 13,

    },

    textArea: {
        marginTop: 15,
        marginBottom: 56,
        width: '100%',
        height: 95,
        backgroundColor: theme.colors.secondary40,
        color: theme.colors.heading,
        borderRadius: 8,
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        borderWidth: 1,
        borderColor: theme.colors.secondary50,
        paddingHorizontal: 16,
        paddingTop: 16,
        textAlignVertical: 'top',

    },
});

