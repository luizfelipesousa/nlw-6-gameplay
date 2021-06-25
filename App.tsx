import React from 'react';
import 'react-native-gesture-handler';

import { StatusBar } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import {
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter';
import {
  Rajdhani_400Regular,
  Rajdhani_500Medium,
  Rajdhani_700Bold
} from '@expo-google-fonts/rajdhani';


import { theme } from './src/global/styles/theme';
import { Background } from './src/components/Background';
import { Routes } from './src/routes';
import { AuthProvider } from './src/hooks/auth';


export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_400Regular,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <Background>

        <StatusBar
          barStyle='light-content'
          backgroundColor={theme.colors.secondary90}
          translucent={true}
        />
        <AuthProvider>
          <Routes />
        </AuthProvider>
        
      </Background >
    );
  }
}

