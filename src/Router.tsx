import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Login } from "./screens/Login";
import { Signup } from "./screens/Signup";
import { NextSignup } from "./screens/NextSignup";
import { FinishSignUp } from "./screens/FinishSignUp";
import { Home } from "./screens/Home";

const { Screen, Navigator, Group } = createStackNavigator();

export function StackRoute() {
  return (
    <Navigator initialRouteName="login" screenOptions={{ headerShown: false }}>
      <Group>
        <Screen name="login" component={Login} />
        <Screen name="Signup" component={Signup} />
        <Screen name="NextSignup" component={NextSignup} />
        <Screen name="FinishSignUp" component={FinishSignUp} />
      </Group>

      <Group>
        <Screen name="Home" component={Home} />
      </Group>
    </Navigator>
  );
}
