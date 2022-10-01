import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./screens/Home";
import { NewContact } from "./screens/NewContact";

const { Screen, Navigator } = createStackNavigator();

export function StackRoute() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="NewContact" component={NewContact} />
    </Navigator>
  );
}
