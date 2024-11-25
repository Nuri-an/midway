import React, { type ReactElement } from 'react';

import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';

import * as S from './styles';

const Routes = (): ReactElement => {
  const { colors } = useTheme();

  return (
    <S.ContainerLoading>
      <ActivityIndicator color={colors.primary} />
    </S.ContainerLoading>
  );
};
export default Routes;
