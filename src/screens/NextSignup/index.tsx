import React, { useState } from "react";
import { Alert, ScrollView, TouchableOpacity } from "react-native";

import { useUserController } from "../../hooks/UserController/userController";

import * as Yup from "yup";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
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

interface ParamsProps {
  user: {
    name: string;
    email: string;
    username: string;
  }
}

const schema = Yup.object().shape({
  password: Yup.string().required("Senha obrigatória").min(6, "Mínimo de 6 caracteres"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Senhas devem ser iguais")
});

export function NextSignup() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { CreateUser } = useUserController();

  const { colors } = useTheme();
  const navigation = useNavigation();
  const { params } = useRoute();
  const { user } = params as ParamsProps;

  function handleGoback() {
    navigation.goBack();
  }

  async function handleNewAccount() {
    try {
      const passwords = await schema.validate({
        password: password.trim(),
        passwordConfirmation: confirmPassword.trim()
      });

      const newUser = {
        name: user.name,
        email: user.email,
        username: user.username,
        password: passwords.password,
      };


      const data = await CreateUser(newUser);

      if (data === "E-mail em uso") {
        return Alert.alert(data);
      }

      navigation.navigate("FinishSignUp");

    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert(error.message);
      }

      Alert.alert(error);
      console.log(error);
    }
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
          onPress={handleNewAccount}
          activeOpacity={0.7}
        />

      </ScrollView>
    </Container>
  );
}
