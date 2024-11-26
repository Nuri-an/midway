import React from 'react';

import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '../Button';

import { IFooter } from './model';
import * as S from './styles';

export const Footer: React.FC<IFooter> = ({ value, isSubmitEnabled }) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <S.Container bottomInsets={bottom}>
      <View>
        <S.Description>Valor a ser pago</S.Description>
        <S.Value>{value}</S.Value>
      </View>
      <Button disabled={!isSubmitEnabled} label="Pagar" onPress={() => {}} />
    </S.Container>
  );
};
