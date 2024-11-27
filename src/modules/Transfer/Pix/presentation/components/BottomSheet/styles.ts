import { Animated } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import { IContainer, IWrapper } from './model';

export const Wrapper = styled.View<IWrapper>`
  padding-top: ${({ topInsets }) => topInsets}px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.darkGray}cc;
`;

export const Container = styled(Animated.View)<IContainer>`
  background-color: ${({ theme }) => theme.colors.white};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  height: ${({ height }) => height}px;
  justify-content: space-between;
`;

export const Content = styled.View`
  padding: 12px 24px;
`;

export const SwipperContainer = styled.View`
  width: 100%;
  padding-bottom: 20px;
`;

export const Swipper = styled.View`
  width: 48px;
  height: 6px;
  border-radius: 100px;
  align-self: center;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const Header = styled.View`
  padding-bottom: 20px;
  row-gap: 8px;
`;

export const TitleBlock = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.MontserratBold};
  font-size: 18px;
  line-height: 22px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.MontserratRegular};
  font-size: 14px;
  line-height: 18px;
`;

export const InstallmentsList = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    rowGap: 30,
    paddingVertical: 30,
  },
})`
  height: 75%;
`;

export const Installment = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.MontserratSemiBold};
  font-size: 16px;
  line-height: 20px;
`;
