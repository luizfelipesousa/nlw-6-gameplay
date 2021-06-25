import { StyleSheet } from 'react-native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    label: {
        color: theme.colors.heading,
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        marginLeft: 24,
        marginTop: 32,
        marginBottom: 12,
    },

    form: {
        marginTop: 32,
        paddingHorizontal: 24,
    },

    select: {
        flexDirection: 'row',
        borderStyle: 'solid',
        width: '100%',
        height: 68,
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        paddingRight: 25,
        alignItems: 'center',
        overflow: 'hidden',
    },

    imageServer: {
        width: 64,
        height: 68,
        marginRight: 20,
        backgroundColor: theme.colors.secondary40,
        borderRadius: 8,
    },

    selectBody: {
        paddingLeft: 35,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
    },

    serverLabel: {
        color: theme.colors.heading,
        fontSize: 18,
        fontFamily: theme.fonts.title700,
    },

    dateSchedule: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    field: {
        marginTop: 28,
        marginBottom: 12,
    },

    column: {
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    divisor: {
        marginRight: 4,
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        justifyContent: 'center',
        fontSize: 15,
        alignItems: 'center',

    },

    footer: {
        marginBottom: getBottomSpace() + 32,
    }

});

