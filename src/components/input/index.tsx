import React from "react";
import { TextInputProps, View } from "react-native";

import {
  Container,
  Input as Inputt,
  InputLabel,
} from "./styles";

import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

interface InputProps extends TextInputProps {
  label: string;
  iconName: React.ComponentProps<typeof MaterialIcons>["name"];
  placeholder: string;
}

export function Input({ placeholder, iconName, label, ...rest }: InputProps) {
  const { colors } = useTheme();

  return (
    <View>
      <InputLabel>{label}</InputLabel>
      <Container>
        <MaterialIcons name={iconName} size={22} color={colors.gray100} />
        <Inputt
          {...rest}
          placeholder={placeholder}
          placeholderTextColor={colors.gray100}
        />
      </Container>
    </View>
  );
}
