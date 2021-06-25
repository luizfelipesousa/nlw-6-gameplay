import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 24,

    },

    guilds: {
        paddingTop: 60,
        width: '100%',
		paddingBottom: getBottomSpace() + 60,
    },

});

