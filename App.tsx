import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackRoute } from "./src/Router";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./src/styles/theme";


export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <StackRoute />
      </NavigationContainer>
    </ThemeProvider>
  );
}
