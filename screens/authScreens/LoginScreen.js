import React from "react";
import BaseView from "../../components/baseCoreComponents/BaseView/BaseView";
import BaseText from "../../components/baseCoreComponents/BaseText/BaseText";
import BaseButton from "../../components/baseCoreComponents/BaseButton/BaseButton";
import BaseTextInput from "../../components/baseCoreComponents/BaseTextInput/BaseTextInput";

function LoginScreen({ navigation }) {
  return (
    <BaseView variant="bg">
      <BaseText variant="heading">Login Screen</BaseText>
      <BaseTextInput placeholder="Email" variant="variant2" />
      <BaseTextInput placeholder="Password" variant="variant2" />
      <BaseButton
        title="Sign in"
        onPress={() => navigation.navigate("Reset")}
      />
    </BaseView>
  );
}

export default LoginScreen;
