import React, { useEffect } from "react";
import { BackHandler } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components/native";

import { Button } from "../../components/Button";
import { useUserController } from "../../hooks/UserController/userController";

import { Container, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const { colors } = useTheme();
  const { userData, signOut, isLoading } = useUserController();
  const navigation = useNavigation();

  async function handleSignOut() {
    await signOut();
    navigation.navigate("login");
  }

  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", () => true);
    return () => backHandler.remove();
  }, []);

  return (
    <Container>
      <StatusBar style="light" translucent={false} backgroundColor={colors.background} />
      {!isLoading && userData != null && (
        <>
          <Title>{userData.id}</Title>
          <Title>{userData.created_at}</Title>
          <Title>{userData.name}</Title>
          <Title>{userData.email}</Title>
          <Title>{userData.username}</Title>
          <Title>{userData.password}</Title>

          <Button
            title="Logout"
            bgColor={colors.green}
            color={colors.black}
            onPress={handleSignOut}
          />
        </>
      )}
    </Container>
  );
}
