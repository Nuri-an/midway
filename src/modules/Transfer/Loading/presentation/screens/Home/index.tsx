import React, { useEffect } from 'react';

import LottieView from 'lottie-react-native';

import { usePostPayment } from '@Loading/data';
import { StackScreenProps } from '@react-navigation/stack';

import { ITransferParamList } from '~/types';

import * as S from './styles';

type LoadingScreenProps = StackScreenProps<ITransferParamList, 'Loading'>;

export const Loading: React.FC<LoadingScreenProps> = ({ navigation }) => {
  const { isFetched } = usePostPayment();

  useEffect(() => {
    if (isFetched) navigation.navigate('Successful');
  }, [isFetched]);

  return (
    <S.Wrapper>
      <S.Container>
        <LottieView
          source={require('../../../../../../assets/animations/loading-circle.json')}
          style={{
            width: 100,
            height: 100,
            alignSelf: 'center',
          }}
          autoPlay
          loop
        />
        <S.Text>Processando sua transferência</S.Text>
      </S.Container>
    </S.Wrapper>
  );
};
