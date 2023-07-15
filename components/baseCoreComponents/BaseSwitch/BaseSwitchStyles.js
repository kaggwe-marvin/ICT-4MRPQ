import { StyleSheet } from "react-native";

export const baseSwitchStyles = StyleSheet.create({
  baseSwitch: {
    marginBottom: 10,
  },
});

export const roundedSwitchStyles = StyleSheet.create({
  roundedSwitch: {
    borderRadius: 20,
  },
});

export const compactSwitchStyles = StyleSheet.create({
  compactSwitch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
});

export const labeledSwitchStyles = StyleSheet.create({
  labeledSwitch: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export const smallSwitchStyles = StyleSheet.create({
  smallSwitch: {
    transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }],
  },
});

export const disabledSwitchStyles = StyleSheet.create({
  disabledSwitch: {
    opacity: 0.5,
  },
});

export const customTrackSwitchStyles = StyleSheet.create({
  customTrackSwitch: {
    // Custom track styles here
  },
});

export const customThumbSwitchStyles = StyleSheet.create({
  customThumbSwitch: {
    // Custom thumb styles here
  },
});

export const primarySwitchStyles = StyleSheet.create({
  primarySwitch: {
    // Primary styles here
    // For example:
    trackColor: {
      false: "#1976d2",
      true: "#1976d2",
    },
  },
});

export const secondarySwitchStyles = StyleSheet.create({
  secondarySwitch: {
    // Secondary styles here
    // For example:
    trackColor: {
      false: "#9e9e9e",
      true: "#9e9e9e",
    },
  },
});

export const largeSwitchStyles = StyleSheet.create({
  largeSwitch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
});

export const toggleSwitchStyles = StyleSheet.create({
  toggleSwitch: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
  },
});

export const errorSwitchStyles = StyleSheet.create({
  errorSwitch: {
    // Error styles here
    // For example:
    trackColor: {
      false: "#f44336",
      true: "#f44336",
    },
  },
});

export const successSwitchStyles = StyleSheet.create({
  successSwitch: {
    // Success styles here
    // For example:
    trackColor: {
      false: "#4caf50",
      true: "#4caf50",
    },
  },
});
