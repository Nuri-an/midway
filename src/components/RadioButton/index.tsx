import React from 'react';

import { IRadioButton } from './model';
import * as S from './styles';

export const RadioButton: React.FC<IRadioButton> = ({
  isSelected,
  onPress,
  children = null,
}) => {
  return (
    <S.Container onPress={onPress} activeOpacity={0.9} disabled={isSelected}>
      <S.ContentDot>{isSelected && <S.Dot />}</S.ContentDot>
      {children}
    </S.Container>
  );
};
