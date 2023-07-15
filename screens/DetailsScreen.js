import React, { useContext } from "react";
import { Text, View, Button } from "react-native";
import { ThemeContext } from "./../contexts/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";

const DetailsScreen = ({ navigation }) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "theme.ui",
      }}>
      <Text style={{ backgroundColor: theme.textColor }}>
        The way of the king
      </Text>
      <Text style={{ backgroundColor: theme.textColor }}>
        the name of the wind
      </Text>
      <Text>the final empire </Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.goBack()}
        style={{ backgroundColor: theme.ui }}
      />
      <ThemeToggle />
    </View>
  );
};

export default DetailsScreen;
