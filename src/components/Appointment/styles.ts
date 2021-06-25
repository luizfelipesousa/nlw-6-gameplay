import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'center',
    },
    
    content: {
        flex: 1,
    },

    guilIconContainer: {
        height: 68,
        width: 64,
        borderRadius: 8,
        alignItems: 'center',
        marginRight: 20,
        justifyContent: 'center'
    },
    
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    
    headerTitle: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 18,
    },
    
    category: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 13,
        marginRight: 24
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    
    dateInfo: {
        flexDirection: 'row',
        marginBottom: 12,
        alignItems: 'center',
    },

    date: {
        fontSize: 13,
        marginLeft: 7,
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
    },

    playersInfo: {
        flexDirection: 'row',
        marginRight: 24,
        alignItems: 'center',
    },

    player: {
        fontSize: 13,
        marginLeft: 7,
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
    },
})