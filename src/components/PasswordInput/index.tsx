/* eslint-disable react/display-name */
import React, { forwardRef, useState } from "react";
import { TextInput, TextInputProps, TouchableOpacity } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import { Container, Input } from "./styles";

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof MaterialIcons>["name"];
  value?: string;
}

export const PasswordInput = forwardRef<TextInput, Props>((
  { iconName, value, ...rest }, ref
) => {
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
    <Container focused={isFocused}>
      <MaterialIcons
        name={iconName}
        size={24}
        color={isFocused || isFilled && value != "" ? colors.green : colors.gray100}
      />

      <Input
        ref={ref}
        {...rest}
        as={TextInput}
        placeholderTextColor={colors.gray100}
        secureTextEntry={hidePassword}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />

      <TouchableOpacity onPress={handleHidePassword}>
        <Feather
          name={hidePassword ? "eye" : "eye-off"}
          size={20}
          color={colors.gray100}
        />
      </TouchableOpacity>

    </Container>
  );
});
