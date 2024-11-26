import styled from 'styled-components/native';

export const Wrapper = styled.Modal``;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  row-gap: 24px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.MontserratBold};
  font-size: 24px;
  line-height: 28px;
  text-align: center;
`;
