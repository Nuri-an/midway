import { Platform } from 'react-native';
import { SvgCssUri } from 'react-native-svg/css';
import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 15px;
  flex-direction: row;
  align-items: center;
  column-gap: 16px;
  border-radius: 8px;
  width: 100%;

  ${Platform.OS === 'android'
    ? css`
        elevation: 3px;
      `
    : css`
        box-shadow: 4px 2px 3px ${({ theme }) => theme.colors.darkGray}1f;
      `}
`;

export const Content = styled.View`
  row-gap: 8px;
`;

export const ContentTitle = styled.View`
  flex-direction: row;
  column-gap: 8px;
  align-items: center;
`;

export const Icon = styled(SvgCssUri).attrs({
  height: 18,
  width: 30,
})``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.MontserratSemiBold};
  font-size: 16px;
  line-height: 16px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.MontserratRegular};
  font-size: 12px;
  line-height: 15px;
`;
