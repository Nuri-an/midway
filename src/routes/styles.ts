import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  padding-top: ${(StatusBar.currentHeight || 0) + 16}px;
  background-color: ${({ theme }) => theme.colors.white};
`;
