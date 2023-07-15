import React from "react";
import BaseView from "../../components/baseCoreComponents/BaseView/BaseView";
import BaseText from "../../components/baseCoreComponents/BaseText/BaseText";
import BaseButton from "../../components/baseCoreComponents/BaseButton/BaseButton";

function ResetPasswordScreen({ navigation }) {
  return (
    <BaseView variant="bg">
      <BaseText variant="heading">Forgot Password Screen</BaseText>
      <BaseButton title="Sign in" onPress={() => navigation.navigate("Home")} />
    </BaseView>
  );
}

export default ResetPasswordScreen;
