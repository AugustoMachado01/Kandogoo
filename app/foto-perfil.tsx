import React, { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function ProfilePictureScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    if (!permission) {
      requestPermission();
    }
  }, [permission]);

  const takePicture = async () => {
    if (cameraRef.current) {
      const picture = await cameraRef.current.takePictureAsync();

      if (picture && picture.uri) {
        // 🔹 Verifica se picture é válido
        setPhoto(picture.uri);
      } else {
        console.error("Erro ao capturar a foto.");
      }
    }
  };

  if (!permission || !permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>
          Precisamos de permissão para acessar a câmera.
        </Text>
        <TouchableOpacity
          onPress={requestPermission}
          style={styles.permissionButton}
        >
          <Text style={styles.permissionButtonText}>Conceder Permissão</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Foto de Perfil</Text>
      <Text style={styles.subtitle}>Faça uma foto neste tamanho</Text>

      <View style={styles.circle}>
        {photo ? (
          <Image source={{ uri: photo }} style={styles.image} />
        ) : (
          <CameraView ref={cameraRef} style={styles.camera} facing="front" />
        )}
      </View>

      <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
        <Ionicons name="camera" size={24} color="#049DDE" />
        <Text style={styles.captureText}>Fazer a Captura</Text>
      </TouchableOpacity>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => router.push("/verification")}
        >
          <Text style={styles.continueText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
  subtitle: { fontSize: 14, color: "#777", marginBottom: 20 },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: "#049DDE",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#EEE",
  },
  camera: { width: "100%", height: "100%" },
  image: { width: "100%", height: "100%" },
  captureButton: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  captureText: { marginLeft: 8, color: "#049DDE", fontSize: 16 },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 20,
    width: "100%",
  },
  backButton: {
    flex: 1,
    height: 34,
    borderWidth: 1,
    borderColor: "#049DDE",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  backText: {
    color: "#049DDE",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Inter",
    fontWeight: 400,
  },
  continueButton: {
    width: 174,
    height: 58,
    padding: 10,
    backgroundColor: "#049DDE",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  continueText: { color: "#FFF", fontSize: 16, textAlign: "center" },
  permissionContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  permissionText: { fontSize: 16, marginBottom: 20 },
  permissionButton: {
    padding: 10,
    backgroundColor: "#049DDE",
    borderRadius: 5,
  },
  permissionButtonText: { color: "#FFF", fontSize: 16 },
});
