import styled from "styled-components/native";

interface ContainerProps {
  active: boolean;
}

export const Container = styled.View<ContainerProps>`
   width: 12px;
   height: 12px;
   border-radius: 999px;
   background-color: ${({ theme, active }) =>
    active ? theme.colors.green : theme.colors.gray200};
   margin: 0px 2px;
`;
