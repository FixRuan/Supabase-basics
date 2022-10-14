import React from "react";
import { TouchableOpacityProps } from "react-native";

import {
  ButtonTitle,
  Container
} from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  bgColor: string;
  color: string;
}

export function Button({ title, bgColor, color, ...rest }: ButtonProps) {
  return (
    <Container bgColor={bgColor} {...rest}>
      <ButtonTitle color={color}>
        {title}
      </ButtonTitle>
    </Container>
  );
}
