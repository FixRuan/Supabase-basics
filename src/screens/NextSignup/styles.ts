import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.background};
   padding: 0px 24px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0px;
  margin-bottom: 6px;
`;

export const BulletWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Form = styled.View`
  margin-bottom: 48px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Inter.bold};
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 24px;
`;

export const SectionTitle = styled.Text`
   font-family: ${({ theme }) => theme.fonts.Inter.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.gray200};
  margin-bottom: 24px;
`;
