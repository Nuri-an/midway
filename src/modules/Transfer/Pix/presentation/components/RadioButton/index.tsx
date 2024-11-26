import React from 'react';

import { IRadioButton } from './model';
import * as S from './styles';

export const RadioButton: React.FC<IRadioButton> = ({
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
      <S.ContentDot>{isSelected && <S.Dot />}</S.ContentDot>
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
