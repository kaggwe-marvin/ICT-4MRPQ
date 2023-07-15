import React from "react";
import BaseText from "../../components/baseCoreComponents/BaseText/BaseText";
import BaseTextInput from "./../../components/baseCoreComponents/BaseTextInput/BaseTextInput";
import BaseButton from "../../components/baseCoreComponents/BaseButton/BaseButton";
import BaseView from "../../components/baseCoreComponents/BaseView/BaseView";

function RegisterScreen({ navigation }) {
  return (
    <BaseView
      variant="bg"
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <BaseText variant="heading">Signup Screen</BaseText>
      <BaseTextInput placeholder="Email" variant="variant2" />
      <BaseTextInput placeholder="Password" variant="variant2" />
      <BaseButton
        title="Sign up"
        onPress={() => navigation.navigate("Login")}
      />
    </BaseView>
  );
}

export default RegisterScreen;
