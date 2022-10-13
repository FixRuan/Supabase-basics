import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";

import LogoSVG from "../../assets/logo.svg";
import { Input } from "../../components/input";

import {
  Button,
  ButtonText,
  Container,
  SubTitle,
  Title,
  UnderLineText,
} from "./styles";

import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export function Login() {
  const { colors } = useTheme();
  const navigation = useNavigation();

  function handleSignup() {
    navigation.navigate("Signup");
  }

  return (
    <Container styled={{ width: windowWidth, minHeight: windowHeight }}>
      <StatusBar style="light" translucent={false} backgroundColor={colors.background} />

      <ScrollView style={{ paddingHorizontal: 24 }} contentContainerStyle={{
        alignItems: "center"
      }}>

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

        <Button as={TouchableOpacity} activeOpacity={0.8}>
          <ButtonText>Entrar na plataforma</ButtonText>
        </Button>

        <UnderLineText>Esqueceu sua senha?</UnderLineText>

        <TouchableOpacity onPress={handleSignup}>
          <UnderLineText>Não possui conta? crie uma agora!</UnderLineText>
        </TouchableOpacity>

      </ScrollView>
    </Container>
  );
}
