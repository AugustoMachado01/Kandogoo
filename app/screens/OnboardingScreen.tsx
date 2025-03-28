import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <ImageBackground
        source={require("../../assets/images/home.png")}
        style={styles.container}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>
            Bem-vindos ao Futuro com <Text style={styles.bold}>KandoGoo</Text>
          </Text>
          <Text style={styles.subtitle}>
            Viagens mais inteligentes, seguras e econômicas
          </Text>
          <Text style={styles.description}>
            Economize até 50% compartilhando sua viagem com outros passageiros
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/login")}
          >
            <Text style={styles.buttonText}>Começar agora</Text>
          </TouchableOpacity>

          <Text style={styles.link}>Já tem uma conta</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 404,
  },
  title: {
    fontSize: 24,
    color: "#FFFFFF",
  },
  bold: {
    fontWeight: "bold",
    color: "#049DDE",
  },
  subtitle: {
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: "#FFFFFF",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#049DDE",
    padding: 12,
    borderRadius: 5,
    marginTop: 20,
    width: 229,
    alignSelf: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  link: {
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 10,
  },
});
