import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./screens/Home";
import { NewContact } from "./screens/NewContact";
import { Login } from "./screens/Login";

const { Screen, Navigator } = createStackNavigator();

export function StackRoute() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
    </Navigator>
  );
}
