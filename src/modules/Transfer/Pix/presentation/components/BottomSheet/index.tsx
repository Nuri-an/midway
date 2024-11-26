import React, { useEffect, useState } from 'react';

import { Animated, Dimensions, View } from 'react-native';
import {
  GestureEvent,
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { InstallmentDTO } from '@Pix/domain/entities';

import { Close } from '~/assets/svg';
import { ButtonShadow, RadioButton } from '~/components';
import { FormatersUtil } from '~/utils';

import { Footer } from '../Footer';

import { IBottomSheet } from './model';
import * as S from './styles';

const { width } = Dimensions.get('screen');

export const BottomSheet: React.FC<IBottomSheet> = ({
  isVisible,
  installments,
  installmentSelected,
  currency,
  onClose,
  onPress,
}) => {
  const { top } = useSafeAreaInsets();
  const topInsets = top + 20;

  const [animatedView] = useState(new Animated.Value(top));
  const [installment, setInstallment] = useState<InstallmentDTO | undefined>(
    installmentSelected,
  );

  const getFormatedValue = () => {
    if (installment)
      return `${installment.installments}x de ${FormatersUtil.Currency(installment.installmentAmount, currency)}`;

    return '-';
  };

  const onSubmit = () => {
    if (installment) {
      onPress(installment);
      onClose();
    }
  };

  const animateClose = (): void => {
    Animated.timing(animatedView, {
      toValue: 500,
      duration: 900,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) {
        onClose();
      }
    });
  };

  const handleGesture = (
    evt: GestureEvent<PanGestureHandlerEventPayload>,
  ): void => {
    const { nativeEvent } = evt;
    const offset = 30;

    if (nativeEvent.absoluteY > topInsets)
      animatedView.setValue(nativeEvent.absoluteY - offset);

    if (nativeEvent.absoluteY > width / 2) animateClose();
  };

  const resetState = () => {
    animatedView.resetAnimation();
    setInstallment(undefined);
  };

  useEffect(() => {
    if (!isVisible) resetState();
  }, [isVisible]);

  return (
    <S.Wrapper visible={isVisible} transparent>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <S.Container topInsets={topInsets}>
          <PanGestureHandler onGestureEvent={handleGesture}>
            <S.Content
              style={{
                transform: [{ translateY: animatedView }],
              }}
            >
              <View>
                <S.Swipper />
                <S.Header>
                  <S.TitleBlock>
                    <S.Title>Parcelas do pagamento</S.Title>
                    <ButtonShadow onPress={onClose}>
                      <Close />
                    </ButtonShadow>
                  </S.TitleBlock>
                  <S.Description>
                    O destinatário receberá à vista e você pagará parcelado.
                  </S.Description>
                </S.Header>
                <S.InstallmentsList>
                  {installments.map(item => (
                    <RadioButton
                      isSelected={item === installment}
                      onPress={() => setInstallment(item)}
                      key={item.installments}
                    >
                      <S.Installment>
                        {item.installments}x de{' '}
                        {FormatersUtil.Currency(
                          item.installmentAmount,
                          currency,
                        )}
                      </S.Installment>
                    </RadioButton>
                  ))}
                </S.InstallmentsList>
              </View>
            </S.Content>
          </PanGestureHandler>
        </S.Container>
        <Footer
          isSubmitEnabled={!!installment}
          buttonLabel="Continuar"
          value={getFormatedValue()}
          onSubmit={onSubmit}
        />
      </GestureHandlerRootView>
    </S.Wrapper>
  );
};
