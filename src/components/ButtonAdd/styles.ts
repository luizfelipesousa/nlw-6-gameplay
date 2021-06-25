import { StyleSheet, } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
        width: 48,
        height: 48,
        borderRadius: 8,
    },
})