import styled from 'styled-components/native';

export const Container = styled.View`
  row-gap: 30px;
  padding: 0px 16px;
`;

export const InstallmentsBlock = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Installments = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.MontserratSemiBold};
  font-size: 16px;
  line-height: 20px;
`;

export const InstallmentsFeeBlock = styled.View`
  row-gap: 16px;
`;

export const InstallmentsFee = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DescriptionFee = styled.Text`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.MontserratRegular};
  font-size: 14px;
  line-height: 18px;
`;

export const ValueFee = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.MontserratSemiBold};
  font-size: 14px;
  line-height: 18px;
`;
