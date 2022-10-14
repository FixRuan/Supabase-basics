import React, { useState } from "react";
import { TextInputProps, TouchableOpacity, View } from "react-native";

import {
  Container,
  Input as Inputt,
  InputLabel,
} from "./styles";

import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

interface InputProps extends TextInputProps {
  label: string;
  iconName: React.ComponentProps<typeof MaterialIcons>["name"];
  type?: "password";
  value?: string;
}

export function Input({ value, type, iconName, label, ...rest }: InputProps) {
  const [hidePassword, setHidePassword] = useState(true);
  const [isFocused, setIsfocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { colors } = useTheme();

  function handleHidePassword() {
    setHidePassword(!hidePassword);
  }

  function handleInputFocus() {
    setIsfocused(true);
  }

  function handleInputBlur() {
    setIsfocused(false);
    setIsFilled(!!value);
  }

  return (
    <View>
      <InputLabel>{label}</InputLabel>
      <Container>
        <MaterialIcons
          name={iconName}
          size={22}
          color={isFocused || isFilled && value != "" ? colors.green : colors.gray100}
        />

        <Inputt
          {...rest}
          placeholderTextColor={colors.gray100}
          secureTextEntry={hidePassword}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />

        {type && (
          <TouchableOpacity onPress={handleHidePassword}>
            <Feather
              name={hidePassword ? "eye" : "eye-off"}
              size={20}
              color={colors.gray100}
            />
          </TouchableOpacity>
        )}
      </Container>
    </View>
  );
}
