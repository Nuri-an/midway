import styled, { css } from 'styled-components/native';

import { IPaymentMethod } from './model';

export const Wrapper = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 20,
  },
})`
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.MontserratBold};
  font-size: 24px;
  line-height: 28px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.MontserratSemiBold};
  font-size: 16px;
  line-height: 20px;
  margin: 36px 0px;
`;

export const PaymentMethod = styled.Text<IPaymentMethod>`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.MontserratSemiBold};
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 25px;

  ${({ centralize }) =>
    centralize === true &&
    css`
      text-align: center;
    `}
`;

export const CardsBlock = styled.View`
  margin-top: 40px;
`;

export const CardsList = styled.View`
  row-gap: 16px;
`;

export const CardBlock = styled.View`
  row-gap: 10px;
`;
