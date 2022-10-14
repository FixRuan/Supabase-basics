import styled from "styled-components/native";

interface ContainerProps {
  focused?: boolean;
}

export const Container = styled.View<ContainerProps>`
   width: 100%;
   height: 38px;
   margin-bottom: 20px;
   flex-direction: row;
   align-items: center;
   padding: 0px 12px;
   border-bottom-width: 1px;
   border-bottom-color: ${({ theme, focused }) =>
    focused ? theme.colors.green : "transparent"};
`;

export const Input = styled.TextInput`
  flex: 1;
  margin-left: 18px;
  color: ${({ theme }) => theme.colors.white};
`;
