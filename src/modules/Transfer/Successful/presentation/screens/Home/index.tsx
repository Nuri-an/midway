import React from 'react';

import { View } from 'react-native';

import { Check } from '~/assets/svg';

import * as S from './styles';

export const Successful: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Pix realizado com sucesso!</S.Title>
        <S.Content>
          <S.IconContainer>
            <S.IconBorder>
              <Check />
            </S.IconBorder>
          </S.IconContainer>

          <S.ContentInfo>
            <S.SubTitle>Para</S.SubTitle>
            <S.RecipientUser>
              Maria da Silva Maria da Silva Maria da Silva Maria da Silva
            </S.RecipientUser>
          </S.ContentInfo>

          <S.ContainerInfo>
            <S.ContentInfo>
              <S.SubTitle>Valor</S.SubTitle>
              <S.TextInfo>R$ 100,00</S.TextInfo>
            </S.ContentInfo>

            <S.ContentInfo>
              <S.SubTitle>Data</S.SubTitle>
              <S.TextInfo>06/12/2024</S.TextInfo>
            </S.ContentInfo>
          </S.ContainerInfo>
        </S.Content>

        <View />
      </S.Container>
    </S.Wrapper>
  );
};
