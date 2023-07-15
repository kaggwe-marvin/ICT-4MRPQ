import React, { useContext } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <View>
      <TouchableOpacity onPress={toggleTheme}>
        <Text>Toggle the theme</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ThemeToggle;
