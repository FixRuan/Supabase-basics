import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackRoute } from "./src/Router";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./src/styles/theme";
import { useCachedResources } from "./src/hooks/useCachedResources";
import { UserControllerProvider } from "./src/hooks/UserController/userController";


export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <UserControllerProvider>
        <NavigationContainer>
          <StackRoute />
        </NavigationContainer>
      </UserControllerProvider>
    </ThemeProvider>
  );
}
