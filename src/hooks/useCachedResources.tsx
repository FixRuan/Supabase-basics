import { useState, useEffect } from "react";

import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export function useCachedResources(): boolean {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    (async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          Inter_400Regular,
          Inter_600SemiBold,
          Inter_700Bold,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    })();

  }, []);

  return isLoadingComplete;
}
