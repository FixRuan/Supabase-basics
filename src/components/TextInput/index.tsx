import React from "react";
import { TextInput as RNInput, TextInputProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import { Container, Input } from "./styles";

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof MaterialIcons>["name"];
  placeholder: string;
}

export function TextInput({
  iconName,
  placeholder,
  ...rest
}: Props) {

  const { colors } = useTheme();
  const blur = false;

  return (
    <Container focused={false}>
      <MaterialIcons
        name={iconName}
        size={24}
        color={blur ? colors.green : colors.gray100}
      />

      <Input
        {...rest}
        as={RNInput}
        placeholder={placeholder}
        placeholderTextColor={colors.gray100}
      />
    </Container>
  );
}
