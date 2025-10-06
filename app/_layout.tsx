import "../global.css";
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import 'react-native-reanimated';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Poppins-Regular': Poppins_400Regular,
        'Poppins-Medium': Poppins_500Medium,
        'Poppins-SemiBold': Poppins_600SemiBold,
      });
      setFontLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null; // or a loading screen
  }

  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}