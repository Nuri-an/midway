import React, { useState } from 'react';

import { useGetCards, useGetPayment } from '@Pix/data';
import { InstallmentDTO } from '@Pix/domain/entities';
import {
  BottomSheet,
  Installments,
  RadioButton,
} from '@Pix/presentation/components';

import { FormatersUtil } from '~/utils';

import { PaymentMethodType } from './model';
import * as S from './styles';

export const Pix: React.FC = () => {
  const { data: cards } = useGetCards();
  const { data: payment } = useGetPayment();

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethodType>('account');
  const [simulator, setSimulator] = useState<InstallmentDTO>();

  return (
    <S.Wrapper>
      <S.Container>
        <S.Content>
          <S.Title>Transferência Pix</S.Title>
          <S.Description>Escolha uma forma de pagamento</S.Description>

          <S.PaymentMethod>Conta Midway</S.PaymentMethod>
          <RadioButton
            title="Saldo em conta"
            description={`Disponível: ${FormatersUtil.Currency(2000, 'BRL')}`}
            isSelected={paymentMethod === 'account'}
            onChangeSelected={() => setPaymentMethod('account')}
          />

          {cards !== undefined && (
            <S.CardsBlock>
              <S.PaymentMethod centralize>Cartões de crédito</S.PaymentMethod>
              <S.CardsList>
                {cards?.map(card => (
                  <S.CardBlock key={card.brand}>
                    <RadioButton
                      title={`Cartão ${card.brand}`}
                      description={`Final ${card.cardNumber}`}
                      isSelected={paymentMethod === card.brand}
                      onChangeSelected={() => setPaymentMethod(card.brand)}
                      titleIcon={FormatersUtil.CardFlag(card.brand)}
                    />
                    {paymentMethod === card.brand && (
                      <Installments
                        currency={payment?.currency!}
                        transferValue={payment?.amount!}
                        simulator={simulator}
                      />
                    )}
                  </S.CardBlock>
                ))}
              </S.CardsList>
            </S.CardsBlock>
          )}
        </S.Content>
      </S.Container>
      <BottomSheet
        isSubmitEnabled={false}
        value={FormatersUtil.Currency(2000, 'BRL')}
      />
    </S.Wrapper>
  );
};
