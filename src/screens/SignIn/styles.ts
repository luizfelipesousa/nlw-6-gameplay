import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: '100%',
		height: 360,
	},
	content: {
		marginTop: -40,
		width: 269,
	},
	title: {
		fontSize: 40,
		fontFamily: theme.fonts.title700,
		color: theme.colors.heading,
		textAlign: 'center',
		marginBottom: 16,
		lineHeight: 40,
	},
	subtitle: {
		fontSize: 15,
		fontFamily: theme.fonts.text400,
		color: theme.colors.heading,
		textAlign: 'center',
		marginBottom: 40,
		lineHeight: 25,
	},
});