import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  column-gap: 16px;
`;

export const ContentDot = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 200px;
  border-width: 1px;
  padding: 3px;
  border-color: ${({ theme }) => theme.colors.primary};
`;

export const Dot = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 200px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
