import styled from "styled-components/native";

export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Inter.semiBold};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
`;
