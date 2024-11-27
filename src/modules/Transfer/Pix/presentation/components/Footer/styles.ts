import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';

import { IContainer } from './model';

export const Container = styled.View<IContainer>`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 16px 16px ${({ bottomInsets }) => bottomInsets + 16}px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${Platform.OS === 'android'
    ? css`
        elevation: 6px;
      `
    : css`
        box-shadow: 0px -1px 4px ${({ theme }) => theme.colors.darkGray}1f;
      `}
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.MontserratRegular};
  font-size: 14px;
  line-height: 16px;
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.MontserratBold};
  font-size: 18px;
`;
