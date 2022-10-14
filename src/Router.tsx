import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Login } from "./screens/Login";
import { Signup } from "./screens/Signup";
import { NextSignup } from "./screens/NextSignup";

const { Screen, Navigator } = createStackNavigator();

export function StackRoute() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      <Screen name="Signup" component={Signup} />
      <Screen name="NextSignup" component={NextSignup} />
    </Navigator>
  );
}
