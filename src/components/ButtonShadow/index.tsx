import React from 'react';

import { IButtonShadow } from './model';
import * as S from './styles';

export const ButtonShadow: React.FC<IButtonShadow> = ({
  onPress,
  children = null,
}) => {
  return (
    <S.Container onPress={onPress} activeOpacity={0.9}>
      {children}
    </S.Container>
  );
};
