import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  padding-top: ${(StatusBar.currentHeight || 0) + 16}px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ContainerHeaderLeft = styled.View`
  margin-left: 16px;
  width: 32px;
  height: 32px;
  border-radius: 200px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryLight};
`;
