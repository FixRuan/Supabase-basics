import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.background};
   align-items: center;
   padding: 24px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Inter.bold};
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin: 62px 0px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 4px 16px;
  border-radius: 2px;
`;

export const ButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Inter.semiBold};
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.black};
`;
