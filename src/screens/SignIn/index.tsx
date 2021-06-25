import React from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';

import { styles } from './styles';

import Illustration from '../../assets/illustration.png';
import { Background } from '../../components/Background';
import { useAuth } from '../../hooks/auth';
import { Alert } from 'react-native';
import { theme } from '../../global/styles/theme';

export function SignIn() {

	const { loading, signIn } = useAuth();

	async function handleSignIn() {
		try {
			await signIn();
		} catch (error) {
			// navigation.navigate('Home');
			Alert.alert(error);
		}
	}

	return (
		<Background >
			<View style={styles.container}>
				<Image style={styles.image} source={Illustration} resizeMode='stretch' />

				<View style={styles.content}>
					<Text style={styles.title}>
						Conecte-se {'\n'}e organize suas jogatinas
					</Text>
					<Text style={styles.subtitle}>
						Crie grupos para jogar seus games {'\n'}favoritos com seus amigos
					</Text>
					{
						loading ?
							<ActivityIndicator color={theme.colors.primary} />
							:
							<ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
					}
				</View>
			</View>
		</Background>
	);
}