import React from 'react';

import LottieView from 'lottie-react-native';

import { ChevronRight } from '~/assets/svg';
import { FormatersUtil } from '~/utils';

import { IInstallments } from './model';
import * as S from './styles';

export const Installments: React.FC<IInstallments> = ({
  simulator,
  currency,
  transferValue,
  isLoading,
  onPressInstallment,
}) => {
  const getFormatedFee = (fee: number) => {
    if (fee > 0) return fee.toFixed(2).replace('.', ',');

    return '-';
  };

  if (isLoading)
    return (
      <LottieView
        source={require('../../../../../../assets/animations/loading-bubles-circle.json')}
        style={{
          width: 100,
          height: 60,
          alignSelf: 'center',
        }}
        autoPlay
        loop
      />
    );

  return (
    <S.Container>
      <S.InstallmentsBlock onPress={onPressInstallment}>
        <S.Installments>
          {simulator
            ? `${simulator.installments}x de ${FormatersUtil.Currency(simulator.installmentAmount, currency)}`
            : 'Escolher Parcelas'}
        </S.Installments>
        <ChevronRight />
      </S.InstallmentsBlock>
      {simulator && (
        <S.InstallmentsFeeBlock>
          <S.InstallmentsFee>
            <S.DescriptionFee>Valor a transferir</S.DescriptionFee>
            <S.ValueFee>
              {FormatersUtil.Currency(transferValue, currency)}
            </S.ValueFee>
          </S.InstallmentsFee>

          <S.InstallmentsFee>
            <S.DescriptionFee>Taxa do cartão</S.DescriptionFee>
            <S.ValueFee>
              {getFormatedFee(simulator.fees.fixed.amount)}
            </S.ValueFee>
          </S.InstallmentsFee>

          <S.InstallmentsFee>
            <S.DescriptionFee>Taxa de parcelamento</S.DescriptionFee>
            <S.ValueFee>
              {getFormatedFee(simulator.fees.installments.amount)}
            </S.ValueFee>
          </S.InstallmentsFee>

          <S.InstallmentsFee>
            <S.DescriptionFee>Valor a transferir + taxas </S.DescriptionFee>
            <S.ValueFee>
              {simulator.installments}x de{' '}
              {FormatersUtil.Currency(simulator.installmentAmount, currency)}
            </S.ValueFee>
          </S.InstallmentsFee>
        </S.InstallmentsFeeBlock>
      )}
    </S.Container>
  );
};
