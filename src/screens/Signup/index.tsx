import React from "react";

import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

import { Bullet } from "./Bullet";

import {
  BulletWrapper,
  Container,
  Header,
} from "./styles";


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
    </Container>
  );
}
