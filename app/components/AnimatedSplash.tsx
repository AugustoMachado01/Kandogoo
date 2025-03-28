import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

export default function AnimatedSplash() {
  const [showBlueScreen, setShowBlueScreen] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowBlueScreen(true), 1500);
  }, []);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: showBlueScreen ? "#009FE3" : "#FFFFFF" },
      ]}
    >
      {showBlueScreen && <Text style={styles.text}>KandoGoo</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
  },
});
