import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  margin-left: 16px;
  width: 32px;
  height: 32px;
  border-radius: 200px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryLight};
`;
