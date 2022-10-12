import styled from "styled-components/native";

export const Container = styled.View`
   width: 100%;
   min-height: 36px;
   background-color: ${({ theme }) => theme.colors.inputShape};
   border-radius: 4px;
   padding: 6px;
   align-items: center;
   flex-direction: row;
   margin-bottom: -20px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 28px;
  color: ${({ theme }) => theme.colors.white};
  padding-left: 6px;
`;

export const InputLabel = styled.Text`
  margin-top: 36px;
  margin-bottom: 12px;
  align-self: flex-start;
  font-family: ${({ theme }) => theme.fonts.Inter.semiBold};
  color: ${({ theme }) => theme.colors.gray300};
`;
