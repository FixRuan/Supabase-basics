import { StatusBar } from "expo-status-bar";
import React from "react";
import { useTheme } from "styled-components/native";

import LogoSVG from "../../assets/logo.svg";
import { Input } from "../../components/input";

import {
  Container, SubTitle, Title,
} from "./styles";

export function Login() {
  const { colors } = useTheme();

  return (
    <Container>
      <StatusBar style="light" translucent={false} backgroundColor={colors.background} />

      <LogoSVG width={120} />

      <Title>Supabase</Title>
      <SubTitle>Faça login e começe a usar!</SubTitle>

      <Input
        iconName="email"
        placeholder="Digite seu e-mail"
        label="Endereço de email"
        keyboardType="email-address"
      />
      <Input
        iconName="lock"
        secureTextEntry={true}
        placeholder="Digite sua senha"
        label="Sua senha"
      />
    </Container>
  );
}
