import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Checkbox from "./components/Checkbox";
import { router } from "expo-router";

export default function LoginScreen() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} // Teste valores como 120 se necessário
        style={styles.flex}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="interactive"
          >
            <View style={styles.inner}>
              <Text style={styles.title}>KandoGoo</Text>
              <Text style={styles.subtitle}>
                Transformando a mobilidade em uma experiência segura
              </Text>

              <Text style={styles.label}>Nome</Text>
              <View style={styles.inputContainer}>
                <Feather
                  name="user"
                  size={20}
                  color="#888"
                  style={styles.icon}
                />
                <TextInput style={styles.input} placeholder="Digite seu nome" />
              </View>

              <Text style={styles.label}>Senha</Text>
              <View style={styles.inputContainer}>
                <Feather
                  name="lock"
                  size={20}
                  color="#888"
                  style={styles.icon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Digite sua senha"
                  secureTextEntry
                />
              </View>

              <Text style={styles.label}>Telefone</Text>
              <View style={styles.inputContainer}>
                <Feather
                  name="phone"
                  size={20}
                  color="#888"
                  style={styles.icon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="+244 929 222 222"
                  keyboardType="phone-pad"
                />
              </View>

              <View style={styles.checkboxContainer}>
                <Checkbox
                  checked={isChecked}
                  onToggle={() => setIsChecked(!isChecked)}
                />
                <Text style={styles.checkboxText}>
                  Aceito os termos de responsabilidade da KandoGoo
                </Text>
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("/foto-perfil")}
              >
                <Text style={styles.buttonText}>Continuar</Text>
              </TouchableOpacity>

              <Text style={styles.loginText}>
                Já tem uma conta?
                <Text style={styles.loginLink}> Entre agora</Text>
              </Text>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  flex: {
    flex: 1, // Mantém o layout responsivo
  },
  scrollContainer: {
    flexGrow: 1,
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 37,
    letterSpacing: 3,
    fontFamily: "Inter_700Bold",
    color: "#049DDE",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 12,
    fontFamily: "Inter_600Regular",
    color: "#000000",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 15,
    fontFamily: "Inter_400Bold",
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DADADA",
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 17,
    fontFamily: "Inter_500Regular",
    color: "#1E1E1E",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxText: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    color: "#555",
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#049DDE",
    padding: 14,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Inter_700Bold",
    color: "#fff",
  },
  loginText: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    color: "#555",
    textAlign: "center",
    marginTop: 20,
  },
  loginLink: {
    fontFamily: "Inter_700Bold",
    color: "#049DDE",
  },
});
