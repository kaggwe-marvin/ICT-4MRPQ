import { StyleSheet } from "react-native";

export const baseViewStyles = StyleSheet.create({
  baseView: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    marginTop: 10,
  },
});

export const variant1Styles = StyleSheet.create({
  variantView: {
    // Variant 1 styles here
    // For example:
    borderColor: "#333333",
    borderWidth: 1,
  },
});

export const variant2Styles = StyleSheet.create({
  variantView: {
    // Variant 2 styles here
    // For example:
    backgroundColor: "#f0f0f0",
  },
});

export const fullWidthViewStyles = StyleSheet.create({
  fullWidthView: {
    width: "100%",
  },
});

export const fullHeightViewStyles = StyleSheet.create({
  fullHeightView: {
    height: "100%",
  },
});

export const centeredViewStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const horizontalViewStyles = StyleSheet.create({
  horizontalView: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export const verticalViewStyles = StyleSheet.create({
  verticalView: {
    flexDirection: "column",
    alignItems: "center",
  },
});

export const paddedViewStyles = StyleSheet.create({
  paddedView: {
    padding: 20,
  },
});

export const spacedViewStyles = StyleSheet.create({
  spacedView: {
    justifyContent: "space-between",
  },
});

export const flexViewStyles = StyleSheet.create({
  flexView: {
    flex: 1,
  },
});

export const bgViewStyles = StyleSheet.create({
  variantView: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    marginBottom: 0,
    padding: 16,
  },
});
