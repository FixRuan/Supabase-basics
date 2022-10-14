import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Login } from "./screens/Login";
import { Signup } from "./screens/Signup";
import { NextSignup } from "./screens/NextSignup";
import { FinishSignUp } from "./screens/FinishSignUp";
import { Home } from "./screens/Home";
import { useUserController } from "./hooks/UserController/userController";

const { Screen, Navigator, Group } = createStackNavigator();

export function StackRoute() {
  const { userData } = useUserController();

  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      {userData != null ? (
        <Group>
          <Screen name="Home" component={Home} />
        </Group>
      ) : (
        <Group>
          <Screen name="login" component={Login} />
          <Screen name="Signup" component={Signup} />
          <Screen name="NextSignup" component={NextSignup} />
          <Screen name="FinishSignUp" component={FinishSignUp} />
        </Group>
      )}
    </Navigator>
  );
}
