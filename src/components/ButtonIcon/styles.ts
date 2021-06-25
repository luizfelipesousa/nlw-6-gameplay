import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        width: '100%',
        borderRadius: 8,
        backgroundColor: theme.colors.primary,
    },

    inativeButton: {
        flexDirection: 'row',
        opacity: 0.6,
        width: '100%',
        borderRadius: 8,
    },

    imageButton: {
        margin: 19,
    },

    viewText: {
        flex: 1,
    },

    viewInativeText: {
        flex: 1,
        borderRadius: 8,
        borderColor: theme.colors.heading,
        borderStyle: 'solid',
        borderWidth: 1,
    },


    textButton: {
        paddingTop: 19,
        paddingBottom: 19,
        color: theme.colors.heading,
        fontSize: 15,
        fontFamily: theme.fonts.text500,
        justifyContent: 'center',
        textAlign: 'center'
    }
});