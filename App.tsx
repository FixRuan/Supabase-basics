import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackRoute } from "./src/Router";


export default function App() {
  return (
    <NavigationContainer>
      <StackRoute />
    </NavigationContainer>
  );
}
