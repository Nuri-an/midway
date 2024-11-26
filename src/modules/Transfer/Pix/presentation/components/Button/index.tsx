import React from 'react';

import { IButton } from './model';
import * as S from './styles';

export const Button: React.FC<IButton> = ({ label, disabled, ...rest }) => {
  return (
    <S.Container disabled={disabled} {...rest}>
      <S.Text>{label}</S.Text>
    </S.Container>
  );
};
