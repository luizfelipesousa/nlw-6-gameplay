import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    banner: {
        width: '100%',
        height: 234,
        marginBottom: 30,
    },
    textContainer: {
        justifyContent: 'flex-end',
        flex: 1,
        paddingHorizontal: 24,
        marginBottom: 30,

    },
    title: {
        fontSize: 28,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 13,
        fontFamily: theme.fonts.text400,
        color: theme.colors.heading,
    },
    members: {
        marginLeft: 24,
        marginTop: 27,
    },
    footer: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginBottom: getBottomSpace(),
    }

});

