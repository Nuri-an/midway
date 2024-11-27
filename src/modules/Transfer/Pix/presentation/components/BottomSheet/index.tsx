import React, { useEffect, useState } from 'react';

import { Animated, Dimensions, Modal, Platform, StatusBar } from 'react-native';
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

const { height } = Dimensions.get('screen');
const modalHeight = height * 0.83;

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
  const statusBarHeight = StatusBar.currentHeight || 0;

  const [animatedView] = useState(
    new Animated.Value(
      Platform.OS === 'ios' ? top : topInsets + statusBarHeight,
    ),
  );
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
      toValue: height,
      duration: 500,
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
    const offset = 100;

    if (nativeEvent.absoluteY > height - modalHeight + statusBarHeight)
      animatedView.setValue(nativeEvent.absoluteY - offset);

    if (nativeEvent.absoluteY > height / 2) animateClose();
  };

  const resetState = () => {
    animatedView.resetAnimation();
    setInstallment(undefined);
  };

  useEffect(() => {
    if (!isVisible) resetState();
  }, [isVisible]);

  return (
    <Modal visible={isVisible} statusBarTranslucent transparent>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <S.Wrapper topInsets={topInsets}>
          <S.Container
            height={modalHeight}
            style={{
              transform: [{ translateY: animatedView }],
            }}
            onStartShouldSetResponder={() => true}
            onTouchEnd={e => {
              e.stopPropagation();
            }}
          >
            <S.Content>
              <PanGestureHandler onGestureEvent={handleGesture}>
                <S.SwipperContainer>
                  <S.Swipper />
                </S.SwipperContainer>
              </PanGestureHandler>
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
                      {FormatersUtil.Currency(item.installmentAmount, currency)}
                    </S.Installment>
                  </RadioButton>
                ))}
              </S.InstallmentsList>
            </S.Content>
            <Footer
              isSubmitEnabled={!!installment}
              buttonLabel="Continuar"
              value={getFormatedValue()}
              onSubmit={onSubmit}
            />
          </S.Container>
        </S.Wrapper>
      </GestureHandlerRootView>
    </Modal>
  );
};
