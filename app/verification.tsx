import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";

export default function VerificationScreen() {
  const router = useRouter();
  const inputRefs = useRef<Array<TextInput | null>>([]);
  const [code, setCode] = useState(["", "", "", ""]);

  const handleChangeText = (text: string, index: number) => {
    const newCode = [...code];

    if (text.length === 1) {
      newCode[index] = text;
      setCode(newCode);

      if (index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    } else if (text.length === 2) {
      newCode[index] = text[1]; // Mantém apenas o último número digitado
      setCode(newCode);

      if (index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace") {
      const newCode = [...code];

      if (newCode[index] === "") {
        if (index > 0) {
          newCode[index - 1] = "";
          inputRefs.current[index - 1]?.focus();
        }
      } else {
        newCode[index] = "";
      }

      setCode(newCode);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Código de Verificação</Text>
      <Text style={styles.subtitle}>
        Foi enviado um código no seu número para acessar a sua conta:
        <Text style={{ fontWeight: "bold" }}> +244 922 222 22</Text>
      </Text>

      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChangeText(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            textAlign="center"
          />
        ))}
      </View>

      <Text style={styles.resendText}>
        Não recebeu o código?
        <Text style={styles.resendLink}> Reenviar</Text>
      </Text>

      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => router.push("/welcome")}
      >
        <Text style={styles.continueText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 14, textAlign: "center", marginBottom: 20 },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  resendText: { fontSize: 14, marginBottom: 20 },
  resendLink: { color: "#049DDE", fontWeight: "bold" },
  continueButton: {
    backgroundColor: "#049DDE",
    padding: 10,
    borderRadius: 10,
    width: 324,
    height: 58,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  continueText: {
    color: "#ffffff",
    fontSize: 15,
    fontFamily: "Inter",
    fontWeight: 500,
  },
});
