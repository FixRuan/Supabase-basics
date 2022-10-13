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
`;

export const BulletWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
