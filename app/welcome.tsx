import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";
import { Image } from "expo-image";

export default function Welcome() {
  const router = useRouter();

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content" // Texto branco na StatusBar
      />
      <View style={styles.container}>
        <Image
          source={require("../assets/images/car.svg")}
          style={{ width: 96, height: 82 }}
        />
        <Text style={styles.title}>KandoGoo</Text>
        <Text style={styles.subtitle}>Conectando caminhos, movendo vidas!</Text>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => router.push("/verification")}
        >
          <Text style={styles.continueText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#049DDE",
    paddingTop: StatusBar.currentHeight, // Ajusta o padding para evitar sobreposição
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginVertical: 10,
  },
  continueButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    width: 200,
    alignItems: "center",
    marginTop: 20,
  },
  continueText: {
    color: "#049DDE",
    fontSize: 16,
    fontWeight: "bold",
  },
});
