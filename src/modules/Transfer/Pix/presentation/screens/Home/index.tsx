import React, { useState } from 'react';

import { useGetCards, useGetPayment } from '@Pix/data';
import { InstallmentDTO } from '@Pix/domain/entities';
import {
  BottomSheet,
  Footer,
  Installments,
  PaymentMethod,
} from '@Pix/presentation/components';
import { StackScreenProps } from '@react-navigation/stack';

import { ITransferParamList } from '~/types';
import { FormatersUtil } from '~/utils';

import { PaymentMethodType } from './model';
import * as S from './styles';

type PixScreenProps = StackScreenProps<ITransferParamList, 'Pix'>;

export const Pix: React.FC<PixScreenProps> = ({ navigation }) => {
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethodType>('account');
  const [simulator, setSimulator] = useState<InstallmentDTO>();
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  const { data: cards } = useGetCards();
  const { data: payment, isPending } = useGetPayment(paymentMethod);

  const selectPaymentMethod = async (method: string) => {
    setPaymentMethod(method);
    setSimulator(undefined);
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Content>
          <S.Title>Transferência Pix</S.Title>
          <S.Description>Escolha uma forma de pagamento</S.Description>

          <S.PaymentMethod>Conta Midway</S.PaymentMethod>
          <PaymentMethod
            title="Saldo em conta"
            description={`Disponível: ${FormatersUtil.Currency(2000, 'BRL')}`}
            isSelected={paymentMethod === 'account'}
            onChangeSelected={() => selectPaymentMethod('account')}
          />

          {cards !== undefined && (
            <S.CardsBlock>
              <S.PaymentMethod centralize>Cartões de crédito</S.PaymentMethod>
              <S.CardsList>
                {cards?.map(card => (
                  <S.CardBlock key={card.brand}>
                    <PaymentMethod
                      title={`Cartão ${card.brand}`}
                      description={`Final ${card.cardNumber}`}
                      isSelected={paymentMethod === card.brand}
                      onChangeSelected={() => selectPaymentMethod(card.brand)}
                      titleIcon={FormatersUtil.CardFlag(card.brand)}
                    />
                    {paymentMethod === card.brand && (
                      <Installments
                        isLoading={isPending}
                        currency={payment?.currency!}
                        transferValue={payment?.amount!}
                        simulator={simulator}
                        onPressInstallment={() => setShowBottomSheet(true)}
                      />
                    )}
                  </S.CardBlock>
                ))}
              </S.CardsList>
            </S.CardsBlock>
          )}
        </S.Content>
      </S.Container>
      <Footer
        isSubmitEnabled={
          (paymentMethod === 'account' || !!simulator) && !!payment
        }
        buttonLabel="Pagar"
        value={
          paymentMethod === 'account' && payment
            ? FormatersUtil.Currency(payment.amount, payment.currency)
            : simulator && payment
              ? `${simulator.installments}x de ${FormatersUtil.Currency(simulator.installmentAmount, payment?.currency)}`
              : '-'
        }
        onSubmit={() =>
          navigation.navigate('Loading', {
            method: paymentMethod,
            installmnets: simulator?.installments ?? 0,
          })
        }
      />
      {!!payment && (
        <BottomSheet
          installmentSelected={simulator}
          installments={payment.simulation}
          currency={payment.currency!}
          onPress={setSimulator}
          onClose={() => setShowBottomSheet(false)}
          isVisible={showBottomSheet}
        />
      )}
    </S.Wrapper>
  );
};
