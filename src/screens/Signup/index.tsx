import React from "react";

import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components/native";
import { Feather } from "@expo/vector-icons";


import {
  BulletWrapper,
  Container,
  Header,
  SectionTitle,
  Title,
} from "./styles";
import { Bullet } from "../../components/Bullet";
import { TextInput } from "../../components/TextInput";


export function Signup() {
  const { colors } = useTheme();

  return (
    <Container>
      <StatusBar style="light" translucent={false} backgroundColor={colors.background} />

      <Header>
        <Feather size={24} name="arrow-left" color={colors.gray200} />

        <BulletWrapper>
          <Bullet active />
          <Bullet />
        </BulletWrapper>
      </Header>

      <Title>cadastre-se{"\n"}abaixo</Title>
      <SectionTitle>1. Dados</SectionTitle>

      <TextInput
        iconName="people-alt"
        placeholder="Nome"
      />

      <TextInput
        iconName="mail"
        keyboardType="email-address"
        placeholder="E-mail"
      />

      <TextInput
        iconName="account-box"
        placeholder="Usuário"
      />
    </Container>
  );
}
