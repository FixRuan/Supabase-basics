import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components/native";

import { PasswordInput } from "../../components/PasswordInput";
import { Bullet } from "../../components/Bullet";
import { Button } from "../../components/Button";


import {
  BulletWrapper,
  Container,
  Form,
  Header,
  SectionTitle,
  Title
} from "./styles";


export function NextSignup() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { colors } = useTheme();
  const navigation = useNavigation();

  function handleGoback() {
    navigation.goBack();
  }

  return (
    <Container>
      <StatusBar style="light" translucent={false} backgroundColor={colors.background} />
      <ScrollView>
        <Header>
          <TouchableOpacity onPress={handleGoback}>
            <Feather size={24} name="arrow-left" color={colors.gray200} />
          </TouchableOpacity>

          <BulletWrapper>
            <Bullet />
            <Bullet active />
          </BulletWrapper>
        </Header>

        <Form>
          <Title>cadastre-se{"\n"}abaixo</Title>
          <SectionTitle>2. Senha</SectionTitle>

          <PasswordInput
            placeholder="Senha"
            iconName="lock"
            value={password}
            onChangeText={setPassword}
          />

          <PasswordInput
            placeholder="Confirmar senha"
            iconName="lock"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

        </Form>

        <Button
          title="Cadastrar"
          bgColor={colors.green}
          color={colors.black}
          onPress={() => console.log("🔥")}
          activeOpacity={0.7}
        />

      </ScrollView>
    </Container>
  );
}
