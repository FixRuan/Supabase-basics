import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components/native";

import LogoSVG from "../../assets/logoWhite.svg";

import {
  Button,
  ButtonTitle,
  Container, Title
} from "./styles";
import { TouchableOpacity } from "react-native";

export function FinishSignUp() {
  const { colors } = useTheme();
  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate("Home");
  }

  return (
    <Container>
      <StatusBar style="light" translucent={false} backgroundColor={colors.background} />

      <LogoSVG width={140} />

      <Title>Cadastro Realizado{"\n"}com sucesso</Title>

      <Button onPress={handleGoHome} as={TouchableOpacity} activeOpacity={0.8}>
        <ButtonTitle>OK</ButtonTitle>
      </Button>
    </Container>
  );
}
