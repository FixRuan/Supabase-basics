import React from "react";

import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components/native";
import { Feather } from "@expo/vector-icons";


import {
  BulletWrapper,
  Container,
  Form,
  Header,
  SectionTitle,
  Title,
} from "./styles";
import { Bullet } from "../../components/Bullet";
import { TextInput } from "../../components/TextInput";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";


export function Signup() {
  const { colors } = useTheme();
  const navigation = useNavigation();

  function handleNextSignUp() {
    navigation.navigate("NextSignup");
  }

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

      <Form>
        <Title>cadastre-se{"\n"}abaixo</Title>
        <SectionTitle>1. Dados</SectionTitle>

        <TextInput
          iconName="people-alt"
          placeholder="Nome"
          autoCapitalize="words"
        />

        <TextInput
          iconName="mail"
          keyboardType="email-address"
          placeholder="E-mail"
          autoCapitalize="none"
        />

        <TextInput
          iconName="account-box"
          placeholder="Usuário"
          autoCapitalize="none"
        />

      </Form>

      <Button
        title="Próximo"
        bgColor={colors.green}
        color={colors.black}
        onPress={handleNextSignUp}
        activeOpacity={0.7}
      />
    </Container>
  );
}
