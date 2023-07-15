import { StyleSheet } from "react-native";

export const baseTextInputStyles = StyleSheet.create({
  baseTextInput: {
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 15,
  },
});

export const roundedTextInputStyles = StyleSheet.create({
  roundedTextInput: {
    borderRadius: 20,
  },
});

export const compactTextInputStyles = StyleSheet.create({
  compactTextInput: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
});

export const outlinedTextInputStyles = StyleSheet.create({
  outlinedTextInput: {
    borderWidth: 1,
    borderColor: "#999999",
    paddingHorizontal: 12,
  },
});

export const errorTextInputStyles = StyleSheet.create({
  errorTextInput: {
    borderColor: "#f44336",
  },
});

export const successTextInputStyles = StyleSheet.create({
  successTextInput: {
    borderColor: "#4caf50",
  },
});

export const multilineTextInputStyles = StyleSheet.create({
  multilineTextInput: {
    height: 100,
    textAlignVertical: "top",
  },
});

export const passwordTextInputStyles = StyleSheet.create({
  passwordTextInput: {
    // Password input styles here
    // For example:
    secureTextEntry: true,
  },
});

export const searchTextInputStyles = StyleSheet.create({
  searchTextInput: {
    // Search input styles here
    // For example:
    borderWidth: 1,
    borderColor: "#999999",
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#ffffff",
  },
});

export const disabledTextInputStyles = StyleSheet.create({
  disabledTextInput: {
    opacity: 0.5,
  },
});

export const highlightedTextInputStyles = StyleSheet.create({
  highlightedTextInput: {
    // Highlighted input styles here
    // For example:
    backgroundColor: "#ffffcc",
  },
});

export const largeTextInputStyles = StyleSheet.create({
  largeTextInput: {
    fontSize: 22,
  },
});

export const smallTextInputStyles = StyleSheet.create({
  smallTextInput: {
    fontSize: 14,
  },
});

export const uppercaseTextInputStyles = StyleSheet.create({
  uppercaseTextInput: {
    textTransform: "uppercase",
  },
});

export const numericTextInputStyles = StyleSheet.create({
  numericTextInput: {
    // Numeric input styles here
    // For example:
    keyboardType: "numeric",
  },
});

export const underlineTextInputStyles = StyleSheet.create({
  underlineTextInput: {
    textDecorationLine: "underline",
  },
});

export const transparentTextInputStyles = StyleSheet.create({
  transparentTextInput: {
    backgroundColor: "transparent",
  },
});

export const placeholderTextInputStyles = StyleSheet.create({
  placeholderTextInput: {
    // Placeholder input styles here
    // For example:
    color: "#999999",
  },
});

export const maxLengthTextInputStyles = StyleSheet.create({
  maxLengthTextInput: {
    // Max length input styles here
    // For example:
    maxLength: 100,
  },
});
