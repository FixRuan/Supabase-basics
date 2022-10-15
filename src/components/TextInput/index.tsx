/* eslint-disable react/display-name */
import React, { forwardRef, useState } from "react";
import { TextInput as RNInput, TextInputProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import { Container, Input } from "./styles";

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof MaterialIcons>["name"];
  value?: string;
}

export const TextInput = forwardRef<RNInput, Props>(({ value, iconName, ...rest }, ref) => {
  const [isFocused, setIsfocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { colors } = useTheme();

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
        as={RNInput}
        placeholderTextColor={colors.gray100}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </Container>
  );
});
