import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import AnimatedSplash from "./components/AnimatedSplash";
import * as Font from "expo-font";
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { Text, View, ActivityIndicator } from "react-native";

export default function Index() {
  const [showSplash, setShowSplash] = useState(true);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const router = useRouter();

  // Carregar fontes antes de renderizar a tela
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Inter_400Regular,
        Inter_700Bold,
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      setTimeout(() => setShowSplash(false), 3000);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#049DDE" />
      </View>
    );
  }

  if (showSplash) return <AnimatedSplash />;

  router.push("/onboarding");
  return null;
}
