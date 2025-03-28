import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Foto de Perfil</Text>
      <View style={styles.photoPlaceholder} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/auth /VerificationScreen")}
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  photoPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#CCC",
    marginBottom: 20,
  },
  button: { backgroundColor: "#049DDE", padding: 12, borderRadius: 5 },
  buttonText: { color: "#FFF", fontWeight: "bold", textAlign: "center" },
});
