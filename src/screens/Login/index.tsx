import React, { useRef, useState } from "react";

import {
  ScrollView,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Keyboard
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components/native";
import { Root, Popup } from "popup-ui-new";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useUserController } from "../../hooks/UserController/userController";

import LogoSVG from "../../assets/logo.svg";
import { Input } from "../../components/input";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const USER_STORAGE = "@supabase:user";

import {
  Button,
  ButtonText,
  Container,
  SubTitle,
  Title,
  UnderLineText,
} from "./styles";

interface UserResponseProps {
  created_at: string;
  email: string;
  id: number;
  name: string;
  username: string;
}


export function Login() {
  const passWordRef = useRef<TextInput>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { EmailSignInAuth, getUserByEmail, setUserData } = useUserController();

  const { colors } = useTheme();
  const navigation = useNavigation();

  function handleSignup() {
    navigation.navigate("Signup");
  }

  async function handleLogin() {
    const data: any = await EmailSignInAuth(email, password);

    if (data.message === "Invalid login credentials") {

      return Popup.show({
        type: "Danger",
        title: "Login",
        button: true,
        textBody: "E-mail e/ou senha inválidos",
        buttonText: "Ok",
        callback: () => Popup.hide()
      });
    }

    const user: UserResponseProps[] = await getUserByEmail(data.user.email);

    setUserData(user[0]);
    await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user[0]));
    navigation.navigate("Home");
  }

  return (
    <Root>
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
            value={email}
            onChangeText={setEmail}
            onSubmitEditing={() => passWordRef.current.focus()}
            blurOnSubmit={false}
          />

          <Input
            ref={passWordRef}
            iconName="lock"
            secureTextEntry={true}
            placeholder="Digite sua senha"
            label="Sua senha"
            value={password}
            onChangeText={setPassword}
            type="password"
            onSubmitEditing={() => Keyboard.dismiss()}
            blurOnSubmit={false}
          />

          <Button as={TouchableOpacity} onPress={handleLogin} activeOpacity={0.8}>
            <ButtonText>Entrar na plataforma</ButtonText>
          </Button>

          <UnderLineText>Esqueceu sua senha?</UnderLineText>

          <TouchableOpacity onPress={handleSignup}>
            <UnderLineText>Não possui conta? crie uma agora!</UnderLineText>
          </TouchableOpacity>

        </ScrollView>
      </Container>
    </Root>
  );
}
