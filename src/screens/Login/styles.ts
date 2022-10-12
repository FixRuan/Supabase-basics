import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.background};
   padding: 0px 24px;
   align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Inter.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(28)}px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Inter.regular};
  color: ${({ theme }) => theme.colors.gray100};
  font-size: ${RFValue(14)}px;
`;
