import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.SafeAreaView`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.background};
   padding-bottom: ${getBottomSpace()} + 4px;
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
  margin-bottom: 28px;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 12px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green};
  height: 42px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.Inter.semiBold};
`;

export const UnderLineText = styled(SubTitle)`
  text-decoration: underline;
  margin-bottom: 12px;
`;
