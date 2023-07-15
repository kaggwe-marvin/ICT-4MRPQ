import React from "react";
import BaseView from "../../components/baseCoreComponents/BaseView/BaseView";
import BaseText from "../../components/baseCoreComponents/BaseText/BaseText";
import BaseButton from "../../components/baseCoreComponents/BaseButton/BaseButton";
function LandingScreen({ navigation }) {
  return (
    <BaseView variant="bg">
      <BaseText>Welcome Screen</BaseText>

      <BaseButton
        variant="roundedButton"
        title="Sign up"
        onPress={() => navigation.navigate("Register")}
      />
      <BaseButton
        variant="roundedButton"
        title="Sign in"
        onPress={() => navigation.navigate("Login")}
      />
    </BaseView>
  );
}

export default LandingScreen;
