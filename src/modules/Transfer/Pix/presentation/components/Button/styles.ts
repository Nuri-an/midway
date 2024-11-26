import styled from 'styled-components/native';

import { IContainer } from './model';

export const Container = styled.TouchableOpacity<IContainer>`
  background-color: ${({ theme, disabled }) =>
    theme.colors[disabled ? 'lightGray' : 'primary']};
  padding: 7px 16px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.MontserratRegular};
  font-size: 14px;
  line-height: 18px;
`;
