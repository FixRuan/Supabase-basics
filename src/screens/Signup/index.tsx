import React, { useRef, useState } from "react";
import { Alert, ScrollView, TouchableOpacity, Keyboard } from "react-native";

import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

import { Bullet } from "../../components/Bullet";
import { TextInput } from "../../components/TextInput";
import { Button } from "../../components/Button";

import {
  BulletWrapper,
  Container,
  Form,
  Header,
  SectionTitle,
  Title,
} from "./styles";

const schema = Yup.object().shape({
  username: Yup.string().required("Username é obrigatório"),
  email: Yup.string()
    .email("Digite um e-mail válido")
    .required("E-mail é obrigatório"),
  name: Yup.string().required("Nome é obrigatório"),
});

export function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const emailRef = useRef(null);
  const usernameRef = useRef(null);

  const { colors } = useTheme();
  const navigation = useNavigation();

  async function handleNextSignUp() {
    try {
      const userData = await schema.validate({
        name: name.trim(),
        email: email.trim(),
        username: username.trim()
      });

      navigation.navigate("NextSignup", { user: userData });

    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert(error.message);
      }
    }

  }

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
            value={name}
            onChangeText={setName}
            onSubmitEditing={() => emailRef.current.focus()}
            blurOnSubmit={false}
          />

          <TextInput
            ref={emailRef}
            iconName="mail"
            keyboardType="email-address"
            placeholder="E-mail"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            onSubmitEditing={() => usernameRef.current.focus()}
            blurOnSubmit={false}
          />

          <TextInput
            ref={usernameRef}
            iconName="account-box"
            placeholder="Usuário"
            autoCapitalize="none"
            value={username}
            onChangeText={setUsername}
            onSubmitEditing={() => Keyboard.dismiss()}
            blurOnSubmit={false}
          />

        </Form>

        <Button
          title="Próximo"
          bgColor={colors.green}
          color={colors.black}
          onPress={handleNextSignUp}
          activeOpacity={0.7}
        />

      </ScrollView>
    </Container>
  );
}
