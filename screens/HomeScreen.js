import React from "react";
import BaseView from "../components/baseCoreComponents/BaseView/BaseView";
import BaseText from "../components/baseCoreComponents/BaseText/BaseText";
import BaseButton from "../components/baseCoreComponents/BaseButton/BaseButton";

function HomeScreen({ navigation }) {
  return (
    <BaseView
      variant="bg"
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <BaseText>Home Screen</BaseText>
      <BaseButton
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </BaseView>
  );
}
export default HomeScreen;
