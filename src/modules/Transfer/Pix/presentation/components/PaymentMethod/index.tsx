import React from 'react';

import { RadioButton } from '~/components';

import { IPaymentMethod } from './model';
import * as S from './styles';

export const PaymentMethod: React.FC<IPaymentMethod> = ({
  onChangeSelected,
  isSelected,
  titleIcon,
  title,
  description,
}) => {
  return (
    <S.Container
      onPress={onChangeSelected}
      disabled={isSelected}
      activeOpacity={0.9}
    >
      <RadioButton isSelected={isSelected} onPress={() => {}} />
      <S.Content>
        <S.ContentTitle>
          {titleIcon !== undefined && <S.Icon uri={titleIcon} />}
          <S.Title>{title}</S.Title>
        </S.ContentTitle>
        <S.Description>{description}</S.Description>
      </S.Content>
    </S.Container>
  );
};
