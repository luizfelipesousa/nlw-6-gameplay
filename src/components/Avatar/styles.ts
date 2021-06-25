import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
	container: {
		width: 49,
		height: 49,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 22,
	},
	avatarLogo: {
		width: 46,
		height: 46,
		borderRadius: 22,
	},
});