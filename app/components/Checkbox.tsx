import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface CheckboxProps {
  checked: boolean;
  onToggle: (value: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onToggle }) => {
  return (
    <TouchableOpacity
      style={[styles.checkbox, checked && styles.checked]}
      onPress={() => onToggle(!checked)}
      activeOpacity={0.7}
    >
      {checked && <AntDesign name="check" size={20} color="white" />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#049DDE",
    justifyContent: "center",
    alignItems: "center",
  },
  checked: {
    backgroundColor: "#049DDE",
  },
});

export default Checkbox;
