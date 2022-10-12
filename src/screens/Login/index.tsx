import { StatusBar } from "expo-status-bar";
import React from "react";
import { useTheme } from "styled-components/native";

import {
  Container, SubTitle, Title
} from "./styles";

export function Login() {
  const { colors } = useTheme();

  return (
    <Container>
      <StatusBar style="light" translucent={false} backgroundColor={colors.background} />

      <Title>Supabase</Title>
      <SubTitle>Faça login e começe a usar!</SubTitle>
    </Container>
  );
}
