import styled from "styled-components/native";

interface ContainerProps {
  bgColor: string;
}

interface ButtonTitleProps {
  color: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
   width: 100%;
   height: 42px;
   background-color: ${({ bgColor }) => bgColor};
   align-items: center;
   justify-content: center;
`;

export const ButtonTitle = styled.Text<ButtonTitleProps>`
    color: ${({ color }) => color};
    font-family: ${({ theme }) => theme.fonts.Inter.semiBold};
    font-size: 16px;
`;
