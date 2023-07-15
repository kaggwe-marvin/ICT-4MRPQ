// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screen imports
import DetailsScreen from "./screens/DetailsScreen";
import HomeScreen from "./screens/HomeScreen";
import ThemeContextProvider from "./contexts/ThemeContext";
import LoginScreen from "./screens/authScreens/LoginScreen";
import RegisterScreen from "./screens/authScreens/RegisterScreen";
import LandingScreen from "./screens/authScreens/LandingScreen";
import ResetPasswordScreen from "./screens/authScreens/ResetPasswordScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ThemeContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen
              name="Landing"
              component={LandingScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Reset"
              component={ResetPasswordScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Group>
          <Stack.Group
            screenOptions={{
              headerStyle: { backgroundColor: "theme.ui" },
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContextProvider>
  );
}

export default App;
